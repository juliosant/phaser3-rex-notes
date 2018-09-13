// direction to delta tileXY

const ODD_R = {
    x: [
        [+1, 0],
        [0, +1],
        [-1, +1],
        [-1, 0],
        [-1, -1],
        [0, -1]
    ],
    y: [
        [+1, 0],
        [+1, +1],
        [0, +1],
        [-1, 0],
        [0, -1],
        [+1, -1]
    ]
};
const EVEN_R = {
    x: [
        [+1, 0],
        [+1, +1],
        [0, +1],
        [-1, 0],
        [0, -1],
        [+1, -1]
    ],
    y: [
        [+1, 0],
        [0, +1],
        [-1, +1],
        [-1, 0],
        [-1, -1],
        [0, -1]
    ]
};
const ODD_Q = {
    x: [
        [+1, 0],
        [0, +1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [+1, -1]
    ],
    y: [
        [+1, +1],
        [0, +1],
        [-1, +1],
        [-1, 0],
        [0, -1],
        [+1, 0]
    ]
};
const EVEN_Q = {
    x: [
        [+1, +1],
        [0, +1],
        [-1, +1],
        [-1, 0],
        [0, -1],
        [+1, 0]
    ],
    y: [
        [+1, 0],
        [0, +1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [+1, -1]
    ]
};
const Neighbors = [
    ODD_R,
    EVEN_R,
    ODD_Q,
    EVEN_Q
];

export default Neighbors;