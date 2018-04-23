
# How to contribute

## Getting Started

* Make sure you have a [GitHub account](https://github.com/signup/free)
* Fork the repository on GitHub

## Making Changes

* Create a [*topic* branch](http://nvie.com/posts/a-successful-git-branching-model/) from where you want to base your work.
  * This is usually a branch named `feature/foo-bar-baz` or `bug/foo-bar-baz`.
* Before submitting your change, [squash all your commits](https://github.com/ginatrapani/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit).
* Check for unnecessary whitespace with `git diff --check` before committing.
* Make sure your commit messages are in [the proper format](http://chris.beams.io/posts/git-commit/).

````
    (Verb) Summary in under 55 characters
    (blank line)
    Describe this change in as many lines as you like,
    each line under 55 characters (!) in width.
````

* If the repository has tests, make sure you have added the necessary tests for your changes, and run _all_ the tests to assure nothing else was accidentally broken.

## Submitting Changes

* Push your changes to a [*topic* branch](http://nvie.com/posts/a-successful-git-branching-model/) in your fork of the repository.
* Submit a pull request to the parent repository.
  * Pull requests with blank titles and summaries will not be accepted.

# Additional Resources

* [Puppet How to contribute](https://github.com/puppetlabs/puppet/blob/master/CONTRIBUTING.md), where I ripped this file
