export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '605758c5eb158100e2b41962',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-qcwe93v3',
                  apiId: 'fe2b9b87-9d0f-4e05-bce7-bcdea965e0ed'
                },
                {
                  buildHookId: '605758c6e13312ad3eaf8bc0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9v3do3ue',
                  apiId: '47724ce9-760f-4427-aa71-cf019fce0962'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hhbarnes/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9v3do3ue.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
