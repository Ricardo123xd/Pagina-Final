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
      }
    ]//cierre de array canciones
  }//cierre album
];//cierre array albums