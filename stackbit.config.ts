import { defineStackbitConfig } from '@netlify/visual-editor'

export default defineStackbitConfig({
    ssgName: 'eleventy',
    nodeVersion: '18', // dopasuj, jeśli używasz innej wersji Node
    models: [
        {
            name: 'page',
            type: 'page',
            filePathPattern: 'src/pages/**/*.md', // tu daj ścieżkę do swoich plików treści
            urlPath: '/{slug}', // Netlify zmapuje ścieżki na URL
            fields: [
                { name: 'title', type: 'string', label: 'Tytuł' },
                { name: 'body', type: 'markdown', label: 'Treść' },
            ],
        },
        {
            name: 'data',
            type: 'data',
            filePathPattern: 'src/data/**/*.json', // jeśli masz dane w JSON
        },
    ],
})
