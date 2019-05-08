# Redirector

Use Redirector when moving a website to a new domain.

## Prereqs

- Node Package Manager: npm
- NodeJs: node
- Google Cloud Platform account

## Getting Started

1. Fork the repo
2. Clone the repo - git clone https://github.com/{your account goes here}/redirector.git
3. Install - npm install
4. Build - npm run build
5. Test local - npm run start (view on localhost:8080)
6. Create a GCP Project - https://cloud.google.com/resource-manager/docs/creating-managing-projects
7. Mirror Github repo with GCP - https://cloud.google.com/source-repositories/docs/mirroring-a-github-repository
8. Create a build trigger - https://cloud.google.com/cloud-build/docs/running-builds/automate-builds
9. Make a change
10. Add the change, commit, and push to Github - git add .;git commit -m "blah, blah, blah";git push origin master
11. Test on GCP

The github repo is synced with Google Source repository and there is a trigger to automate the deployment.

### References:

- [NodeJS (node)](https://nodejs.org/en/about/)
- [Express](https://expressjs.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Google App Engine (GAE)](https://cloud.google.com/appengine/)
- [Running Node on GAE](https://cloud.google.com/nodejs/)
- [Mirroring a Github Repo to Google Cloud Platform (GCP)](https://cloud.google.com/source-repositories/docs/mirroring-a-github-repository)
- [Running a Custom Build Script for NodeJS on GCP](https://cloud.google.com/appengine/docs/standard/nodejs/running-custom-build-step)
