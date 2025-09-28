import { MessageCircle, Github, Twitter, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
                DevForum
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              A modern community platform where developers connect, share
              knowledge, and build amazing things together.
            </p>
            <div className="flex space-x-2">
              <button className="p-2 rounded hover:text-indigo-600 transition">
                <Github className="w-5 h-5" />
              </button>
              <button className="p-2 rounded hover:text-indigo-600 transition">
                <Twitter className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Community</h4>
            <div className="space-y-2">
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Discussions
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Popular Posts
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Tags
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Members
              </button>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Resources</h4>
            <div className="space-y-2">
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Guidelines
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Help Center
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                API Docs
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Blog
              </button>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Company</h4>
            <div className="space-y-2">
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                About Us
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Careers
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Privacy Policy
              </button>
              <button className="block text-left text-gray-600 hover:text-indigo-600 transition">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {currentYear} DevForum. All rights reserved.
          </p>
          <div className="flex items-center space-x-1 text-sm text-gray-600 mt-2 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by the DevForum team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
