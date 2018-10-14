
export const genres = [
  {
    id: 'role',
    text: 'Role',
    description: 'Role'
  },
  {
    id: 'sport',
    text: 'Sport',
    description: 'Sport'
  },
  {
    id: 'shooter',
    text: 'Shooter',
    description: 'Shooter'
  },
  {
    id: 'driving',
    text: 'driving',
    description: 'Driving'
  },
  {
    id: 'strategy',
    text: 'strategy',
    description: 'Strategy'
  },
  {
    id: 'fight',
    text: 'fight',
    description: 'fight'
  }
]

export const scoreTypes = [
  {
    id: 'graphics',
    text: 'Graphics',
    children: [
      {
        id: 'technology',
        text: 'Technology'
      },
      {
        id: 'art',
        text: 'Artistic design'
      }
    ]
  },
  {
    id: 'audio',
    text: 'Audio',
    children: [
      {
        id: 'soundtrack',
        text: 'Soundtrack'
      },
      {
        id: 'effects',
        text: 'Special effects'
      }
    ]
  },
  {
    id: 'gameplay',
    text: 'Gameplay',
    children: [
      {
        id: 'gamefeel',
        text: 'Gamefeel'
      },
      {
        id: 'ux_ui',
        text: 'UX / UI'
      },
      {
        id: 'ia',
        text: 'Artifical Intelligence'
      },
      {
        id: 'originallity',
        text: 'Originallity'
      },
      {
        id: 'improvement',
        text: 'Improvement system'
      }
    ]
  },
  {
    id: 'duration',
    text: 'Duration',
    children: [
      {
        id: 'time',
        text: 'Amount of time'
      },
      {
        id: 'repetitive',
        text: 'Repetitive'
      }
    ]
  },
  {
    id: 'extra_features',
    text: 'Extra features',
    children: [
      {
        id: 'local_multi',
        text: 'Local multiplayer'
      },
      {
        id: 'online_multi',
        text: 'Online multiplayer'
      },
      {
        id: 'vr',
        text: 'Virtual Reality'
      },
      {
        id: 'localization',
        text: 'Localization'
      }
    ]
  }
];