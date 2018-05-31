---
title: Memberdatabase
caption: "A web-based database to manage members of a scout organisation."
duration: SEP 2015 - JUN 2016
time: SEP 2015
team: 8
tags:
  - Baslasmiq
  - AngularJS
  - Database
tools:
  - SurveyMonkey
  - Balsamiq
  - Eclipse
  - Github
---

<figure>
  <img src="/assets/img/memberdatabase/md-header.png">
</figure>

This was my second big project at the University of Applied Sciences and Arts Northwestern Switzerland FHNW. The process was almost the same as in <a class="link" href="/portfolio/webshop" target="_blank">Webshop</a> with eight team members and over the course of two semesters. Unlike in my first project, this time we had an external, real world client. This meant we had some changes to our approach to the project, but mainly the communication had to be more efficient.

# Goal

Our client, the scouts organisation of Allschwil, were using an old and bloated software to manage their members and the goal was to replace this with a modern and efficient solution to reduce their administrative effort. In addition to that, one requirement from the client was that the solution needs to be easy to understand, so this meant usability was an important factor for this project.

<figure>
  <img src="/assets/img/memberdatabase/md-comparison.png">
  <figcaption>A comparison between the original old software and how our new solution looks.</figcaption>
</figure>

# My Role

Like with my first project, we had seven different roles to occupy, however the condition from the university was that you can’t do the same role you did in the last project. So this meant I couldn’t be the usability manager or test manager, therefore I chose to be the quality manager in the first semester and software architect for the second semester.

I had different roles this time, but since I already did the usability manager role in the last project, I was able to help the usability manager in this project and give them feedback and inputs on some artefacts. Same as in the first project, I also had to code on the software itself.

# Process

Since I didn’t have a big part on the usability process, I won’t be going into any details here. The main process was similar to how I did it in my first project. Meaning, we started with creating a survey, evaluating the data, create the persona, create wireframes, create mockups, create prototypes and finally do a few usability tests. I had some input on most of the artefacts, but didn’t actively work on them, so I feel like I can still show some of the artefacts here.

<figure>
  <img src="/assets/img/memberdatabase/md-paper.png">
  <figcaption>These are some of the paper prototypes and wireframes created with wireframe.cc.</figcaption>
</figure>

<br>

<figure>
  <img src="/assets/img/memberdatabase/md-mockup.png">
  <figcaption>Some mockups created in Balsamiq to use for an early usability test.</figcaption>
</figure>

# Forms

The big part I worked on was the form feature for events. I mainly worked on this alone and got some help towards the end of it. The goal was to have a button that would generate a form for an event with random fields selected by the user. This form would then be sent to the members of the scouts organisation, so this meant the form had to be easily understood and easy to fill in.

<figure>
  <img src="/assets/img/memberdatabase/md-createform.png">
  <figcaption>The detailed screen of an event and the selected tab to chose the fields for the form.</figcaption>
</figure>

Since we already had a theme and basic layout for fields, it was easy to style the base template for the form. However getting the different fields to show on the form turned out to be not an easy task. The form had to support different types, like dropdown, checkbox, number and text fields and to display them properly required a lot of logic in the code.

The solution was being created with AngularJS and because I didn’t know it prior to this project, I couldn’t do some of the advanced stuff. Thankfully we had a very good coder, who knew almost everything about AngularJS and could help me with the fields type logic. Otherwise I would’ve probably spent a lot more time on this.

<figure>
  <img src="/assets/img/memberdatabase/md-events.png">
  <figcaption>Overview of all the events that have been created.</figcaption>
</figure>

<br>

<figure>
  <img src="/assets/img/memberdatabase/md-form.png">
  <figcaption>This is how the form will look like for people who need to fill it out.</figcaption>
</figure>

# Lessons Learned

Working with a real world client was an interesting experience for me, it was nothing like how it was in my first project. My client in the first project was very experienced in creating requirements, because he was an internal employee of the university and knew how these projects worked.

However working with a real world client meant that we were fully in charge of creating the requirements and we didn’t really do a good job. The amount of times the client changed the requirements made me realise that we needed to further specify these in advance and only leave room for small changes. Because of this we had a lot of requirements added late to the project and we had to hurry and invest more hours than originally planned.

This was my first AngularJS project and there were only two people on our team that were experienced with it and the rest never heard about it until this project. So this meant a lot of the project time was spent on learning it and for some it was easy and for others not so much. At the beginning I was having difficulty understanding it, but when I was working on the forms I started to get it more and slowly started to understand how AngularJS worked.

I really liked working on this project, mainly because the team was really enjoyable to work with, but also because I learned a lot about AngularJS and databases. Also as someone who is very interested in usability, seeing someone else do the job, was a new experience for me and experiencing it as member of the team made me realise how helpful usability is for any project.
