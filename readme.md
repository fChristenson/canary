# What is a canary release and how can we do it with Kubernetes?

## What we will cover

- What is a canary release?
- What is the benefit of a canary release?
- How can we make one with Kubernetes?

## Notes

A canary release is when we release a test version of our new application in to production and only
route a certain amount of traffic to that instance so we can see if it works.

Once we know that it works we can deploy the new version but if it fails for just a few users
we can rollback the canary and fix the problems
