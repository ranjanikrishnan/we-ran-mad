## Kitty and Kuttan website

Welcome to the codebase of Kitty & Kuttan

## Setup

- Install npm & install node version `>=12.13` (use of nvm recommended)

- Install Gatsby

```
npm install -g gatsby
```

- Install project related dependencies

```
npm install

# amazing directory name alert
cd gatsby-wedding-theme/gatsby-theme-wedding/ && npm install
```

To run the project in development mode

```
gatsby develop
```

To deploy any changes to the project in aws

```
npm run build && npm run deploy
```

## TODO:

- [x] Deployment to S3
- [x] Make deployment to S3 easy
  - one idea would be to use a gatsby plugin
- [x] Buy domain name => pick one of the AWS account
- [ ] RSVP feature?
  - Email feature required?
  - Where to store the data?
  - Design contact form
- [ ] Add youtube link to calender description
- [x] Maps simplify
  - remove review (?)
  - combine to one map
- [ ] description of events (when and where)
  - add links to describe events?
- [ ] change fb, outlook links
- [x] secure the website - https
- [ ] change welcome page - index.js
- [x] carousel of images-timeline?
- [ ] change images in carousel, img in save the date
