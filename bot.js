const Discord = require('discord.js');
const client = new Discord.Client();
 const prefix = "L!";





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', async message => {  
    if(message.content.startsWith(prefix + "sharejs")) {   
      if(message.channel.name !== 'sharejs') return message.reply('يجب كتابه الامر في روم باسم sharejs')
      await message.channel.send("**:writing_hand: ارسل الكود الان **").then(e => {
      let filter = m => m.author.id === message.author.id
      let lan = '';
      let md = '';  
      let br = '';  
      let chaLan = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
      .then(collected => {
        lan = collected.first().content
        collected.first().delete()
  e.edit(`**:writing_hand: اكتب وصف الكود الان**`)
  let chaMd = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })
  .then(co => {  
    md = co.first().content
          co.first().delete()  
          e.edit(`**:writing_hand: ارسل المصدر او صانع الكود**`)
  let br = message.channel.awaitMessages(filter, { max: 1, time: 40000, errors: ['time'] })    
  .then(col => {
    br = col.first().content
          col.first().delete()
  e.edit("**جاري النشر ...**").then(b => {    
          setTimeout(() => {
    b.edit(`**تم النشر بنجاح**`)
          },2000);
  let gg = message.guild.channels.find('name', 'codes-js')
  if(!gg) return message.reply('لا يوجد روم باسم codes-js')
  if(gg) {
  gg.send(`
  @everyone | @here 
  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  ${message.guild.name}© :arrow_down:
  ${lan}

  =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
  
  **وصف الكود:** ${md}
  **تم النشر بواسطة:** ${message.author.tag} With ID ${message.author.id}
  **المصدر / الشخص يلي صنع الكود:** ${br}
  
  
  
  
  
  `)
  }
}
)}
  )}
)}
      )}
    )}
})







client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-admin** ' ,' **قسم اكواد الاداريه** ')
.addField('     **#help-js-source**  ' ,' **قسم اكواد السورس الاساسي** ')
.addField('     **#help-js-general** ' , '**قسم اكواد العامة**')
.addField('     **#help-js-welcome** ' , '**قسم اكواد الترحيب**')
.addField('     **#help-js-help** ' ,' ** قسم اكواد الهلب**')
.addField('     **#help-js-bc** ' , '**قسم اكواد البرودكاست**')
.addField('     **#help-js-exports** ' , '**قسم اكواد الاكسبورت**')
.setColor('RANDOM')
message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js-admin")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-admin-1 ** ' ,' **كود الباند** ')
.addField('     **#help-js-admin-2 **  ' ,' **كود الكيك** ')
.addField('     **#help-js-admin-3 ** ' , '**كود مسح الشات وشبيه بالبروبوت**')
.addField('     **#help-js-admin-4** ' , '**كود تقفيل وفتح الشات**')
.addField('     **#help-js-admin-5** ' , '**كود لانشاء شات كتابي**')
.addField('     **#help-js-admin-6** ' , '**كود انشاء روم صوتي**')
.addField('     **#help-js-admin-7** ' , '**invite : كود دعوه البوت مثال**')
.addField('     **#help-js-admin-8** ' , '**كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه**')
.addField('     **#help-js-admin-9** ' , '**كود مسح الشات بالرياكشن**')
.addField('     **#help-js-admin-10** ' , '**كود ميوت مؤقت**')
.addField('     **#help-js-admin-11** ' , '**كود باند مؤقت**')
.setColor('RANDOM')
message.channel.sendEmbed(embed);


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-1") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
 كود الباند
 https://hastebin.com/ixajoliwox.php
`);

    }
});}})


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-2") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود الكيك
 https://hastebin.com/eyiheyinij.php

`);

    }
});







client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-3") {
		 message.channel.send('**تم ارسال الكود في الخاص**');







 message.author.sendMessage(`
 **
 كود مسح الشات وشبيه بالبروبوت
 https://hastebin.com/yexayotebu.coffeescript

`);

    }
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-4") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود تقفيل الشات وفتح الشات
 https://hastebin.com/romomoxafi.coffeescript

`);

    }
});




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-5") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود انشاء شات كتابي
 https://hastebin.com/ahitavadaj.go


`);

    }
});



client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-6") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود انشاء روم صوتي
 https://hastebin.com/ocaxixoduw.go

`);

    }
});





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-7") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود لاضافه البوت
 https://hastebin.com/fonakilepe.php

`);

    }
});



client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-8") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود رابط يرسله خاص ل 100شخص لمدة 24 ساعه
https://hastebin.com/tebizoruru.php

`);

    }
});





client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-9") {
		 message.channel.send('**تم ارسال الكود في الخاص**')




 message.author.sendMessage(`
 **
كود مسح الشات بالرياكشن
https://hastebin.com/nacegagoza.coffeescript

`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-10") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود ميوت مؤقت
 https://hastebin.com/quyatapica.js
`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-admin-11") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
كود باند مؤقت
https://hastebin.com/cunesihava.js
`);

    }
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js-source")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-source-1 ** ' ,' **السورس الاساسي** ')
.addField('     **#help-js-source-2 **  ' ,' **السورس الاساسي مع الستريمنق ومعلومات البوت** ')
.setColor('RANDOM')
message.channel.sendEmbed(embed);




    }})




client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-1") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
السورس الاساسي
 https://pastebin.com/kaQvjHe5




`);

    }
});






client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-source-2") {
		 message.channel.send('**تم ارسال الكود في الخاص**');





 message.author.sendMessage(`
 **
 السورس الأساسي مع الستريمنق ومعلومات البوت
 https://hastebin.com/junudobano.coffeescript




`);

    }
});



client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js-general")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-general-1 ** ' ,' **كود البنق** ')
.addField('     **#help-js-general-2 **  ' ,' **كود القرعه** ')
.addField('     **#help-js-general-3 ** ' , '**كود الافتار**')
.addField('     **#help-js-general-4** ' , '**كود معلومات السيرفر**')
.addField('     **#help-js-general-5** ' , '**كود معلومات الشخصيه**')
.addField('     **#help-js-general-6** ' , '**كود كت تويت**')
.addField('     **#help-js-general-7** ' , '**كود صراحه**')
.addField('     **#help-js-general-8** ' , '**كود لبلاي وستريمينق واتشنق في كودواحد**')
.addField('     **#help-js-general-9** ' , '**كود فورت نايت**')
message.channel.sendEmbed(embed);




    }})


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-1") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود البنق
     https://hastebin.com/cibopaduxo.coffeescript

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-2") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود القرعة
     https://hastebin.com/qunobubuji.js

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-3") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود الافاتار
     https://hastebin.com/wopigecazo.js

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-4") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود معلومات السيرفر
     https://hastebin.com/xajaregari.js

    `);

        }
    });


   client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-5") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود المعلومات الشخصية
     https://hastebin.com/vitodewesa.js

    `);

        }
    });


  client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-6") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود كت تويت
     https://hastebin.com/ocavoviwag.go

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-7") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     كود صراحه
     https://hastebin.com/ubafamovuh.coffeescript

    `);

        }
    });

        client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-8") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
    كود واتشنق وستريمنق وبلاينق في كود واحد!
    لازم تحط اليوزر ايدي و البيرفكس
     https://hastebin.com/wodupufilu.js
    `);

        }
    });



        client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-general-9") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
          كود معلومات الاعب في فورت نايت
     https://hastebin.com/giwevehoqo.cs

    `);

        }
    });



    client.on('message', message => {
        if (message.content.startsWith(prefix + "help-js-welcome")) {
    let embed = new Discord.RichEmbed()
    .setThumbnail(message.author.avatarURL)
    .addField('     **#help-js-welcome-1 ** ' ,' **كود ترحيب مع ذكر رقم عضو** ')
    .addField('     **#help-js-welcome-2 **  ' ,' **كود ترحيب مع صوره** ')
    .addField('     **#help-js-welcome-3 ** ' , '**كود مغادره العضو**')
    .setColor('RANDOM')
    message.channel.sendEmbed(embed);






        }})



        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-welcome-1") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود ترحيب مع ذكر رقم العضو
         https://hastebin.com/zapuyexive.js

        `);

            }
        });

        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-welcome-2") {
                 message.channel.send('**م ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود الترحيب مع صورة
         https://hastebin.com/tujehubuqo.php

        `);

            }
        });


        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-welcome-3") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود مغادرة العضو
         https://hastebin.com/gufimedaca.js

        `);

            }
        });

        client.on('message', message => {
            if (message.content.startsWith(prefix + "help-js-help")) {
        let embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .addField('     **#help-js-help-1 ** ' ,' **كود هلب مع امبد يرسل بنفس الشات** ')
        .addField('     **#help-js-help-2 **  ' ,' **كود هلب مزخرف بدون امبد ويرسل عالخاص** ')
        .setColor('RANDOM')
        message.channel.sendEmbed(embed);

            }})




        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-help-1") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود هلب مع امبد يرسل بنفس الشات
         https://hastebin.com/cikeyoguqa.cs

        `);

            }
        });


        client.on('message', message => {
            if (message.author.bot) return;
             if (message.content === prefix + "help-js-help-2") {
                 message.channel.send('**تم ارسال الكود في الخاص**');





         message.author.sendMessage(`
         **
         كود هلب مزخرف بدون امبد ويرسل عالخاص
         https://hastebin.com/eroxisamuk.vbs

        `);

            }
        });

        client.on('message', message => {
            if (message.content.startsWith(prefix + "help-js-bc")) {
        let embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURL)
        .addField('     **#help-js-bc-1 ** ' ,' ** برودكاست + للكل + مطور** ')
        .addField('     **#help-js-bc-2 **  ' ,' **برودكاست + للكل + غير مطور ** ')
        .addField('     **#help-js-bc-3 ** ' , '**برودكاست + للاونلاين + مع منشن + غير مطور**')
        .addField('     **#help-js-bc-4** ' , '**برودكاست + للكل + مع منشن + غير مطور**')
        .addField('     **#help-js-bc-5** ' , '**برودكاست + للكل + مع منشن + مطور+ رياكشن**')
        .setColor('RANDOM')
        message.channel.sendEmbed(embed);



    }})




    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-1") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للكل + مطور
     https://hastebin.com/bipanureqa.js

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-2") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للكل + غير مطور
     https://hastebin.com/kuvoruzowe.cs

    `);

        }
    });


    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-3") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للأونلاين + مع منشن + غير مطور
     https://hastebin.com/zujuvupali.php

    `);

        }
    });

    client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-4") {
             message.channel.send('**تم ارسال الكود في الخاص**');





     message.author.sendMessage(`
     **
     برودكاست + للكل + مع منشن + غير مطور
     https://hastebin.com/zojokunayo.php

    `);

        }
    });



     client.on('message', message => {
        if (message.author.bot) return;
         if (message.content === prefix + "help-js-bc-5") {
             message.channel.send('**تم ارسال الكود في الخاص**');


         message.author.sendMessage(`
     **
     بربرودكاست + للكل + مع منشن + مطور+ رياكشن
     https://hastebin.com/zuzezekema.coffeescript

    `);

        }
    });


client.on('message', message => {
    if (message.content.startsWith(prefix + "help-js-exports")) {
let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **#help-js-exports-1 ** ' ,' **كود الميوت المؤقت مطور ** ')
.addField('     **#help-js-exports-2 **  ' ,' **كود الكيك** ')
.addField('     **#help-js-exports-3 ** ' , '**كود مسح الشات**')
.addField('     **#help-js-exports-4** ' , '**كود ساي**')
.addField('     **#help-js-exports-5** ' , '**كود اعطاء شخص رتبه وازالتها**')
.addField('     **#help-js-exports-6** ' , '**كود تغيير البريفكس**')
.addField('     **#help-js-exports-7** ' , '**كود ابلاغ او ريبورت**')
.addField('     **#help-js-exports-8** ' , '**كود معلومات السيرفر**')
.addField('     **#help-js-exports-9** ' , '**كود معلومات البوت**')
.addField('     **#help-js-exports-10** ' , '**كود كود الباند (مو مؤقت)ا**')
.setColor('RANDOM')
message.channel.sendEmbed(embed);

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-1") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود ميوت مؤقت مطور
https://pastebin.com/jFzE21fF
`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-2") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود كيك
https://pastebin.com/Taa2kJqN
`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-3") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود مسح الشات
https://pastebin.com/c2sANeL5
`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-4") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود ساي
https://pastebin.com/WssE8ywy
`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-5") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود اعطاء رتبه لشخص
 https://pastebin.com/qwCv3VjR
 كود ازاله رتبه من شخص
 https://pastebin.com/Ge0eEJDP

`);

    }
});


client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-6") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود تغيير البريفكس
https://pastebin.com/zMDVLzCK
`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-7") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود تغيير البريفكس
https://pastebin.com/NAfv1UbN
`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-8") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود معلومات السيرفر
 https://pastebin.com/wYrXx2Be
`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-9") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود معلومات البوت
https://pastebin.com/CcWedMQf
`);

    }
});

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-js-exports-10") {
         message.channel.send('**تم ارسال الكود في الخاص**');


     message.author.sendMessage(`
 **
كود باند غير مؤقت
 https://hastebin.com/qiwigejulo.js
`);

    }
});

    const devs = ['429972030092476437' , '' , '' , ''];
const adminprefix = "#";
client.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!devs.includes(message.author.id)) return;

  if (message.content.startsWith(adminprefix + 'ply')) {
    client.user.setGame(argresult);
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'wt')) {
  client.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'ls')) {
  client.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  } else
  if (message.content.startsWith(adminprefix + 'st')) {
    client.user.setGame(argresult, "https://www.twitch.tv/idk");
      message.channel.sendMessage(`**:white_check_mark:   ${argresult}**`)
  }
  });


    }})

client.on('message', function(message) {
  var prefix = '$';
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('حط رقم معين يتم السحب منه');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});


// Alpha Codes,// Alpha Codes,// Alpha Codes
client.on('message', async message => {
    var command = message.content.toLowerCase().split(" ")[0];
    var name = '';// Alpha Codes
    var age = '';// Alpha Codes
    var fromwhere = '';// Alpha Codes
    var fa2dh = '';// Alpha Codes
    var filter = m => m.author.id === message.author.id;// Alpha Codes
    var subChannel = message.guild.channels.find(c => c.name === 'support-join');// Alpha Codes
   
    if(command == prefix + 'join-support') {// Alpha Codes
        if(message.author.bot) return;
        if(message.channel.type === 'dm') return;
 
        var modRole = message.guild.roles.find(r => r.name === 'Support');// Alpha Codes
       
        if(message.guild.member(message.author).roles.has(modRole.id)) return message.channel.send(':x: | معك الرتبة');// Alpha Codes
        if(!subChannel) return message.channel.send(':x: | يجب ان يتوفر روم اسمه `support-join`');// Alpha Codes
       
        message.channel.send(':timer: | **اكتب اسمك الحقيقي الان من فضلك**').then(msgS => {
            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                name = collected.first().content;
                collected.first().delete();
                msgS.edit(':timer: | **من فضلك اكتب عمرك الان**').then(msgS => {
                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                        age = collected.first().content;
                        collected.first().delete();
                        msgS.edit(':timer: | **من فضلك اكتب من اي بلد انت**').then(msgS => {
                            message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                fromwhere = collected.first().content;
                                collected.first().delete();
                                msgS.edit(':timer: | **من فضلك اكتب سبب تقديمك على الرتبة والمهارات اللتي لديك لتقديمها**').then(msgS => {
                                    message.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).then(collected => {
                                        fa2dh = collected.first().content;
                                        collected.first().delete();
                                       
                                        let embedS = new Discord.RichEmbed()
                                        .setAuthor(message.author.tag, message.author.avatarURL)
                                        .setThumbnail(message.author.avatarURL)
                                        .setDescription('**\n:no_entry: هل انت متأكد انك تريد التقديم؟**')
                                        .setColor('GREEN')
                                        .addField('الاسم', name, true)
                                        .addField('العمر', age, true)
                                        .addField('من وين', fromwhere, true)
                                        .addField('المهارات وسبب التقديم على الرتبة', fa2dh, true)
                                        .setTimestamp()
                                        .setFooter(message.guild.name, message.guild.iconURL)
                                       
                                        msgS.delete();
                                        message.channel.send(embedS).then(msgS => {
                                            msgS.react('✅').then(() => msgS.react('❎'))
                                           
                                            let yesSure = (reaction, user) => reaction.emoji.name === '✅'  && user.id === message.author.id;
                                            let no = (reaction, user) => reaction.emoji.name === '❎' && user.id === message.author.id;
                                           
                                            let yesSend = msgS.createReactionCollector(yesSure);
                                            let dontSend = msgS.createReactionCollector(no);
                                           
                                            yesSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':white_check_mark: | تم تقديم طلبك بنجاح انتظر النتيجة في روم support-accept').then(msg => msg.delete(5000));
                                               
                                                let subMsg = new Discord.RichEmbed()
                                                .setAuthor(message.author.tag, message.author.avatarURL)
                                                .setColor('GREEN')
                                                .setThumbnail(message.author.avatarURL)
                                                .addField('الاسم', name)
                                                .addField('العمر', age)
                                                .addField('من وين', fromwhere)
                                                .addField('لماذا يريد التقديم', fa2dh)
                                                .addField('حسابه', message.author)
                                                .addField('ايدي حسابه', message.author.id, true)
                                               
                                                subChannel.send(subMsg).then(msgS => {
                                                    msgS.react('✅').then(() => msgS.react('❎'))
                                                   
                                                    let accept = (reaction, user) => reaction.emoji.name === '✅' 
                                                    let noAccept = (reaction, user) => reaction.emoji.name === '❎' 
                                                   
                                                    let acceptRe = msgS.createReactionCollector(accept);
                                                    let noAcceptRe = msgS.createReactionCollector(noAccept);
                                                   
                                                    acceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:white_check_mark: | تم قبولك سبورت بسيرفر **${message.guild.name}**`);
                                                        message.guild.member(message.author).addRole(modRole.id);
                                                        message.guild.channels.find(r => r.name === 'support-accept').send(`:white_check_mark: | تم قبولك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                    noAcceptRe.on('collect', r => {
                                                        msgS.delete();
                                                        message.author.send(`:x: | تم رفضك بسيرفر **${message.guild.name}**`);
                                                        message.guild.channels.find(r => r.name === 'support-accept').send(`:x: | تم رفضك [ <@${message.author.id}> ]`);
                                                    }).catch();
                                                })
                                            });// Alpha Codes
                                            dontSend.on('collect', r => {
                                                msgS.delete();
                                                message.channel.send(':x: | تم الغاء تقديمك');// Alpha Codes
                                            });
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
});




client.login(process.env.BOT_TOKEN)
