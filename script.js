function play(albumIndex, cancionIndex) {
  //codigo no optimizado pero fue la unica solución que encontré xd

  const cancion = albums[albumIndex].canciones[cancionIndex];

  if (albumIndex == 0) {
    document.getElementById("videoFrame").src = cancion.link;
  } else if (albumIndex == 1) {
    document.getElementById("videoFrame2").src = cancion.link;
  }
}

const albums = [
  {
    album: "Please Please me",
    anio: 1963,
    discografica: "Parlophone",
    numCanciones: 9,
    canciones: [
      {
        titulo: "I Saw Her Standing There",
        link: "https://www.youtube.com/embed/oxwAB3SECtc?si=P1A1MU3YZZVMWYed",
        duracion: "2:53",
      },
      {
        titulo: "Misery",
        link: "https://www.youtube.com/embed/qhbcN3ew9z0?si=UWYeDuf2eRc8tc-8",
        duracion: "1:48",
      },
      {
        titulo: "Anna (Go To Him)",
        link: "https://www.youtube.com/embed/b3zNKWyLfus?si=n6eFnKPkFLZTEiPG",
        duracion: "2:57",
      },
      {
        titulo: "Chains",
        link: "https://www.youtube.com/embed/rJOhavaeJYk?si=oTgThdrhr_Cssrj0",
        duracion: "2:26",
      },
      {
        titulo: "Boys",
        link: "https://www.youtube.com/embed/Qr8OuW5JJgQ?si=df6E2diY-HUR2AZ6",
        duracion: "2:27",
      },
      {
        titulo: "Ask Me Why",
        link: "https://www.youtube.com/embed/2ttGjtfQ7EA?si=_I874aTAVsX5mwpO",
        duracion: "2:24",
      },
      {
        titulo: "Please Please Me",
        link: "https://www.youtube.com/embed/czw8eqepir8?si=aMXZ2kpdPtMNNWI3",
        duracion: "2:01",
      },
      {
        titulo: "Love Me Do",
        link: "https://www.youtube.com/embed/0pGOFX1D_jg?si=v0eDyKHCJFiQPogy",
        duracion: "2:22",
      },
      {
        titulo: "P.S. I Love You",
        link: "https://www.youtube.com/embed/MA5DkiVKSlM?si=CWK-pQV6ccn_--e2",
        duracion: "2:05",
      },
      {
        titulo: "Baby It's You",
        link: "https://www.youtube.com/embed/AWUTlM6hz0g?si=SkdgTMBAipH4_BoB",
        duracion: "2:40",
      },
      {
        titulo: "Do You Want To Know A Secret",
        link: "https://www.youtube.com/embed/uRQ7ecvU56k?si=lFt_DHjmJGkcVoun",
        duracion: "1:58",
      },
      {
        titulo: "A Taste Of Honey",
        link: "https://www.youtube.com/embed/MkQ1eOcl5ug?si=iXH06OxVkUPBP16m",
        duracion: "2:04",
      },
      {
        titulo: "There's A Place",
        link: "https://www.youtube.com/embed/vTsbYbN8VVI?si=U0RHcbTeuL7_9E_W",
        duracion: "1:51",
      },
      {
        titulo: "Twist And Shout",
        link: "https://www.youtube.com/embed/2RicaUqd9Hg?si=FnRNYoIXSiY3kgpV",
        duracion: "2:36",
      }
    ] // cierre de canciones
  },// cierre primer album

  {
    album: "Help!",
    anio: 1965,
    discografica: "Parlophone",
    num_canciones: 14,
    canciones: [
      {
        titulo: "Help!",
        link: "https://www.youtube.com/embed/2Q_ZzBGPdqE?si=4FZuesbr5omo4nLY",
        duracion: "2:20",
      },
      {
        titulo: "The Night Before",
        link: "https://www.youtube.com/embed/7tD40D7jk-Q?si=OBLqW8t7cgfV8pjr",
        duracion: "2:35",
      },
      {
        titulo: "You've Got To Hide Your Love Away",
        link: "https://www.youtube.com/embed/V8nLraecPRY?si=NvL09H4apgnUaXd9",
        duracion: "2:10",
      },
      {
        titulo: "I Need You",
        link: "https://www.youtube.com/embed/6t24nX_sak8?si=ZYt6FVnoTDAGywKf",
        duracion: "2:26",
      },
      {
        titulo: "Another Girl",
        link: "https://www.youtube.com/embed/EMBYNWr5R_U?si=-325FjVx_VwY1qJa",
        duracion: "2:05",
      },
      {
        titulo: "You're Going To Lose That Girl",
        link: "https://www.youtube.com/embed/vqpEZuv29qE?si=Tkyqa1V-68j2TiSa",
        duracion: "2:19",
      },
      {
        titulo: "Ticket To Ride",
        link: "https://www.youtube.com/embed/SyNt5zm3U_M?si=QxPfuT-_ApwxxdwZ",
        duracion: "3:03",
      },
      {
        titulo: "Act Naturally",
        link: "https://www.youtube.com/embed/yjJd8rZPcAQ?si=nip9k8pf_rCDnbAS",
        duracion: "2:31",
      },
      {
        titulo: "It's Only Love",
        link: "https://www.youtube.com/embed/OPiKDHYCkjs?si=qBhfJxBT-h0L_jSZ",
        duracion: "1:57",
      },
      {
        titulo: "You Like Me Too Much",
        link: "https://www.youtube.com/embed/ZqCf3D26YlA?si=7HwOLnFoXkun_8zt",
        duracion: "2:37",
      },
      {
        titulo: "Tell Me What You See",
        link: "https://www.youtube.com/embed/bztiAcsATyI?si=bTxU_prsT8DNcG6t",
        duracion: "2:38",
      },
      {
        titulo: "I've Just Seen A Face",
        link: "https://www.youtube.com/embed/m8LbJfC0SYM?si=YmAf-kkKZSH489zs",
        duracion: "2:06",
      },
      {
        titulo: "Yesterday",
        link: "https://www.youtube.com/embed/NrgmdOz227I?si=i2CgyWuz5VvMygp_",
        duracion: "2:06",
      },
      {
        titulo: "Dizzy Miss Lizzy",
        link: "https://www.youtube.com/embed/psJ1cHm_su4?si=P5lYxXs2_mRzKe_q",
        duracion: "2:57",
      }
    ]//cierre de array canciones
  }//cierre album

];//cierre array albums
