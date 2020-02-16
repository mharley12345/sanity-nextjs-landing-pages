export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e490a0b1f85411d6c61f305',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rmfv8efy',
                  apiId: 'eadaf259-4380-4975-97f8-919aa726ea65'
                },
                {
                  buildHookId: '5e490a0c34f94f8aac73d0fb',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-kiiwdd2g',
                  apiId: '73a1c31a-79c3-4097-b813-15e5f837d383'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mharley12345/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-kiiwdd2g.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
