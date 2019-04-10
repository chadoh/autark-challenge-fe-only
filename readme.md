Autark Frontend Engineer Challenge
==================================

A frontend-only, traditionally-deployable version of [the Autark frontend
engineer challenge](https://github.com/chadoh/autark-fe-challenge).


Using the app
=============

Visit https://chadoh.com/autark-challenge-fe-only

All information is in read-only mode unless you sign in. Right now, the app
spoofs sign-in and just asks for a username. **To edit data, sign in as
`mod`.** If you enter anything other than "mod" at the username prompt, you
won't be able to edit anything.

When you edit data, it will all be saved to your browser's localstorage. You
can refresh the page and your edits will still be there, but if you visit from
another browser you'll see the default data again.

And yes! Visit from other browsers. I get into this more below, but this app
thrives when visited from a phone or when using a screen reader.


Exercise Retrospective
======================

On Thursday, 4 April 2019, I received an email from Autark asking me to complete this challenge within a week. The requirements[[1]](https://docs.google.com/document/d/1q1ADfotqZ8KhF2p5FLqJhv15QTx4gW-dazusJOAEMIE/edit#):

> Using [the Widget App](https://github.com/AutarkLabs/fe-dev-challenge) as a starting point, build a widget-editing app with the following features:
>
> 1. Each widget has a customizable title and body text.
> 2. The body text will have support for markdown in addition to embedding images.
> 3. The user should be able to add, delete, and update the text of the widgets. These actions will be protected by a role.
> 4. Widgets should have both an “edit” mode and a “view” mode.
> 5. The user should be able to customize the widget into various rectangular sizes, in addition to being able to rearrange the location of the widgets into a grid (that has at least 3 columns).


My Approach
-----------

Autark [lists accessibility a core pillar of the organization](https://github.com/AutarkLabs/flock/blob/autark-proposal/teams/Autark/2019Q1-2.md), so I wanted to ensure that anything I built would work well for any screen size or interaction mode. Here ways I've tested to use this app

Also, as this was a frontend engineering challenge, I wanted to focus on building a fully usable frontend app, even if it didn't yet interact with an actual blockchain.




Build process
=============

The production version of this site lives in `docs/index.html`. This file is
**generated automatically** when you run `npm run build`, and should not be
edited. Only edit the files in `src`.

To get started working on this repo:

* Clone or download the code
* Run `npm install` in the project directory
* Run `npm run dev` to start the development server
* Run `npm run build` to build a new version of `index.html`

Then you can set up your GitHub repo as a GitHub Pages repo, using files from
`master` branch and the `docs` folder.

If you want to auto-build on every commit so you never forget, create a file at
`.git/hooks/pre-commit` with these contents:

    npm run build && git add docs/index.html
