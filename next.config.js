module.exports = {
    async rewrites() {
      return [
        {
          source: '/.well-known/vercel/flags',
          destination: '/api/vercel/flags',
        },
      ]
    },
  }