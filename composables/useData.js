export default ()=>{

  const reviews=[{
      authorName:'Racheael',
      description:'your app brings so much peace and tolerence to our home',
      about:'on meditations positive effects of life',
      address:'uk'
      },
      {
          authorName:'Peter',
          description:'Best software development company',
          about:'infolite business LLP',
          address:'Belgium'
      },
      {
      authorName:'keri',
      description:'Headspace provides me with... a connection to my self and a disconnection from negative thoughts,feeling,sensations',
      about:'on finding her happy place',
      address:'uk'
      },
      {
      authorName:'David',
      description:'changing my thoughts has allowed me to change my life',
      about:'on meditations positive effects of life',
      address:'london'
      },
      {
       authorName:'David',
      description:'changing my thoughts has allowed me to change my life',
      about:'on meditations positive effects of life',
      address:'london'
       },
      {
      authorName:'David',
      description:'changing my thoughts has allowed me to change my life,changing my thoughts has allowed me to change my life,',
      about:'on meditations positive effects of life',
      address:'london'
      }]


      const hide =ref(false)
      const hide1 =ref(false)
      const hide2 =ref(false)
      const hide3 =ref(false)
      const hide4 =ref(false)
      const hide5 =ref(false)
      const hide6 =ref(false)
      const hide7 =ref(false)
      const hide8 =ref(false)
      const hide9 =ref(false)


      const rightServices = [
          {
            title: 'WEB DEVELOPMENT',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'MOBILE APP DEVELOPMENT',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'UI/UX DESIGN',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'CONTENT STRATEGY',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          }]
     const leftServices =[     
          {
            title: 'INVESTMENT MANAGEMENT PORTAL',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'CRYPTOCURRENCY/BLOCK CHAIN APPLICATION',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'CROWED FUNDING SOFTWARE',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'MERCHANT CASH ADVANCE PORTAL',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'BNPL E-COMMERCE SOLUTIONS',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
          {
            title: 'CRM FOR FINANCE INDUSTRY',
            description: 'we create  hybrid mobile application using flutter/reactive native.Our ready to use or custom made apps can be integrated with all our business solutions'
          },
        ]


  return{
      reviews,rightServices,
      leftServices,hide,
      hide1,
      hide2,
      hide3,
      hide4,
      hide5,
      hide6,
      hide7,
      hide8,hide9
  }
}

