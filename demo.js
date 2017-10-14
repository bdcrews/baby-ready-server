const faker = require('faker');
const {Journal} = require('./journal/models');
const {User} = require('./users/models');

const initializeDemo = () => {
  const journalData = [];
  journalData.push({
    weekNumber: 7,
    title: 'First feelings',
    journalText: 'FANTASTIC NEWS!!!!  This is what I have waited so long for, finally the time is right and I couldn’t be happier.  I just really hope that I can do as well as everyone seems to think I will!!  I am very excited but nervous at the same time.  We have told our close family but will wait until the 12 week scan to tell our friends.  (Weight: 139lbs)\n\nDADDY says: Really happy.  So pleased that we have conceived quickly as we both wanted to start a family together soon after being married.  Can’t wait to get throught the first few weeks until the 1st scan so we can actually see our baby.  This will make it all real for me.',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 8,
    title: 'Week 8',
    journalText: 'I have NEVER felt so tired in my life, I have no energy to do anything – I hope this phase doesn’t last long.  To make matters worse, I can’t sleep when I get to bed!  My moods are very changeable (probably because I’m so tired) – one minute I’m deliriously happy, the next down and blue or agitated (though that could easily be work!).  I haven’t developed any cravings yet but I’m STARVING, I just want to eat, eat, eat.  I have slight nausea in the morning but thankfully so far haven’t actually been sick.',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 9,
    title: 'Week 9',
    journalText: 'Thankfully not feeling as tired this week – we have booked a holiday to Fuerteventura, so I’m really looking forward to this.  I can’t believe my appetite, before falling pregnant I used to just take an average size lunch box to work, I’m now taking a carrier bag full of food – and very often still going to the supermarket at dinner for more.  I have developed a craving for milk, I just can’t get enough of it – especially Friij milkshakes!!',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 10,
    title: 'Week 10',
    journalText: 'Went to my first Midwife appointment and had to complete heaps of forms.  She says that I appear very fit and healthy – phew!\n\nWe’re now on holiday in Fuerteventura – gutted, this is the first holiday I’ve been on an all inclusive and I’m pregnant.  Everyone in my party is enjoying the free alcohol and I’m stuck on orange juice!  I already have a tiny little bump showing which in my bikini looks like I’ve eaten too much.  Acid indigestion has kicked in with a vengeance this week, it’s awful – really hope this doesn’t last.  Also feeling very emotional!!!!',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 11,
    title: 'Week 11 – Accupuncture',
    journalText: 'I have always been a sufferer of migraines and have managed to keep them under control (sort of) with medication, of course now that I’m pregnant I can’t do that anymore so my Doctor has suggested that I try accupuncture.  I was really surprised to find out that I could get this FREE at my local surgery so I decided to give it a go.  I had three needles in my head (one on my forehead and one in either temple), one in my hand and one on each foot.  They were left in for about 15 minutes whilst I sat quietly in a room and read a magazine (difficult task when the needle on my forehead was right between my eyes – slightly offputting!).  It was not painful at all – I’m not totally happy with needles at the best of times – and I have been told that I should only need to go for three to six sessions.',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 12,
    title: 'Week 12 – FIRST SCAN',
    journalText: 'Feelings before the scan – excited but very nervous.  My mind is racing back to my friend who discovered at her first scan that her baby had died.  I have already become so attached to this little person inside me, I just want everything to be ok.\n\nWe arrived early to our appointment and didn’t get taken in until 15 minutes after our time so the wait felt like forever – especially with a full bladder!  The sonographer was less than pleasant and didn’t make the experience feel “special” at all.  I’m fully aware that they look at scans every day but this is the first time we will get to look at our first baby together.  However, when the image came on the screen of our little “bean” I went all warm and mushy inside, there is a little person growing and moving around inside me – this is amazing, the best feeling in the world.\n\nDADDY says: Cool, amazing to see the baby and its tiny heart beating away.  Feel really paternal already.  Can’t wait to see the next scan and the development.  Bina’s bump is showing now, she looks really mumsy – it’s lovely x\n\n(Can’t say that I was too happy with the “mumsy” comment – Daddy got put straight on that one – but I loved the rest of his comment).\n\nOMG have just spoken to one of my best friends who lives an hours journey from me and she is pregnant too and we cannot believe this but we have the same due date!!!',
    doctorCheckbox: true,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 13,
    title: 'Week 13',
    journalText: 'I’m feeling much less tired now and am sleeping well at night.  I’m also not wanting to eat everything in sight – thank goodness.  I’m still craving lots of milk but I also really want savoury foods and chinese – lots of it!\n\nWe have now told pretty much everyone about the baby and they are all really happy for us, though shocked at how quickly we have fallen pregnant.  We have told “big brother” that we are going to have a baby.  Not sure on Daddy’s method of telling him though.  We sat him down and Daddy said “What would you really really like to have?” – so his head is obviously spinning with Dr Who and all the lego creatures in the world when I said “Daddy doesn’t mean toys or anything like that – we’re talking about family” suddenly his face lit up and he said “A baby brother or sister?”.  He was soooo excited, he wants to name the baby James for a boy or Eleanor for a girl.  He was so excited he told all his friends and teachers at school.\n\nOn the downside my sister-in-law has been diagnosed with breast cancer (she is the same age as me) so this has come as a huge shock and emotions are running very high.  We feel bad for being happy when something so terrible is happening.',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 15,
    title: 'Week 15',
    journalText: 'We bought our pram this week, it still feels so funny buying baby stuff – that may sound daft as obviously we are pregnant but it still feels like I’m pretending.  Even though I have a bump growing, it still doesn’t feel real – maybe when I start to feel movements it will feel more like a baby in there than just me getting fat!\n\nAnyway, as I was saying we bought our pram this week.  Its a Graco Mosaic Travel System, we didn’t really know what we wanted but our local Baby Megastore was closing down so there were big savings to be had.  I think we saved about £100 on the initial sale price, I always love a bargain!!  So off we went with our new travel system and stored in at the in-laws as I’m very superstitious and there was no way that it was coming home before the baby! \n\n',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 16,
    title: 'Week 16',
    journalText: 'OMG I have started to feel the baby move.  It only happens when I’m settling down in bed at night, it feels like someone is “tickling” my tummy or like there are “bubbles” running under the skin – NO I haven’t got wind, I definitely know the difference on that one.  This is so exciting, though I think hubby feels a little left out as obviously he can’t feel anything yet.\n\nMy energy levels are right back up again, yippee and all the nausea has gone.  I’m feeling fantastic at the moment – gone are the days when I can’t drag myself out of bed and gone too is the urge to eat everything in sight.  Still can’t give up the Friij milkshakes though – YUM YUM!!!\n\nMy accupuncture has now finished and I am happy to say that I am already migraine free, I used to have migraines at least once a week but I haven’t had them for 2 weeks now.  Fingers crossed it will stay this way!!',
    doctorCheckbox: false,
    importantCheckbox: true,
  });
  journalData.push({
    weekNumber: 18,
    title: 'Week 18',
    journalText: 'Booo, I have a stinking cold that just doesn’t want to shift and of course, thanks to bump I can’t take anything for it other than a paracetamol, I might as well chew a hanky for all the good that does.  Thanks to my cold I have zero concentration at work which is getting me down.  I’m a control freak and hate to feel like I can’t cope, or worse still, that my colleagues think I can’t cope!\n\nGave in to the cold and have taken 2 days of work and slept both days.\n\nWorrying lots about my sister-in-law too, these are difficult times.  Because of my cold I’m not allowed to visit which makes me feel even more useless.',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 19,
    title: 'Week 19 – nearly scan time!!  To discover the sex, that is the question . . .',
    journalText: 'We’re only a week away from the 20 week scan and getting so excited.  People keep asking if we’re going to discover the sex or not.  Right from the beginning we have both said that we definitely don’t want to find out until the birth but the closer we’re getting to the scan, the more I’m wondering if I can wait that long.  What’s making it a more difficult decision is that my close friend is having a baby too and has just found out that she is having a girl.  I keep saying that I don’t mind what we have as long as its healthy but deep down I know that I really want a girl.  Because Hubby has been married before and already has a son I want to give him the one thing he hasn’t got, and I also think it will be harder for people to compare the two children if they are a different sex.\n\nOn the plus side to discovering the sex you can buy “gender specific” baby stuff, instead of having to stick to lemon, lilac or white.  But on the downside, we can’t help but feel that some of the “magic” will be taken away.  The decision has been made, we are NOT going to discover the sex – well, maybe not!?!?',
    doctorCheckbox: false,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 20,
    title: 'Week 20 – SCAN TIME!!',
    journalText: 'What a difference a sonographer makes!  This time we had a lovely lady who really made this feel special.  We took Big Brother with us so that he could see his baby brother/sister on the screen.  We were all really excited but then the moment you dread happening, happened!  The sonographer went very quiet, frowned and kept flicking from screen to screen.  I looked at Hubby and without speaking, we both knew that something wasn’t right.  Hubby asked the sonographer if there was a problem, to our relief she said that the baby was absolutely fine but that I had a low-lying placenta (placenta praevia).  It was covering my cervix (the babies “exit”) and that it could lead to me bleeding or having to have a c-section but that basically it was nothing to worry about, this is very common in pregnancy.  After that she showed us images of our baby moving around and gave us some pictures to bring home.  They were amazing, you could see every detail so clearly, our baby looked so delicate.\n\nWe went home and got straight onto the internet and looked up placenta praevia, which is probably the worst thing we could have done as there are all sorts of scare stories.  We then spoke to a few friends and it turned out they too had placenta praevia in previous, and might I add, successful pregnancies.  Everything will be fine, I know it!',
    doctorCheckbox: true,
    importantCheckbox: false,
  });
  journalData.push({
    weekNumber: 22,
    title: 'Week 22',
    journalText: 'The baby has now started kicking, which is the best feeling in the world.  It’s a lovely but odd feeling.  I felt the first really faint kicks on 13th January 2008 but since then I have been feeling it more and more.  The movements are still mainly at night when I’m relaxing or just thinking about going to sleep – little monkey!  Daddy has managed to feel a few of the kicks but often as he puts his hand on my tummy baby stops – I bet baby is doing it on purpose.  I’ve had one sleepless night because baby was jiffling and turning all night, that is the strangest sensation in the world and actually made me feel sick.  All the movements are really making me feel “connected” to baby now.  It has also just dawned on me that I am now over half way through, this time has flown by, I can’t believe in a couple of months our lives will never be the same again!! Arghhh, so nervous now!!!',
    doctorCheckbox: false,
    importantCheckbox: false,
  });

  // generate the demo user with data

  console.info('seeding Demo Journal data');
  const seedData = [];
  const dueDateDate = new Date((new Date()).getTime() + 18 * 7 * 24 * 60 * 60 * 1000);
  const startDate = new Date(dueDateDate.getTime() - 40 * 7 * 24 * 60 * 60 * 1000 );

  for (let i=0; i<journalData.length; i++) {
    seedData.push({

      username: 'demo@mail.com',
      title: journalData[i].title,
      journalText: journalData[i].journalText,
      timestamp: new Date(startDate.getTime() + journalData[i].weekNumber * 7 * 24 * 60 * 60 * 1000),
      doctorCheckbox: journalData[i].doctorCheckbox,
      importantCheckbox:journalData[i].importantCheckbox,
      weight: 100 + faker.random.number()%60,
      systolic: 120 + faker.random.number()%30,
      diastolic: 50 + faker.random.number()%40
    });
  }

  // this will return a promise
  Journal.remove({username: 'demo@mail.com'})
  .exec()
  .then(()=>{Journal.insertMany(seedData)})
  .catch(err => res.status(500).json({message: 'Internal server error'}));

  const update = {
    firstName: 'Jane',
    lastName: 'Smith',
    lmd: startDate,
    dueDate: dueDateDate,
    bloodType: 'A',
    rhFactor: 'neg',
    docName: "Carrie Casper",
    docPhone: "800-555-5555",
    userNotes: '',
    colorTheme: 'pink'
  }

  User
  .findOneAndUpdate({username: 'demo@mail.com'}, update, {new: true})
  .exec()
  .catch(err => {console.log('got here'); res.status(500).json({message: 'Internal server error'})});
}

module.exports = {initializeDemo};