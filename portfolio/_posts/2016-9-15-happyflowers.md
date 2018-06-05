---
title: Happyflowers
caption: "An automated plant watering system with a web dashboard."
duration: SEP 2016 - JAN 2017
time: SEP 2016
team: 2
tags:
  - React
  - RaspberryPi
  - Haskell
tools:
  - Atom
  - Github
  - Sketch
---

<figure>
  <img src="/assets/img/happyflowers/hf-header.png">
</figure>

This was another project as part of my studies at the University of Applied Sciences and Arts Northwestern Switzerland FHNW. It was like <a class="link" href="/portfolio/webshop" target="_blank">Webshop</a> and <a class="link" href="/portfolio/memberdatabase" target="_blank">Memberdatabase</a>, however with some big changes, the team size shrunk to two people and we only got one semester time to finish it.

This meant the scope of the project was smaller, but there was still a lot to do, which required very good planning. As part of the project we also created a promotional website to show what this project is about and you can find it <a class="link" href="https://sacha.me/happyflowers/" target="_blank">here</a>.

# Goal

The goal of this project was to save the plants that were dying at the university by automating the watering process with a Raspberry Pi, because people forgot to water them. But a more important goal was to use Haskell to create this project and to show that Haskell is useful for web apps as well. The React web part of this project is supposed to work as a dashboard, where one can check the details on their flower and even manually pump if needed.

Another requirement from the client, an internal employee at the university, was that the code will be used for teaching in a future course, so this meant that we had to document everything properly and easy to understand.

<figure>
  <img src="/assets/img/happyflowers/hf-dashboard.png">
  <figcaption>This is how the dashboard looks like with widgets showing data about the flower.</figcaption>
</figure>

On top of the project itself the university also required us to write a project report with around 40-50 pages. This was so that we could prepare ourselves for our final bachelor’s thesis. My colleague and I have never written a report before, so this meant a lot of time was spent on reading up on how to write a report.

# My Role

Unlike in my other FHNW projects, here we didn’t have to take on any specific role. This meant we had the liberty of doing anything, but that also meant we had to agree between each other who’s doing what. The first thing we agreed on was to leave all those specific roles behind and do most of it together.

When we were finished with the administrative work, we split the project in two, one person would focus on the Haskell part and the other would focus on the Raspberry Pi part. We agreed that my colleague would do the Haskell part, because he already had some knowledge of Haskell and I would do the Raspberry Pi part. We both didn’t know anything about Raspberry Pi, so this meant that I had to read up on it a lot, but thankfully I got a lot of help from the client as well.

<figure>
  <img src="/assets/img/happyflowers/hf-flower.png">
  <figcaption>This was our test subject Cecelia with a moisture sensor.</figcaption>
</figure>

# Process

For this project we didn’t follow any traditional processes or anything, we just created a requirements list and then directly started working on the project. No persona, no wireframes, no prototypes and no usability tests. We decided together that we didn’t need any of it, because we knew how the final product should look like and more importantly we didn’t want to waste time because we had a lot to do in only one semester.

I started with watching YouTube videos to learn about Raspberry Pi and to see how it works. After a few videos I got the general idea and started reading guides/blog posts. Then it was time to work on the real thing and it was actually easy to do so. The problems started with getting everything to work together.

It turned out connecting the Raspberry Pi to the backend wasn’t as easy we initially expected, however with the help of the client we could get it done. Another problem was that the developing environment was hard to set up, we had to do a lot adjustments to our network setting on our MacBooks to be able to connect the Raspberry Pi to it. Getting the sensors to work properly took a lot of time as well, because some were faulty and sometimes I messed up the wiring.

<figure>
  <img src="/assets/img/happyflowers/hf-wires.png">
  <figcaption>The basic wiring of all the parts, it was not always easy to get the wiring right.</figcaption>
</figure>

Once we figured out how to connect everything, we only had the frontend to finish and that part went very well, because both of us had good experience in frontend development.

# Lessons Learned

At the start of the project I didn’t think I would be able to do such a project and I’m glad I proved myself wrong. There was a lot of new things for me to learn and I had fun learning them. Most interesting part to me was definitely the Raspberry Pi and I was impressed with all the possible ways we could use it.

The wiring of the Raspberry Pi to the sensors scared me at first, because I could mess something up and probably break something important. Luckily, I never broke anything and I learned that you can’t break something as long as you follow the instructions properly. It was very interesting to connect all these wires around and then see how everything started to work.

Also working in a smaller group made me appreciate how useful a bigger team can be. However working in a smaller team had it’s advantages as well, we would dedicate one day of the week to work together on the project and we would sit next to each other, so that we could also exchange information as we were working on our part separately.
