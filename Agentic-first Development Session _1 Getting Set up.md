Agentic-first Development Session _1 Getting Set up with Skills-20260410_090525-Meeting Recording
April 10, 2026, 3:05PM

Elliott Leonard started transcription

Elliott Leonard   0:03
So yeah, thanks everybody for coming today. Excited to talk agentic first development and kind of, I know a lot of us have heard about like the rules that have been going around and MCP and all that stuff. And so I guess the goal of today's session is really to make sure that if you're on this call that you are able to fully use.
cloud code locally on your computer and use the skills that we built. And so, like really, if people have questions, like I'd love for them to raise their hand and we can all troubleshoot together because the whole goal of this session is we probably won't be able to build anything today, but it's really just to make sure like that you have the right access, that you have everything downloaded, that you can use the skills.
that you can connect to a Domo instance, just like all the bare bones stuff, because once that's done, you're off to the races, right? Like once you have the bare bones established, you can start building custom apps and App Studio and debug data flows, like all sorts of crazy stuff. So that's really the goal of today's session. So like I said, raise your hand if you are.
like encountering an issue just like what Nik did was a great example. Like, let's just, let's just talk through it.
So the first thing is, has everybody gotten, I know Darren sent out that email and it kind of spurred a lot of us getting cloud code subscriptions. Did everybody fill out this guide and like get added to our enterprise cloud account? And if so, could you, if you haven't, could you raise your hand and like let me know?
Okay, this is good so far. Because if you haven't, you would really just, and I'll paste this just as a reference, but you would just come to this page in Domo Domo and fill out your email and click request invite. And then from here, you're going to get an email from Claude that looks like this, and you'll just say accept invitation.
And that'll take you to, you'll put in your Domo email after that, and then it'll just get you on our enterprise account. And you will need to be on the enterprise account in order to use Cloud Code. You can't just have a free account. You have to be like be on like a business account to use Cloud Code. But once you've done that, and it sounds like everyone on this call has done it.
Then the next thing to do is to download VS Code. And you don't have to necessarily do this because I know some of us will probably use terminal or use whatever, but in this case, my favorite tool is VS Code. And it's actually like an approved tool. So if you can actually download it self-service using the new
They changed Kanji. It's now this weird jellyfish guide, but if you come here, you can actually download Visual Studio just by typing in visual, and then you can download VS Code. So has everybody done that or everybody comfortable? Do they have a code editor that they're able to use?

Capital Cities   2:31
Fa.

Nick Ludwig   2:51
Yep.

Elliott Leonard   2:53
Sweet, sweet, okay.
We're doing, we're doing good so far.
Okay, the next thing is just some more kind of boilerplate stuff. The skills that we have actually use the Java CLI for some of the skills. And so if you haven't used the Domo Java CLI before, if you're an admin in a Domo instance, you can easily download it just by coming to the admin section and then coming to tool downloads.
And yeah, it'll be in the more. So you'll click tool downloads. And then this Domo CLI, you'll just click this button and it'll download it. It's this little coffee looking thing. And let me see if I can paste it in chat. But we're going to use that as well. Yeah, it looks like I can paste it.

Heather Dilts   3:37
Quick question on that, Elliott. Is the Domo CLI instance specific, or if we have access to that from one instance?

Elliott Leonard   3:49
Yes, great question, Heather. It's global. So in this case, it's, oh, dang, it doesn't look like it let me paste it. So anyway, if I feel like a lot of us in Modo should be able to go here, but yeah, you'll want to have this. And then as part of this,

Heather Dilts   3:51
OK.

Elliott Leonard   4:07
You'll also want to have Java on your machines. In this case, like it shows here, this tool requires Java 7 or later. And to download Java, you can do that for free by coming to this link.

Capital Cities   4:11
Yeah.
Yes.

Elliott Leonard   4:19
And this will let you download Java. So if you're on a Mac, I feel like most of us are on Macs, but you would download it here. And I think this screen will probably default to Windows if you're on a Windows, but you'll need to download Java. And then once you download it, I think it'll make you execute something. Yeah. So in this case, you'll download it.
And then you'll click on this little, it'll pop up this guy and you'll say update.
You open it.
And you'll install it.
And in this case, I actually might need to do the admin session thing. Yes, I think actually to do this, I actually have to do that admin by request. So I have to request administrator access.

Capital Cities   4:59
No.

Elliott Leonard   5:03
Download Java.

Capital Cities   5:03
Ohh.

Elliott Leonard   5:06
And then let's try that again.
Yes.

Shana Brennan   5:13
So I just realized I don't have CLI on this laptop and tried downloading it from my instance and I'm getting a Apple could not verify that demo.util.jar is free of malware and will not let me open it. Anyone else ever had that?

Elliott Leonard   5:19
Yeah.

Capital Cities   5:23
Coop.

Nick Ludwig   5:26
I got the same thing. Just happened to me.

Capital Cities   5:31
Detail.

Elliott Leonard   5:31
Gotcha. Um, so like when you download it, Shana, it gave you that message or when you when you clicked on it.

Miles Herleikson   5:34
I think I'm running like...

Capital Cities   5:34
Search for song.

Shana Brennan   5:37
When I clicked on it.

Elliott Leonard   5:39
Okay, can you try, are you in an admin session?

Shana Brennan   5:43
No, but I could be.

Elliott Leonard   5:45
Okay, can you try going into an admin session and seeing if that works?

Capital Cities   5:46
You.

Shana Brennan   5:49
Yeah.

Elliott Leonard   5:49
Yeah.
I.

Abby Stowell   6:02
I'm in an admin and got the same error.

Shana Brennan   6:02
Nope.
Yeah, Sameer.

Abby Stowell   6:06
And I couldn't even install Java 8 from the screen that you're on.

Elliott Leonard   6:11
Okay, interesting.
Sh.
Mm.
Let's see. So when it's in your downloads, try, can you say try open with and then say disk image counter and see if it lets you?

Capital Cities   6:27
Desk image mounter - that's a fun thing that I don't have.

Elliott Leonard   6:32
No, you.

Shana Brennan   6:33
Yeah, I don't have that option.

Elliott Leonard   6:35
Okay, it doesn't say open with.

Shana Brennan   6:37
I have open with, but...

Elliott Leonard   6:40
And then...

Shana Brennan   6:41
Java Launcher?

Capital Cities   6:42
Java Lance.

Elliott Leonard   6:44
Yeah, try that.

Capital Cities   6:45
Doesn't work.

Shana Brennan   6:46
Nope, same error. Can't verify.

Elliott Leonard   6:51
Damn, OK.
Good to do.

Capital Cities   6:54
Double click that or right click that.
job volunteer.

Anthony Williams   7:02
I think we need to go into the security settings. I was able to get through that way.

Capital Cities   7:07
Your job.

Elliott Leonard   7:09
How'd you do that, Anthony?

Anthony Williams   7:11
If you go to your system settings.

Capital Cities   7:11
Just.
No.

Elliott Leonard   7:15
Like, yeah, this guy.

Capital Cities   7:15
That's.

Anthony Williams   7:16
Yep, and then just type in security.
And we go to Privacy and Security, it should be the top one.
And then you'll scroll to the bottom of that, and it will give you a prompt about that.
You can say open anyway. In this case, you won't see it because yours is probably already completed.

Shana Brennan   7:32
Ah.

Capital Cities   7:34
Yes.

Nick Ludwig   7:39
Here, I can share my screen and show you guys what it looks like.

Elliott Leonard   7:42
Yeah.

Nick Ludwig   7:44
And I think I'm trying to do a couple things, so disregard the mess.

Capital Cities   7:49
The.
Seth.

Nick Ludwig   7:53
Not sure on the right screen, is it?

Anthony Williams   7:56
That's the big screen, yeah.

Nick Ludwig   7:58
Okay, one second.

Capital Cities   7:59
You do that.
Okay.
Yeah.

Nick Ludwig   8:04
K, it has.
And it disappeared.

Capital Cities   8:12
Okay.

Anthony Williams   8:12
If you go back to the file, wherever your downloads are, and try and open it, it'll push it.

Nick Ludwig   8:16
Yeah, do it again.

Capital Cities   8:25
But.

Anthony Williams   8:29
In this case, did you install Java yet, Nick?
Or did it give you an error when you tried to?

Nick Ludwig   8:33
Seth.

Capital Cities   8:34
Download.

Nick Ludwig   8:35
That's, yeah, it gives me this.

Anthony Williams   8:37
Okay, so you just need to put in your password.

Capital Cities   8:38
Yeah, so that this.

Anthony Williams   8:40
Then a reason.

Elliott Leonard   8:40
The.

Capital Cities   8:40
Yeah, and they give a reason. This is, this is kind of instead of opening, yeah, instead of opening admin by request, you have to put a reason in there too, and just say, like, installing apps or whatever, but this, this is kind of installing Java, yeah, and this, yeah.

Nick Ludwig   8:42
And it'll tell me it's wrong.
Haha.

Elliott Leonard   8:54
Shh.

Capital Cities   8:57
Just kind of speeds up the process a little bit.

Nick Ludwig   8:58
Yeah, then it takes you to this one.

Capital Cities   9:00
Ohh, yeah, yeah.

Anthony Williams   9:01
Yep, then you'll have to do it again.

Heather Dilts   9:04
Shana or Abby, see in the chat, I think I was able to install the jar in terminal.

Capital Cities   9:04
It's not working.
Hey, Nik, go ahead and hit OK on the terms before you enter that, and then I'll try again.

Nick Ludwig   9:17
Yeah, is what it does every time.

Capital Cities   9:18
Hit cancel here.
And then try, yeah, so put, Jesus, put, yeah, put this in again. Freaking admin by request. I mean, this is recorded. I love admin by request. And then hit OK.

Nick Ludwig   9:32
Hey!

Capital Cities   9:35
Well yeah, now we can try again and see if that happens.
Should, it should work from there, though.

Nick Ludwig   9:41
Seth.
Okay, sweet.

Anthony Williams   9:44
In the security portion, Nick was for the CLI specifically. At least that's what I had to do on my machine.

Capital Cities   9:49
Yeah.

Nick Ludwig   9:50
Let me do the CLI again and I can share.

Anthony Williams   9:52
The.

Capital Cities   9:53
Ohh.

Nick Ludwig   9:55
Download.

Elliott Leonard   9:55
Yeah.

Capital Cities   10:00
Okay.

Nick Ludwig   10:03
Actually, I'll just share now so everybody can see.

Capital Cities   10:10
Play song.

Nick Ludwig   10:10
Okay, this is what you get, this jar file, right? And then that's the problem that we have. Oh, system settings.

Anthony Williams   10:16
Right.

Capital Cities   10:19
Which I think I don't think you need to open it. Yeah, I guess as long as you have it in your project folder. Yeah, so as long as you can get the Domo util, yeah, just hit done. As long as you can have the Domo util, I think that's really all we need, because generally you open that from the CLI anyways. So as long as you get the util file on your computer, I think we're solid.

Elliott Leonard   10:23
Shh.

Nick Ludwig   10:25
So, just hit done.

Elliott Leonard   10:31
Yes.
Yes.

Nick Ludwig   10:38
Okay, sweet.

Elliott Leonard   10:38
Yep.
K.

Capital Cities   10:40
You'll be okay.

Elliott Leonard   10:42
Okay, anybody else having issues downloading Java?

Capital Cities   10:47
Yeah, we got one over here.

Abby Stowell   10:50
I am as well, but I can work on this offline.

Capital Cities   10:53
I'm not by myself.
Yeah.

Elliott Leonard   10:55
Okay, Abby, let's see, do you have VS Code, Abby? And did you try Heather's method about doing it via the terminal?

Abby Stowell   11:02
Oh, not yet.

Scott Bartholomew   11:05
Can you?

Abby Stowell   11:05
I do have VS, but I don't have it. I haven't tried the terminal yet, so I'll do that now. Thank you.

Elliott Leonard   11:15
And then Riley, are you on the call? And if so, do people have to have NPM installed to use the skills?

Capital Cities   11:18
Share the class.
Want to share the request?

Riley Stahura   11:23
Yeah, they, they'll need uh, they'll need that installed, yeah.

Elliott Leonard   11:27
Okay.

Capital Cities   11:27
Clark might also walk them through that when they go to try to use it, and the rules will tell them that inside as well.
Thank you for.

Elliott Leonard   11:38
Okay, so let's real quick, so I know some of us are still struggling with Java, but once you have VS Code, what I like to do is you create a folder. So in this case, I'm going to create a new folder, and I'll just call it Claude. And this will be the folder where I'm going to do most of my work. So in this case,

Capital Cities   11:59
I.

Elliott Leonard   12:01
In VS Code, they're called projects, but you can just think of them as folders. And so once I've created a folder, then I'm going to open up my VS Code. And so if it's not down here, you just look in your launchpad and you should find VS Code. So we'll open it up.
And then it'll first ask us to open up a folder. And so in this case, I'm going to go and open up the folder I just created, which is the clod folder.

Capital Cities   12:20
Yeah.
Okay.

Elliott Leonard   12:28
And then now, as part of this, I'm going to drag that coffee, the Domo util, I'm going to drag it and put it into my clod folder, like so.

Capital Cities   12:39
Opt.

Elliott Leonard   12:43
And then I'm going to install the Claude extension. And so the way you install extensions in VS Code is if you come over to this little icon on the left and click extensions, we're just going to search for Claude up here.

Capital Cities   12:44
So.

Elliott Leonard   12:58
And it should be this top one called Claude Code or VS Code. You'll just click install on here. And then once you do, you'll actually have this little icon, this little Claude icon pop up. So you'll install it. And then as Nick was showing us before, when you install it, you have to authenticate with our account.
And the way you do that is there's a button, it's in the middle, I can't remember what it's called, but it says console. I think that's the button that you'll want to click. You don't want to click the top one, because then you'll get the error where you need to have like a Max or Pro subscription. You want to click the one in the middle. It's like, it kind of looks grayed out, but.
That is, like I said, there's lots of ways to use Cloud, but my favorite way is using this VS Code extension for a couple reasons, just because the first reason is that it actually saves all the prompts that you do. And so in this case, I'm in a new session, but in my previous folder that I use, it has all my sessions saved.

Riley Stahura   13:45
Yeah.

Elliott Leonard   13:53
And that's super nice because you can like, you can go back to a previous session and just keep on working on it. So, you know, when a new day comes, you have it saved.

Capital Cities   13:56
Yes.

Nick Ludwig   13:58
Yeah.
Hey, Elliott, do you mind if I share? Because I assume people are probably where I am right now.

Elliott Leonard   14:01
Which is?
Yeah, yeah, for sure.

Nick Ludwig   14:07
And since we haven't set it up before. So this is where, do I need to accept any of this?

Elliott Leonard   14:15
Let me see. Nope, you don't have to. So in this case, Nick, you'll just go to that top left, that document, and you open it. And then did you, you put your Domo util in here just by dragging it from your explorer.

Nick Ludwig   14:28
Okay.
So let me open up my downloads.

Capital Cities   14:36
How do you do that towards? I don't know what happened.

Nick Ludwig   14:37
And just drop it here.

Elliott Leonard   14:39
Drop it on the left by that clod in the, yeah.

Capital Cities   14:43
See if it pops up.

Elliott Leonard   14:45
Awesome.

Nick Ludwig   14:45
Open an email.

Elliott Leonard   14:48
That's perfect. And then, yep, so in this case, you already have your...

Nick Ludwig   14:49
Kate.

Capital Cities   14:49
That's true.
Yeah.

Elliott Leonard   14:53
your Claude set up. And then the last thing I was going to say, so Nick, if you want to go to your extensions, there's a handy extension called Claude Notifier. And sorry, the extension logo, it's that little square one.

Scott Bartholomew   14:56
Oh.
Oh.

Elliott Leonard   15:06
Oh.
Yeah, search for cloud notifier.

Capital Cities   15:11
Excuse me.

Elliott Leonard   15:13
The.

Capital Cities   15:14
Oh.

Elliott Leonard   15:14
And it's that top guy. Yep, yep. So this one's super handy because this one, so Claude like, right, it runs by itself, but as soon as it's done, it doesn't natively like ping you saying that it finished. And so in this case, this guy, this extension, it'll have a little, you know, one of those little notifications pop up saying, hey, Claude finished, go back and take a look at what it did. So this one's super helpful.

Nick Ludwig   15:14
This one?

Capital Cities   15:16
Thank you.
Mm.

Elliott Leonard   15:35
You don't need to have it, but I like it just because when I'm multitasking. So, okay, sweet.

Nick Ludwig   15:41
OK, sweet.

Elliott Leonard   15:44
Anybody having issues?

Capital Cities   15:44
So.

Elliott Leonard   15:46
Authenticating with with the with the VS Code extension.

Capital Cities   15:57
Good.

Elliott Leonard   15:58
OK, cool.

Scott Bartholomew   15:59
Okay.

Elliott Leonard   16:01
All right, so let's see. Riley, could I pass it over to you to talk about installing the skills in this folder that we have?

Capital Cities   16:03
Yeah.
I.

Riley Stahura   16:09
Yeah, just a sec, because we need to...
We need to install a few things first.

Nick Ludwig   16:18
Do you want me to share and be the guinea pig so people can see it on one that's not done yet?

Elliott Leonard   16:18
Okay.

Riley Stahura   16:24
Yeah.

Nick Ludwig   16:25
Opt.

Riley Stahura   16:26
That'd be great.

Nick Ludwig   16:57
So I assume I need to click on this GitHub link.

Riley Stahura   17:02
Yes, I'm posting something in the chat right now. Sorry.

Nick Ludwig   17:04
Okay.

Riley Stahura   17:08
So let's just try downloading the repo 1st and we'll see if it works, but I'm thinking it might not. So click on that link that Tyler just posted to that GitHub repository.

Nick Ludwig   17:15
404.
Okay. Okay.

Capital Cities   17:19
Yeah.

Riley Stahura   17:21
And then would you want to share your screen? I don't know whose screen. Oh, this is your screen. I'm seeing I'm seeing VS code right now.

Nick Ludwig   17:25
Yeah, yeah.
Here, I'll share the full monitor so we can see side by side.
Ignore any pop-ups that we may see.
Yeah.

Capital Cities   17:44
Or don't be fun.

Nick Ludwig   17:46
Whatever, alright.

Riley Stahura   17:52
Okay, so do you see where it says...
installation and it says
It says this is where skills install and then below it says this is the easiest way to install it and then says or run it yourself and there's that line of code right there below it where it says NPX skills.

Nick Ludwig   18:10
This one.
Yep.

Riley Stahura   18:13
So if you just click that button, you can copy that. And then before we continue, over on VS Code on the left, click in the window.
and then click File, Open on the top.

Nick Ludwig   18:29
I don't see file open, sorry.

Riley Stahura   18:31
Very, very top left, next to your Apple icon.

Elliott Leonard   18:34
Up by your Mac stuff? Yeah, at the...

Riley Stahura   18:37
Above a toolbar, there you go, yep, and I click open.

Nick Ludwig   18:37
Opt.

Elliott Leonard   18:37
Yes, even further up, yep.

Riley Stahura   18:43
Click cancel and click open folder and not just open. Sorry.
open folder right below where you did click before. And then...
Where it says your name, Nick Ludwig, on the left under locations.
And then click.
Click into that window and then on your Mac, what you're going to do is you're going to type on your keyboard, you're going to click shift, command and period all at the same time.

Capital Cities   19:20
Mm-hmm.

Riley Stahura   19:22
So this is going to reveal, I want everyone to just pay attention right here, because these are hidden folders. So they won't show up unless you do what he just did. So it's going to be inside your users directory. And then you need to do command shift period to show them. There are two places.
where all agents put their skills. Claude puts them in that folder that says Claude right there with a period in front of it. There's also another one that's going to be like that, but it's going to say agents. So we'll just have you open Claude for now. So click on Claude and then click open.

Capital Cities   19:58
No.

Riley Stahura   20:00
on the bottom right through that open button.

Nick Ludwig   20:03
Gotcha.

Riley Stahura   20:06
K, so...
Now...
Open up the, you can open up the terminal inside of VS Code. So up on the top, very, very top of the window, you'll see it says terminal. It says if you go run terminal.
Click New Terminal.
Opt on the very top.
And now you're just going to paste that, what should already be on your clipboard. Just paste that in there and let's see if it installs it.

Nick Ludwig   20:41
And hit enter.

Riley Stahura   20:42
That's it. Yep.
Yeah, so we need to install NPX first, so...

Capital Cities   20:48
Yeah.

Riley Stahura   20:51
These are things that are like a one-time setup. You should do it once. Like I did this once when I got my new laptop three years ago, however long ago. So in that same terminal.

Capital Cities   21:00
Okay.

Riley Stahura   21:06
You can actually just open up the Teams chat and paste it in there.
in that same terminal. So there's three things we're going to do.
We need to install Homebrew. There's a few different ways you can go about this, but this is the recommended way.
There's something called Homebrew we install, and then we use Homebrew to install something called FNM, and then FNM will install something else.
And.

Nick Ludwig   21:37
Homebrew this one.

Riley Stahura   21:37
Yep.
Yep, so copy, so copy that whole chunk of text all the way up towards has been bash, yep.

Capital Cities   21:41
Yes.

Elliott Leonard   21:42
Sh.

Nick Ludwig   21:46
OK.
And then put that in the terminal.

Riley Stahura   21:51
Yep.

Elliott Leonard   21:53
Yeah, exactly.
Oh, so you're going to have to request an admin session to do this, I think.

Riley Stahura   21:59
Um...
Yeah.

Nick Ludwig   22:04
Oh my.

Riley Stahura   22:05
And we'll have you open a different terminal too, just to make this easier. So let me know. I don't know if you're doing the admin by request in a different monitor, but.

Nick Ludwig   22:14
Yeah, I'm looking for Iru now.
Gotta be kidding me.

Capital Cities   22:21
Oh.
Yeah.

Riley Stahura   22:23
You should just be able to do command, do command space bar and type in admin by request.

Elliott Leonard   22:44
Oops.

Capital Cities   22:46
Yeah.

Nick Ludwig   22:51
Payton.

Riley Stahura   22:52
All right, and then do just do command space bar again and open up a new terminal so we can make it.

Elliott Leonard   22:54
Means.
You.

Riley Stahura   23:00
Just type terminal, yeah.

Elliott Leonard   23:03
S.

Riley Stahura   23:04
That way, it'll be.
All right, now.
You should be able to put your password in.

Nick Ludwig   23:14
You guys going to see this?

Riley Stahura   23:16
Nope.

Elliott Leonard   23:17
Nope, it actually doesn't type anything.

Capital Cities   23:17
Yes.

Riley Stahura   23:23
Okay, press Enter.
And this might take like 60 seconds.

Elliott Leonard   23:34
So.

Capital Cities   23:36
Okay.

Elliott Leonard   23:38
Anybody else having difficulties right now? Is anybody else hung up on something?

Capital Cities   23:48
I still can't install Java on my end, but I think I'll just approach you later today.

Anthony Williams   23:48
I'm a little bit ahead.

Elliott Leonard   23:53
Yeah, you can just roll your chair over, Tyson.

Heather Dilts   23:57
Same. I think I'm still stuck. So I was able to do a lot of these steps and was able to do something. What is, what do we need the Java for? So I think I'm having, and I started off like just installing all of these things that everybody said. I'm having a little bit of a hard time.
Understanding, like, what does what?

Capital Cities   24:19
Yeah.

Riley Stahura   24:20
Yeah, so we what we're doing is we're ultimately just installing skills and giving them to Claude and all skills are our text files telling Claude how to do things. Some of the skills tell Claude how to use Domo APIs to do stuff like create cards, query data sets.

Elliott Leonard   24:21
OK.
S.

Riley Stahura   24:41
And so the Java CLI is being used for some commands. I think it's being used to query data sets and data flows maybe and create cards. So there's a few ways you can do that. You can use the Java CLI, you can do raw API calls, you could do.

Capital Cities   24:49
I.
Yes.

Riley Stahura   25:04
You could use an MCP server. And so one of the things we were trying to do with our skills is to consolidate everything so that there's one single CLI where any API call happens, specifically so that this confusion doesn't happen. Because ideally there's just one CLI or one MCP.

Capital Cities   25:16
Yeah.
No.

Heather Dilts   25:20
Okay.

Riley Stahura   25:23
the skills used.
Because right now, as we're seeing, it's kind of annoying having to set up Java. Then there's another CLI. Technically, we'll have to show you how to set up. So we are actively trying to move everything over. So there's just one thing you set up.

Heather Dilts   25:40
Okay.

Elliott Leonard   25:40
Yeah, and...

Riley Stahura   25:40
Does that answer your question?

Elliott Leonard   25:42
And then also Heather, Heather, I was going to say also, so it really boils down to, so the Java CLI has been around for like years now, and it's just an easy way to automate stuff within your Domo instance. And agents are really good at using CLI tools, and it's kind of debatable whether MCPs or CLIs are better, but.

Heather Dilts   25:42
Or to say it another, okay.

Capital Cities   25:47
Yeah.

Elliott Leonard   26:02
In this case, like a lot of our skills leverage two different Domo CLIs. And if you want to like fully maximize what your agent can do within Domo, you'll want to have the CLIs usable because your agent can use them like very quickly and easily.

Capital Cities   26:07
Who?
Yeah.

Heather Dilts   26:17
Got it. Thank you.

Nick Ludwig   26:19
Yeah, I'm with you. I feel like I just went to Best Buy and they just stole all my banking information.

Elliott Leonard   26:22
Sorry, Ashish.

Heather Dilts   26:25
Well, I feel I just keep downloading all, like I keep collecting all of these different things. But now I think I understand the skills need all of these different tools to be able to actually execute.

Capital Cities   26:25
Again.

Elliott Leonard   26:28
Fa.

Capital Cities   26:28
Yeah.

Nick Ludwig   26:31
Yeah.

Elliott Leonard   26:32
She.

Riley Stahura   26:36
Yep.
Exactly.
Okay, I think it finished.
So it wants you to do one more thing, Nick. It told you there at the end, it says to run these commands in your terminal. So you could copy. There's 3 lines. It says echo, echo, eval, those 3 lines. Copy those 3 lines.

Nick Ludwig   27:00
Okay.

Riley Stahura   27:01
And then put that in the next line.

Elliott Leonard   27:02
S.

Riley Stahura   27:08
And then type brew space help and let's see if it works.

Capital Cities   27:15
Yeah.

Riley Stahura   27:18
All right, we're good to go. So now you should be able to copy that next line from the chat that just says Brew install FNM or you can just type it if it's faster.

Capital Cities   27:19
Yeah.
Heath.
Thank you.

Riley Stahura   27:48
Okay, and then the next two lines.
F&M ENV and then the F&M install lines.
Go and paste those in. That should be the last step.

Capital Cities   27:57
Thank you.
Play the song.
I'm not.

Riley Stahura   28:07
So this is installing Node and NPM, which is used for a lot of stuff.
when you're developing apps and stuff.

Capital Cities   28:19
Yeah.

Riley Stahura   28:19
Okay, so now we should be ready if you type node, node space dash V.

Capital Cities   28:20
Yeah.
Hut.

Nick Ludwig   28:28
Yeah.

Riley Stahura   28:29
Yeah.
Sometimes when you install, you have to close the terminal and open it back up.

Capital Cities   28:33
Yeah.
Play the song.

Elliott Leonard   28:38
Just.
Yeah.

Capital Cities   28:42
Yeah.

Elliott Leonard   28:44
The.

Capital Cities   28:48
File.

Riley Stahura   28:49
Just try that one again, yeah.

Capital Cities   28:50
Yeah.

Riley Stahura   28:55
All right, that should have installed it. Let me see.

Capital Cities   28:57
Yeah.

Nick Ludwig   28:58
Says command not found node still.

Capital Cities   29:00
But...

Riley Stahura   29:02
Um...

Capital Cities   29:03
Yeah.
Uh-huh.

Nick Ludwig   29:06
Should I not have that space?

Capital Cities   29:10
Yeah.

Riley Stahura   29:10
No, there should be a space there. Let me just check something.

Capital Cities   29:15
And.
Okay.
Yeah.
Thank you.
Hindi.
Oh.
Ohh.
That same.

Elliott Leonard   29:33
Hey, Nick, can you try doing that same command, but in the integrated terminal in VS Code? So just copy that node dash V and put it in the integrated terminal, which is the one that's in VS Code at the bottom. Yeah, yep.

Nick Ludwig   29:44
Right here.

Capital Cities   29:47
Inbox.

Elliott Leonard   29:48
Okay, nope.

Capital Cities   29:51
Mm.
Thank you.
Okay.
Yeah.

Elliott Leonard   30:00
S.

Capital Cities   30:12
Yeah.

Riley Stahura   30:12
I think I might know what you gotta do, Nick. Are you doing something else?

Nick Ludwig   30:16
Nope, I'm here.

Riley Stahura   30:17
Okay.
Um...
And I can explain after what's actually happening here.

Capital Cities   30:28
Thank you.

Riley Stahura   30:29
So what I just put in the chat, paste that into your terminal.

Capital Cities   30:33
Yeah.
The.
Yeah.
No.

Riley Stahura   30:48
O, that first line.

Capital Cities   30:50
Yeah.

Riley Stahura   30:51
Should help it recognize the command.

Capital Cities   30:54
Okay.
Yes.

Nick Ludwig   30:58
So, should I do the second line now?

Capital Cities   30:59
Yeah.

Riley Stahura   31:02
Yeah, do the second line now.

Capital Cities   31:04
Yes.
Play.

Riley Stahura   31:06
And now do the third one.

Capital Cities   31:09
I.
Okay.

Riley Stahura   31:14
Um, just say yes, type, type Y and enter it.

Capital Cities   31:21
The.

Riley Stahura   31:21
All right, probably need to do some one-on-one troubleshooting if I'm being honest because...

Nick Ludwig   31:29
Kate.

Anthony Williams   31:29
I'm getting the same errors as Nick.

Capital Cities   31:31
Yeah.

Riley Stahura   31:33
Um...

Nick Ludwig   31:40
Want me to try it in the other terminal?

Riley Stahura   31:42
Yeah, I mean it should be the same, honestly, but...
Just type node version again. I think we want you to close the terminal and open it back up again.

Nick Ludwig   31:52
This one or the other one?

Riley Stahura   31:54
This one inside instead of VS Code when you install.

Nick Ludwig   31:58
Yeah.

Riley Stahura   32:03
New packages and stuff, it doesn't recognize the commands till you start a new session, usually.

Capital Cities   32:03
Yes.
Thank you.

Nick Ludwig   32:12
There we go.

Riley Stahura   32:13
All right, node is working. So now you should be able to do the install from the GitHub repo on the right. So if you just copy that again and then paste that over.

Capital Cities   32:23
Okay.

Nick Ludwig   32:25
Which one?

Riley Stahura   32:25
That one, that one that you're hovering over the NPX skills ad.

Capital Cities   32:27
Just.

Nick Ludwig   32:29
And then just put it here.

Riley Stahura   32:30
Yeah.

Capital Cities   32:31
It's my pain.

Nick Ludwig   32:32
Yeah.

Capital Cities   32:34
The.

Riley Stahura   32:35
And then press Y.

Capital Cities   32:38
Thank you.

Riley Stahura   32:40
So this just went through, you can drag that terminal up if you want. You can drag that bottom half up.

Capital Cities   32:46
Yes.

Riley Stahura   32:47
And you can see it, it's going through.

Capital Cities   32:49
S.

Riley Stahura   32:51
and it's installing it in the right place for all of these different agents. Scroll up a little bit just so you can see everything that it did.

Capital Cities   33:00
The.

Riley Stahura   33:02
So it says it found 38 skills and then installed them all to 45 different agents.
And then do you notice in VS Code on the left, there's a new skills folder. You can expand that.

Capital Cities   33:08
And.
Play.

Nick Ludwig   33:17
Opt.

Capital Cities   33:18
Very nice.

Riley Stahura   33:20
It says, yeah, right there. So everything's everything's there now. So if you used Claude or Cursor right now, it would it would recognize those.

Capital Cities   33:20
Yes.
Do.

Nick Ludwig   33:30
Sweet.

Riley Stahura   33:32
So right now what the process looks like, you should probably check, and we'll try to be, we'll try to communicate all the changes we're making, but you should regularly replace these skills with the most recent versions. Right now, the best way to do it is you literally just delete all those files.

Capital Cities   33:41
Play.

Elliott Leonard   33:45
Yeah.

Capital Cities   33:49
Zero.
A

Riley Stahura   33:54
You just click on the top, shift click on the very bottom and just delete them. Let's do it right now. So click on the very top one.

Elliott Leonard   33:57
Shh.

Riley Stahura   34:01
Or, or the whole thing, I guess that works.

Nick Ludwig   34:03
Then, Control Delete.

Riley Stahura   34:05
Yeah, I just right click and click delete.

Capital Cities   34:09
No.

Riley Stahura   34:11
Okay.
And then in the terminal.
You can click the arrow button on your on your keyboard, click the up arrow.

Capital Cities   34:20
I.

Riley Stahura   34:21
Just so you know, the up arrow and the down arrow can toggle between all your most recent commands. So just click enter again.

Nick Ludwig   34:28
Reinstall, can we not just have it check for new tools or new skills?

Capital Cities   34:28
Yeah.

Riley Stahura   34:34
Um, there's, we would probably need to just make something for you guys to do that, which...
We've been thinking about, we just got to find the best, least annoying way for you guys. So I haven't figured that out yet.

Capital Cities   34:41
No.
What, what's the difference between this method and like a git clone, like just for me not understanding it?

Nick Ludwig   34:48
Just.

Riley Stahura   34:55
Um...
So, you could do a get clone.
And you would probably just do it from the problem is you might want to install skills from different.

Capital Cities   35:10
You.

Riley Stahura   35:11
repositories and so if you made your skills folder

Capital Cities   35:13
Yeah.
Yeah.
Thank you.

Riley Stahura   35:19
A repo that's just a clone of this.

Capital Cities   35:22
Yes.

Riley Stahura   35:24
then it couldn't be the, it couldn't clone other repositories if that makes sense. So you could do git clone and drag stuff over, but I just, I think this is more convenient. There's another piece of this that I did want to explain though.

Capital Cities   35:29
Okay.
Thanks.
That's true.

Riley Stahura   35:40
Nick, if you want to go over to Chrome and visit a website called skills.sh.

Capital Cities   35:43
Yeah.
Yes.
You.

Riley Stahura   35:49
So if anyone's heard of Vercel, Vercel's a really awesome company. They're the ones that created the skills package. It's installing this from the repo. One side effect of the approach we're taking here is it has some baked in security auditing. So in that search, if you want to type Stahura,

Capital Cities   35:53
No.
S.
Yeah.

Riley Stahura   36:08
just type my last name in there, you'll see a few results.

Nick Ludwig   36:11
I spell it right?

Riley Stahura   36:12
You, yeah, you did.

Nick Ludwig   36:14
Beautiful.

Capital Cities   36:14
Yeah.

Riley Stahura   36:15
Just click on any one of those, honestly. I'm not sure which was the best example, but just click on any one of them. So do you see it has like a security audit on the right? So some of them will have like a fail or like a warning, and it will explain why. And

Capital Cities   36:15
Yeah.
Okay.
Matt.
So.

Riley Stahura   36:36
That's really useful for you like that one, so you can click on that.

Capital Cities   36:41
Yeah.

Nick Ludwig   36:42
I.

Riley Stahura   36:43
And it says...

Capital Cities   36:44
Open.
Yeah.

Nick Ludwig   36:48
Third-party content exposure detected in direct prompt injection risk.

Riley Stahura   36:53
Yeah, so that's like really good.

Capital Cities   36:54
School.

Riley Stahura   36:57
to know for customers and IT especially that want to be like, okay, but what are these skills? What do they do in long term when customers are using these?
That just makes it, I think, a little bit easier to...

Capital Cities   37:13
On.

Riley Stahura   37:13
to allow customers to actually use these skills to build cool things in Domo. So like one of them has a risk and it's like, warning, this is using some random CLI tool that no one's ever heard of instead of the official Domo CLI one. And obviously like I know what it is because I made it. I know so I can trust it, but it is important that.
in the future.
it can detect if there actually is something wrong with one of our skills.

Capital Cities   37:41
Yeah.

Riley Stahura   37:42
So some of those are old ones. I actually want to figure out how to get rid of those because that was like V1 of the skill. And then we replaced a lot of those, the ones that start with cap and PB and WF.

Capital Cities   37:53
No.

Riley Stahura   37:57
So did you already install Claude?

Nick Ludwig   37:59
Yep.

Elliott Leonard   38:00
It.

Riley Stahura   38:01
Okay, let's open up Claude then in your VS Code terminal and you can make VS Code full screen if you just want to share just VS Code so it's easier to see.

Nick Ludwig   38:10
Yeah, yeah, yeah.

Capital Cities   38:10
Stop.
Yeah.
I can do it.

Nick Ludwig   38:21
Is that better?

Riley Stahura   38:23
Yep, so with with your VS Code, let's have you open your up into a different folder so you're not inside the clod folder anymore.

Elliott Leonard   38:23
That's great.

Capital Cities   38:32
Okay.

Riley Stahura   38:33
You can just open up to.

Elliott Leonard   38:34
Yeah, let's open up that previous one, Nick, that we created. And I think you do that, let's see.

Capital Cities   38:41
Bing.

Elliott Leonard   38:41
Is it file open folder or?

Capital Cities   38:44
Yeah.
Can you?

Elliott Leonard   38:51
The way, I mean, the way I do it, yeah, yeah, let's go to...

Capital Cities   38:51
Yeah.
What?

Elliott Leonard   38:55
The one that you created previously.

Capital Cities   38:58
Yeah.

Elliott Leonard   39:01
Yeah, perfect.

Capital Cities   39:03
Yeah.
Okay.

Nick Ludwig   39:08
Do this.

Capital Cities   39:09
Sing.

Elliott Leonard   39:10
No, okay, so now what we'll do is we'll go to the Claude icon on the left and we'll say new session.

Capital Cities   39:16
I.

Elliott Leonard   39:21
And so this is, I mean, this is basically how you'll interact with Claude. Like I said, there's lots of ways to do it, but in this case, this is, it's kind of like a chat GPT interface where it's like very helpful. And so in this case, just to verify that everything, hold on, not quite yet, Nick. In order to, in order to verify.

Capital Cities   39:27
Yes.
The.

Nick Ludwig   39:38
No.

Riley Stahura   39:39
Yeah.

Capital Cities   39:40
Calm down.

Elliott Leonard   39:41
that the skill that we have access to the skills. Ask it a question, just say, what skills do you have access to?

Capital Cities   39:42
Okay.
Play movie.
Yeah.

Elliott Leonard   39:57
And so now it'll go through and it'll talk about the skills. And so in this case, it talks about some general skills, but then also we have platform specific skills, which is super, super handy. So, you know, we just have tons of different ones. And so this is looking good, right? If you ask this question and it doesn't come up with something like this, let us know because this is.

Capital Cities   40:00
Yeah.
Bing.

Elliott Leonard   40:18
This is basically letting you know what skills your cloud natively has access to.

Capital Cities   40:28
Yes.

Elliott Leonard   40:29
And then, let's see, Nik, is it okay if I steal the screen real quick just to show something?

Nick Ludwig   40:31
Yeah.

Capital Cities   40:33
Okay.

Nick Ludwig   40:35
Sure.

Capital Cities   40:35
Yes.

Elliott Leonard   40:36
OK.

Nick Ludwig   40:36
Heath.

Capital Cities   40:37
Mm.
Yeah.

Elliott Leonard   40:39
Okay, so...
Like I was saying before, this is me in my current Claude. Like this is where I'm in this folder that I have that all my projects that I'm working on, it's in this one singular folder. And in this case, all my previous sessions have been saved, which is super nice. But if you want to create a new session, you just always create that new session. And then

Capital Cities   40:42
Yeah.

Nick Ludwig   40:45
Mhm.

Elliott Leonard   41:01
From here, in order to start interacting with a Domo instance, what we're going to do is we're first going to get an access token from the Domo instance. And so if you've never done that before, the way that you do that is you'll want to be, I don't know if you need to be an admin, but in this case, in ModoCorp, I'm going to come here and come to admin.

Capital Cities   41:19
Yes.

Elliott Leonard   41:20
And then under authentication, I'm going to say access tokens.

Capital Cities   41:21
You.

Elliott Leonard   41:25
and I'm going to create a new access token and assign it to myself. So in this case, what we're doing here is we're basically saying everything that Claude's going to do, it's going to do on my behalf. So it's going to inherit my security. And then it'll also say that I created it, right? So basically, that's to say, like, you're responsible for the stuff that Claude creates in a Domo instance. It's going to say it's going to be created by you.

Capital Cities   41:25
Thank you.
Yeah.

Elliott Leonard   41:47
So just keep that in mind. But in this case, I'll just say that this access token is for Claude. And then I'll click generate and it'll give me a ID here. And so I'll just copy that ID and come back to my Claude instance. And this is where we can actually start playing around and have Claude like look at stuff.

Capital Cities   41:47
Mm.
Yeah.
Yes.
Yeah.
Play.

Elliott Leonard   42:09
in a Domo instance. So any questions about access tokens? Is everybody able to do that? Did you find it in a Domo instance?

Capital Cities   42:19
Yeah.
Yes.

Elliott Leonard   42:21
Okay, I'm going to take a silence as a good thing. So in this case, right, we can start to ask our first question. And I'm...

Nick Ludwig   42:27
So wait, what do you do after you generate it? I miss that part. So copy it and then...

Capital Cities   42:30
Yeah.

Elliott Leonard   42:31
Copy it, and then, and then I'm gonna go through it right now.

Capital Cities   42:31
Ohh.
Yes.

Nick Ludwig   42:34
Okay, cool.

Elliott Leonard   42:35
Yep, so we'll copy it and then now we're going to do a prompt. So in this case, you have a session up and say, we'll just say like, can you see data sets in motocorp.domo.com question mark? Here's my access token. And then we'll paste it.

Capital Cities   42:35
You.
Yeah.
M.
Yeah.

Elliott Leonard   42:56
S.

Capital Cities   42:56
Play the song.
Hey, Cortana.
Thank you.

Dan Gouveia   43:08
Is there a way to globally handle those? Or do you always have to hit yes? I've been trying to figure that out.

Elliott Leonard   43:14
Oh, yeah.
Yeah, so with this allowing.

Dan Gouveia   43:18
Yeah.

Capital Cities   43:18
Thank you.

Nick Ludwig   43:18
You.

Elliott Leonard   43:19
Yeah, great question. So in this case, what you can do is there's a couple different modes on here, so if it'll let me, you can say auto mode is going to be the mode that will let you, it's the one that I usually use, but there's also a bypass permissions mode. And if you want to do that,

Dan Gouveia   43:33
Specht.
Okay.

Elliott Leonard   43:39
You can actually do that by if I came here into my clod settings. I'm just going to come in here.
Like not Klaus, Claude. And if I come in here into, let's see, I think I click in here and come to settings.
Yeah, there's this first checkbox, Dan, where you say allow bypass permission mode, and you'll click that, and then you'll see there'll be a new mode that you can use in your quad session.

Dan Gouveia   44:00
Perfect.
Okay.

Capital Cities   44:07
Hey, Elliott, how did you get auto mode? I don't have that as an option.
Yes.

Elliott Leonard   44:12
Like, over here.

Capital Cities   44:13
Yeah, when I click on that, it just gives me, ask before edits, edit automatically in plan mode.

Elliott Leonard   44:20
Ah.
Um, that's a good question. So let's see. So Chris, if you click on this slash icon, does it say which model you're running on?

Capital Cities   44:25
Yeah.

Brendan Carr   44:31
Chris, if you go to the settings, Elliott just showed in Cloud Code that first step and hit the check box, then they pop up after.

Capital Cities   44:41
Okay.

Elliott Leonard   44:42
Oh, yeah. So Chris, if you didn't see that, so if you come back to your extensions and then click on the little gear icon and click settings.

Capital Cities   44:44
Whoops.

Elliott Leonard   44:53
There is, you'll just click the first check box saying allow bypass permissions mode.

Capital Cities   44:58
I got it.

Dan Gouveia   44:58
Awesome.

Capital Cities   45:01
Thank you.

Elliott Leonard   45:02
Perfect.
Okay, so now if we come back to the window, we can see that, yes, I can see data sets. And in this case, it found out that we have 13,000 data sets in Modocorp. And it gave me some example data sets just to show that it's authenticated. And so in this case, right, it leveraged a couple different skills.
And I think it'll tell you.

Capital Cities   45:25
I.

Elliott Leonard   45:27
I thought it tell it, it'll tell you what skills it'll it references in this case.
I'm not sure which skill I reference, but basically at this point, this is just to show that you are connected to your Domo instance, and then you can start to do automation, right? So in this case, I can say like, can you create me some example cards using a data set?

Capital Cities   45:45
Ohh.
S.

Elliott Leonard   45:51
In Motocorp.

Capital Cities   45:52
I.

Nick Ludwig   45:55
Yeah.

Riley Stahura   45:56
Um, I stepped away for a sec, just checking if anyone needed me while I was absent.

Capital Cities   46:02
Yeah.

Riley Stahura   46:04
No? All right.

Capital Cities   46:05
Thank you.

Elliott Leonard   46:06
I mean, we always need you, Riley, but no, I don't think so.

Riley Stahura   46:09
I wanted to comment on something real quick, since you had everyone make an access token. With all the changes we're trying to make with the CLI's tool, too, why did I say it like that? That's so weird. We don't, we like, we want to avoid access tokens for obvious reasons, because it's like if...

Nick Ludwig   46:27
Yeah.

Riley Stahura   46:27
you know, you have full admin privileges. There is in the future that a CLI tool that you're going to use that only uses your role and your permissions. So just want to throw that out there. At some point, we want to get away from that.

Capital Cities   46:40
So.

Elliott Leonard   46:42
Yeah.

Riley Stahura   46:42
especially if we're doing stuff with customer instances.

Elliott Leonard   46:47
Oh, for sure, for sure. Thanks, Riley. Okay, here we go. So this is the show. So in this case, I asked her to create some sample cards. And in this case, it says it's using the Domo card crud skill. And so it took a look at the skill. And like Riley said, these skills, they're basically just text files explaining to the agent how to create.
a card. And so then if I come down here, we can see that it selected a data set. So in this case, I think it selected like a Salesforce. Yeah. So it took a Salesforce opportunities data set and I didn't even ask it to, it just chose that. And then now it's going to try and create a couple cards. And so in this case, it just decided to create 5 cards.

Capital Cities   47:08
Yeah.

Elliott Leonard   47:26
And you can be more explicit. The nice thing is that as it's working on it, you can actually say, no, like create 10 cards and it'll take that into account. And then it'll update its to-dos and create even more to-dos. So that's the way I use Claude is anytime I'm working, if I have a new idea, I'll just keep on adding to the prompt and just keep on getting it to.

Capital Cities   47:39
Yeah.

Elliott Leonard   47:45
create things. So like, you know, you'll have an initial idea and then you'll just add on to that idea and you just keep on queuing more messages and it'll take it into account. And so in this case, we'll just wait a second, but it'll be creating a couple different cards. And then I can also, I can also say like, look, you know, provide me links once.
You're done.

Riley Stahura   48:12
Something that I will point out that a lot of people have learned on their own as they've started to use Claude a lot more is you'll be a lot more successful with whatever you're trying to do with Claude the more effort you put into the planning phase. So pretty much all of us have reached a point where

Capital Cities   48:16
S.
S.
Star.

Riley Stahura   48:31
We don't have to fix and troubleshoot a whole lot of stuff that the AI does because we might spend 10, 15, 20 minutes literally just planning out the initial prompt and maybe some follow-up questions that Claude has for us. And then it just works and we almost never have to fix things.

Capital Cities   48:42
Yes.

Riley Stahura   48:50
I think you'll realize that as you test different things, but I'd say that's literally the best suggestion I could give.

Elliott Leonard   49:00
Yeah, thanks, Riley. And the way you do that with the VS Code extension is these different modes. In this case, there's a plan mode. And that's where Riley said, like initially, if you have a plan for an app idea, you would switch this mode to plan mode and then put in your app idea. And then from there, it'll ask you questions. It'll create this little markdown file as like a plan of what it wants to build.
And then finally, it'll say like, hey, are you okay for me to execute it? And you'll just click execute. And then from there, you know, you can switch it back to auto mode or bypass permissions and just let it build. But in this case, right, so like I said, in order to summarize this well, I actually asked it to create an App Studio and just add all those cards to an App Studio. And so in this case, it's reading the App Studio skill.

Capital Cities   49:42
Sam.

Elliott Leonard   49:44
And now it has all these card IDs. So in this case, it's creating like some pipeline cards and we'll see what these look like. But then it'll give me a link to the App Studio to take a look at. And in this case, right, like you guys have been watching, like I haven't done anything in MotoCorp. I've just been prompting it at this point.

Capital Cities   49:47
Yes.
Play.

Elliott Leonard   50:01
And if we click on this link, we can take a look and see what it looks like.

Dan Gouveia   50:07
Do you guys have a best practice or something that works for you anyway, as people are figuring this out? So I was trying to say, look, I'm going to have a prompt per project, but it seems to munge some of the things together and it doesn't let me name it a certain way. So when I have a few of them, I forget which one's which because it has like the last.

Capital Cities   50:19
Yeah.

Dan Gouveia   50:26
sentence or two to describe it. And so I was just curious if you guys figured out a slick way to say, look, I want this prompt to be with this project, or is this planning mode something that we could use potentially?

Elliott Leonard   50:41
Yeah, it's a good question, Dan. So I can speak about me. So what I do is I like the VS Code extension for the reason where I can search previous chats. So anytime I'm coming up with a new idea, I'm going to do a new session. And then if I want to build on a previous one, I'll actually search. So like, for example, like I was working on like a patient engagement CRM, and so I thought I searched for patient.

Dan Gouveia   50:53
Yep.
Okay.

Elliott Leonard   51:00
then I can come back to this prompt. And in this case, it's saved a lot of the context. And so I can actually just keep on asking questions. And I'll just resume a previous session. And so that's the way I do it is, and I think you can actually name these two, right? So if you wanted to give us like a very specific name, like a customer, you know.

Dan Gouveia   51:04
Okay.
Yep.

Capital Cities   51:18
Yeah.

Elliott Leonard   51:20
You could rename this and then it'll save it. Oh, maybe it doesn't save it.
So, I thought it did.
Maybe not.

Dan Gouveia   51:29
Yeah, that's what I was trying to do. I'm like, damn it. It just went back and I'm like, well, so much for that brilliant idea.

Elliott Leonard   51:32
Yeah. Interesting.
I don't know if anyone else has any other ideas, but that's a good question and I think I don't have a good answer there. Okay, so let me, so in this case right now, give us a link to the App Studio. And so if I click here, we can take a look at the App Studio it created.

Capital Cities   51:49
Do.

Elliott Leonard   51:53
And awesome, right? So in this case, all 10 cards that it created, it looks like it created some summary ones, a donut chart, a pie chart, a couple different bar charts. So in this case, it just chose, right? It chose to create these cards. We didn't have to prompt it, but you can be more explicit in your prompts. You can say, hey, like I want a multi-value card.

Capital Cities   51:56
Ohh.
The.

Elliott Leonard   52:13
or I want a line chart graph by month and it can be, you know, it can create that kind of stuff, but this is just to show like very simple prompts can get you good looking cards and app studios as well.

Capital Cities   52:27
I've got a question.

Elliott Leonard   52:29
Yeah, yeah, Scott.

Capital Cities   52:30
Do the orchestrator skills, like, do those take place in the cloud MD file? Because, like, I know that, like, when you'd helped me set it up like a week ago, we built the cloud MD file, but we didn't do that this time, like...

Elliott Leonard   52:43
Yes.
Yeah, um, yeah, good question. Let's see.
Does anyone, let's see, Riley, do you know, so the whole cloud MD file.

Riley Stahura   52:54
Yep.

Elliott Leonard   52:56
You know what the purpose of that is? Can you talk to us about that?

Riley Stahura   52:59
Yeah, and I'm glad you brought that up because there's something else that I wanted to point out from the repository. Could you go back to the repository, Elliott?

Elliott Leonard   53:07
Yep.

Riley Stahura   53:08
So there are two rules you need to manually install, guys, and that's in the rules folder. So that NPX install does not install the rules. We need to update these, but the idea with rules is they are present at all times, and then skills are only invoked when you tell them to, or when Claude kind of...
figures out that they need to be used. So Cloud MD, it's, so all of this stuff is fun because no one really knows what the best thing to do is and it's literally changing like every other week. So Cloud MD, honestly.

Capital Cities   53:42
But.

Elliott Leonard   53:42
I.

Riley Stahura   53:44
Some people are saying not.
not to use Claude MD at all because they say it impacts the performance of the agent and they provide studies showing that it is the case. So I don't actually use Claude MD at all based on what I've been reading. I'm not saying you have to do that, but I would just say the idea with Claude MD and other rules is they are instructions that will exist in every single prompt you ever do.
And so you just need to understand how that will affect your agent. So part of the reason we did the approach we did with skills is ambiguity is what ruins your output. So for example, if you want to make an app that only queries a data set.
But then it's given a rule that has all the context of everything an app could ever do, where it says, here's how you query a data set. Also, here's how you query an app DB collection. Here's how you create one, et cetera. But then you say after the fact, hey, go create me an app that just queries this data set. You might get an output that does something with app DB, like maybe it has like a form entry.
And you're like, why did it do that? I didn't want it to do that. And that's because your rule had information about it and it was making an assumption that you wanted that. So that's, I don't know if that answers your question, but that's all I'd say is whatever is in Claude MD should only be information that you wanted to have that won't, that's always applicable to every prompt, if that makes sense.

Elliott Leonard   55:07
The.
Nice. Thanks, Riley. Okay, so...

Riley Stahura   55:20
Does that help, Scott?

Nick Ludwig   55:20
So should we put those, do we need to add those rules now? Because we didn't do it, right?

Riley Stahura   55:22
Sorry.

Capital Cities   55:25
In.

Riley Stahura   55:25
Yeah, yeah, you should add those.
And I actually forgot where those were supposed to live. Let me check where they live.

Capital Cities   55:35
Oh.

Elliott Leonard   55:35
While Riley is doing that, did anybody get this to work as well, where they were able to create some cards and App Studio?

Capital Cities   55:42
I asked it to create one card and then they gave me the link and I went to it and then told me I didn't have access, so it might have been me saying.

Elliott Leonard   55:51
Could have deleted it too, maybe.

Nick Ludwig   55:54
It worked perfectly for me.

Elliott Leonard   55:54
Anyone else?
Really?

Capital Cities   55:57
Okay.

Nick Ludwig   55:58
Yeah.

Elliott Leonard   56:00
Nice, nice. What uh, what data set and cards did it choose? Do you wanna show us what built?

Capital Cities   56:02
I.

Nick Ludwig   56:05
Yeah, I didn't do an app, I just did cards, but sure.

Elliott Leonard   56:08
Yeah.
Sweet.

Nick Ludwig   56:13
I said, build me some interesting cards for VP of sales ops.

Elliott Leonard   56:19
Nice. That's awesome. Let's go.

Riley Stahura   56:19
Let's go.

Capital Cities   56:19
Not ambiguous.

Nick Ludwig   56:21
Yeah.

Capital Cities   56:23
Yeah.

Riley Stahura   56:24
Um, so there's another rules folder in your clod.
It should just, it should be a peer of the skills folder. So you should just.
You can just do like a manual download of those files from the repo and just drag them in there. But ideally, you probably don't have that many rules, and the rules don't change that much. So it should just be like a one-time thing. The rules in our case, if you look at the rules, they sort of exist to just tell Claude.
Here's what all the skills are, here's how you route to them, and why you would use certain skills. And then there's some best practice stuff, like some things that go wrong often and how to troubleshoot it.
And I would say for everyone doing all this for the first time, we don't know the best thing to do. So you guys could definitely come up with the best practice and tell us how to do it. So this is just, we're trying our best, but I have no doubt one of you will come up with a better

Elliott Leonard   57:23
We don't.

Riley Stahura   57:33
Way to organize everything, so...

Elliott Leonard   57:36
For sure.

Riley Stahura   57:36
With us now.

Elliott Leonard   57:38
And I know we're on, we're coming up on time. So like I said at the beginning, like the point of this call is like, we really want to make sure that you can do this on your machine. And so I know that there were some hiccups. So if you didn't get as far as we did, like please ping me. I can sign up Riley, you can ping Riley too, but ping me like I like, I want to help everybody to make sure that they can do this on their machine.
That they can do, like this example we just said, where they can build cards, look at it, look at look at a Domo instance. So, if you're stuck on the Java part or maybe it was the NPM part, like, please like ping me today and let's get it to the point where you can do exactly what we just did here, where you can create cards just like Nick did. So, you know.
That was the goal of today. So hopefully, hopefully we got there with a lot of you, but if we didn't, like I said, let's figure it out. And yeah, let's start building cool stuff with Claude.

Nick Ludwig   58:31
Yeah, thanks everyone. This is this was awesome.

Dan Gouveia   58:31
Awesome. Thanks A lot. Great.

Elliott Leonard   58:35
Okay, thanks for your time, everybody.

Capital Cities   58:37
Thanks, guys.

Riley Stahura   58:38
See ya!

Capital Cities   58:45
Scott, if you wanna just click on there, just...

Elliott Leonard stopped transcription
