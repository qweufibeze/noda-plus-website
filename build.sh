#!/bin/bash
# Build script for Noda+ website
# Minifies CSS and JS files

set -e

echo "🚀 Building Noda+ website..."

cd "$(dirname "$0")/public"

# Minify CSS
echo "📦 Minifying CSS..."
npx --yes clean-css-cli -o styles.min.css styles.css

# Minify JS
echo "📦 Minifying JS..."
npx --yes terser script.js -o script.min.js -c -m

echo "✅ Build complete!"
echo ""
echo "File sizes:"
wc -c styles.css styles.min.css script.js script.min.js | tail -5


