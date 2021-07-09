# NextJS with amplify 

1. package npm script `build` contains `next build` indicating it uses SSG and SSR. To only use SSG change this to `next build && next export`
2. make sure you've configured amplify correctly
3. Since we've attached our git repo to amplify, when you push branch, amplify will call CI/CD to deploy within a EC2 instance 
