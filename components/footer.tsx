"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Mail, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-4 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 md:mb-0"
          >
            <Link href="/">
              <div className="font-mono text-xl font-bold">
                <span className="text-primary">{"<"}</span>
                <span>Jeshsmitha</span>
                <span className="text-primary">{"/>"}</span>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 mb-4 md:mb-0"
          >
            <Link
              href="https://github.com/YueSmitha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="smithayue@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
            <Link
              href="none"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Globe className="h-5 w-5" />
              <span className="sr-only">Website</span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 text-center text-sm text-muted-foreground"
        >
          <p>&copy; {currentYear} Jeshsmitha Sharma. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
