function makeMatrix(particle, matrix) {
  let response = '';
  if (matrix < 4) {
    response = 'Matrix must be greater than 3.'
  } else if (particle === 'e') {
    response = makeWithParticleE(matrix);
  } else if (particle === 'p') {
    response = makeWithParticleP(matrix);
  } else if (particle === 'n') {
    response = makeWithParticleN(matrix);
  } else {
    response = makeWithoutParticle(matrix);
  }
  return response;
}

function makeWithParticleN(matrix) {
  newMatrix = [];
  for (let i = 0; i < matrix; i += 1) {
    row = [];
    for (let j = 0; j < matrix; j += 1) {
      if (i === 0) {
        row.push('n');
      } else {
        row.push('1');
      }
    };
    newMatrix.push(row);
  };
  return newMatrix;
}

function makeWithParticleP(matrix) {
  newMatrix = [];
  for (let i = 0; i < matrix; i += 1) {
    row = [];
    for (let j = 0; j < matrix; j += 1) {
      if (i === 0) {
        row.push('p');
      } else if ((i === (matrix - 1) && (j === (matrix - 1)))) {
        row.push('1');
      } else if ((i === (matrix - 2) && (j === (matrix - 2)))) {
        row.push('p');
      } else if ((i === (matrix - 1))) {
        row.push('p');
      } else if ((j === (matrix - 1)) || (j === 0)) {
        row.push('p');
      } else {
        row.push('1');
      }
    };
    newMatrix.push(row);
  };
  return newMatrix;
}

function makeWithParticleE(matrix) {
  newMatrix = [];
  for (let i = 0; i < matrix; i += 1) {
    row = [];
    for (let j = 0; j < matrix; j += 1) {
      if (i === 0) {
        row.push('e');
      } else if (j === (matrix - 1)) {
        row.push('e');
      } else {
        row.push('1');
      }
    };
    newMatrix.push(row);
  };
  return newMatrix;
}

function makeWithoutParticle(matrix) {
  newMatrix = [];
  for (let i = 0; i < matrix; i += 1) {
    row = [];
    for (let j = 0; j < matrix; j += 1) {
      row.push('1');
    }
    newMatrix.push(row);
  }
  return newMatrix;
}

console.log(makeMatrix('p', 6));
