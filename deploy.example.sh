#!/bin/bash

# Noda Plus - Quick Deploy Script
# Copy this file to deploy.sh and configure your credentials

echo "🚀 Deploying to production..."

# Check if there are changes to commit
if [[ -z $(git status -s) ]]; then
    echo "✅ No changes to deploy"
    exit 0
fi

# Show changes
echo "📝 Changes to deploy:"
git status -s

# Add all changes
git add .

# Prompt for commit message
echo ""
read -p "💬 Commit message: " message

if [[ -z "$message" ]]; then
    echo "❌ Commit message is required"
    exit 1
fi

# Create commit
git commit -m "$message

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <noreply@anthropic.com>"

# Push to production
# Note: Configure SSH keys or use sshpass for password authentication
echo "📤 Pushing to production server..."
git push production main

echo "✅ Deployment complete!"
echo "🌐 Check: https://noda.plus"
