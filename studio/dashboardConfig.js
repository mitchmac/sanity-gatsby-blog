export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5d407a94a757770188ba98f9',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-tsw5xp1w',
                  apiId: '421b10a3-d836-4e5f-b51f-208448e5adfa'
                },
                {
                  buildHookId: '5d407a94a757770182ba98dd',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bp9exx9b',
                  apiId: '6d82daa7-0112-4516-8397-4880fe126d82'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mitchmac/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bp9exx9b.netlify.com', category: 'apps'}
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
