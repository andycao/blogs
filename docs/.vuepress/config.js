module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    base: '/blogs/',
    markdown: {
        lineNumbers: true
    },
    plugins: [
        ['@vuepress/google-analytics', {
            'ga': 'UA-162926140-1'
        }],
        ['@vuepress/search', {
            searchMaxSuggestions: 20
        }],
        '@vuepress/back-to-top'
    ]
}