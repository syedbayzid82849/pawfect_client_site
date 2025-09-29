import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    title: z.string().min(1, "Title is required").max(100),
    content: z.string().min(1, "Content is required").max(2000),
    tags: z.array(z.string()).min(1, "At least one tag").max(5),
    postType: z.string().min(1, "Select a post type"),
});

const popularTags = ["React", "JavaScript", "TypeScript", "Node.js", "Python", "Next.js"];
const postTypes = [
    { value: "question", label: "❓ Question" },
    { value: "discussion", label: "💬 Discussion" },
    { value: "tutorial", label: "📚 Tutorial" },
    { value: "showcase", label: "🎨 Showcase" },
    { value: "help", label: "🆘 Help Needed" },
];

export default function NewPostForm({ open, onOpenChange }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [selectedTags, setSelectedTags] = useState([]);
    const [customTag, setCustomTag] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: { title: "", content: "", tags: [], postType: "" },
    });

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        await new Promise((r) => setTimeout(r, 1000));
        console.log("New post:", data);
        form.reset();
        setSelectedTags([]);
        setCustomTag("");
        onOpenChange(false);
        setIsSubmitting(false);
    };

    const handleTagToggle = (tag) => {
        const current = form.getValues("tags");
        let newTags;
        if (current.includes(tag)) {
            newTags = current.filter((t) => t !== tag);
        } else {
            if (current.length >= 5) return;
            newTags = [...current, tag];
        }
        form.setValue("tags", newTags);
        setSelectedTags(newTags);
    };

    const handleAddCustomTag = () => {
        const t = customTag.trim().toLowerCase();
        if (!t || selectedTags.includes(t) || selectedTags.length >= 5) return;
        const newTags = [...selectedTags, t];
        form.setValue("tags", newTags);
        setSelectedTags(newTags);
        setCustomTag("");
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50">
            <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-semibold text-transparent bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text">
                    Create New Post
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                    Share your thoughts, ask questions, or start a discussion.
                </p>

                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Post Type */}
                    <div>
                        <label className="block text-sm font-medium">Post Type</label>
                        <select
                            {...form.register("postType")}
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        >
                            <option value="">Select post type</option>
                            {postTypes.map((t) => (
                                <option key={t.value} value={t.value}>
                                    {t.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium">Title</label>
                        <input
                            type="text"
                            {...form.register("title")}
                            placeholder="Enter a descriptive title..."
                            className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-200"
                        />
                        <p className="text-xs text-gray-500">
                            {form.watch("title")?.length || 0}/100 characters
                        </p>
                    </div>

                    {/* Tags */}
                    <div>
                        <label className="block text-sm font-medium">Tags (max 5)</label>
                        <div className="flex gap-2 mt-2">
                            <input
                                value={customTag}
                                onChange={(e) => setCustomTag(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), handleAddCustomTag())}
                                placeholder="Type a custom tag..."
                                className="flex-1 p-2 border rounded-lg"
                            />
                            <button
                                type="button"
                                onClick={handleAddCustomTag}
                                disabled={!customTag.trim() || selectedTags.length >= 5}
                                className="px-3 py-2 border rounded-lg hover:bg-gray-100"
                            >
                                Add Tag
                            </button>
                        </div>

                        {/* Selected Tags */}
                        {selectedTags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-3 p-3 bg-gray-50 rounded-lg border">
                                {selectedTags.map((tag) => (
                                    <span
                                        key={tag}
                                        onClick={() => handleTagToggle(tag)}
                                        className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm cursor-pointer"
                                    >
                                        #{tag} ×
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Popular Tags */}
                        <div className="mt-3">
                            <p className="text-sm text-gray-500 mb-2">Popular tags:</p>
                            <div className="flex flex-wrap gap-2">
                                {popularTags.map((tag) => (
                                    <span
                                        key={tag}
                                        onClick={() => handleTagToggle(tag.toLowerCase())}
                                        className={`px-2 py-1 rounded-full text-sm cursor-pointer ${selectedTags.includes(tag.toLowerCase())
                                                ? "bg-blue-600 text-white"
                                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                            }`}
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500 mt-1">
                                {selectedTags.length}/5 tags selected
                            </p>
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium">Content</label>
                        <textarea
                            {...form.register("content")}
                            placeholder="Write your post..."
                            className="w-full mt-1 p-2 border rounded-lg min-h-[200px] resize-none focus:ring focus:ring-blue-200"
                        />
                        <p className="text-xs text-gray-500">
                            {form.watch("content")?.length || 0}/2000 characters
                        </p>
                    </div>

                    {/* Footer */}
                    <div className="flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={() => onOpenChange(false)}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-4 py-2 rounded-lg text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90"
                        >
                            {isSubmitting ? "Publishing..." : "Publish Post"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
