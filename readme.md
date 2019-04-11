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

I disagreed with one requirement above, and deprioritized another.

### Accessibility concerns

Autark [lists accessibility a core pillar of the organization](https://github.com/AutarkLabs/flock/blob/autark-proposal/teams/Autark/2019Q1-2.md), so I wanted to ensure that anything I built would work well for any screen size or interaction mode. Here ways I've tested to use this app:

* From an iPhone
* Using Voice Over on macOS (I am happy to demonstrate this in a screenshare)
* From a desktop browser

Crucially, **ensuring accessibility required ignoring the fifth feature requirement.** The fifth requirement states that widgets should be rearrangeable – my implementation satisfies this requirement. It also states the widgets should be customizable into various rectangular sizes – this I chose to avoid.

I could imagine this requirement meaning multiple things, and if we intend to grow this app into something useful I would want to have more conversations about the intent here. But for this built-in-one-week-on-the-side version, any possible version of this seemed like it would break app usability for:

* mobile phone users
* keyboard-only and keyboard-preferring users
* users of screen readers

### Frontend-only

As this was a frontend engineering challenge, I wanted to focus on building a fully usable frontend app, even if it didn't yet interact with an actual blockchain. This required spoofing the backend for two reasons:

1. Authenticating
2. Saving data

In both cases, I've contained the interaction points for these spoofed layers to single files. The main app code requires no change. To add real authentication, only the [app/utils/auth.ts](https://github.com/chadoh/autark-fe-challenge/blob/solution/app/utils/auth.ts) file requires updates.

The data-persistence spoofing I borrowed from an older project. It uses a synchronous API, and has some other design choices that I question now. I would expect it to change a fair bit when adding real persistence to the app. Even so, at that time, very few changes will be needed to the app outside of the [app/database/index.js](https://github.com/chadoh/autark-fe-challenge/blob/solution/app/database/index.js) file.


What went well
--------------

* **Accessibility**

  The widget-based UI had significant accessibility challenges, and I think the solution I came up with works really well. In fact, I think the app might be _more_ usable for keyboard-driven and screen-reader users, because they get to avoid drag and drop!

  I actually took this as an opportunity to learn about the macOS screen reader, called Voice Over. As I built each new interaction, I tried it out multiple times in Voice Over to see if it would make sense to a blind user. Interacting with the app this way convinced me to limit edit-related UI to single Edit buttons for each item, rather than having some of it available all the time.

* **CSS Grid**

  The auto-reflow of the app looks great, and it's all thanks to CSS Grid.

* **Spoofing authentication**

  I initially planned to forego any sort of authentication, thinking I wouldn't have time. I decided to spoof it on Tuesday, and the design for my spoofing layer evolved as I worked. I really like how it turned out and think it gives a good idea of what using the complete version of this app will feel like.


Areas for improvement
---------------------

* **Communication**

  I treated this as a very individualist exercise, and I wish I'd treated it more as a consulting or team exercise.

  For example, after a few days of looking through the starter app and aragonUI, I had developed the approach I wanted to take. At that point, I wish I'd emailed and/or scheduled a meeting to discuss the approach with the Autark team and see if that approach made sense to them.

* **Mobile design**

  The drag-and-drop experience on mobile does not work well. It works well in simulated mobile environments (such as in a desktop browser's Responsive Mode or in the iOS Simulator that comes with Xcode), but it does not work well on an actual phone.

  Partly, this is due to limitations in the drag-and-drop interaction in the first place. Partly, this is due to the small drag handles that I used. I would love to consult with a designer to come up with a better approach that could get around some of these challenges.

* **Design**

  Actually, I'd love to consult with a designer to reimagine the whole app!

  I suspect a designer could come up with a better way to present this UI than a widget-based approach.

* **Internationalization**

  I love that Autark lists internationalization as another core pillar, and I would enjoy moving all app copy to a spoofed i18n layer, which can be populated from IPFS later when we have it ready.

* **aragonUI**

  [I think in](https://bits.theorem.co/css-pro-tips-responsive-font-sizes-and-when-to-use-which-units/) relative units and unpredictable screen resolutions, and was disappointed to see that multiple aragonUI components have hard-coded pixel-based widths. I also think there's room to improve both the user-facing and developer-facing design of some of the components.


Conclusion
----------

I'd love to have a meeting where I can screenshare and show off the keyboard-driven and screen-reader based interactions with this app, so we can discuss the approach and see if we could improve it even more.

During that meeting, I'd also like to hear more about what you were looking for on your side. Were you hoping for more up-front communication? Did you intentionally add requirements that challenge Autark's commitment to accessibility? Where did this challenge come from, and what's its future? What's next for Autark and me?
