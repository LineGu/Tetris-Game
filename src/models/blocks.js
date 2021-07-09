const blockCreator = {
    
}




const blocksCreator = {
    rectangle(idx, rotate) {
      const [rowIdx, colIdx] = idx;
  
      return [
        [rowIdx, colIdx],
        [rowIdx + 1, colIdx],
        [rowIdx, colIdx + 1],
        [rowIdx + 1, colIdx + 1],
      ];
    },
  
    line(idx, rotate) {
      const [rowIdx, colIdx] = idx;
  
      if (rotate === 90 || rotate === 270) {
        return [
          [rowIdx - 2, colIdx],
          [rowIdx - 1, colIdx],
          [rowIdx, colIdx],
          [rowIdx + 1, colIdx],
        ];
      }
      return [
        [rowIdx, colIdx],
        [rowIdx + 1, colIdx],
        [rowIdx + 2, colIdx],
        [rowIdx + 3, colIdx],
      ];
    },
  
    cross(idx, rotate) {
      const [rowIdx, colIdx] = idx;
  
      return [
        [rowIdx - 1, colIdx],
        [rowIdx + 1, colIdx],
        [rowIdx, colIdx],
        [rowIdx, colIdx - 1],
        [rowIdx, colIdx + 1],
      ];
    },
  
    halfCross(idx, rotate) {
      const [rowIdx, colIdx] = idx;
  
      if (rotate === 90) {
        return [
          [rowIdx - 1, colIdx + 1],
          [rowIdx, colIdx],
          [rowIdx, colIdx + 1],
          [rowIdx + 1, colIdx + 1],
        ];
      }
  
      if (rotate === 180) {
        return [
          [rowIdx - 1, colIdx - 1],
          [rowIdx - 1, colIdx],
          [rowIdx - 1, colIdx + 1],
          [rowIdx, colIdx],
        ];
      }
  
      if (rotate === 270) {
        return [
          [rowIdx - 1, colIdx - 1],
          [rowIdx, colIdx - 1],
          [rowIdx + 1, colIdx - 1],
          [rowIdx, colIdx],
        ];
      }
  
      return [
        [rowIdx - 1, colIdx],
        [rowIdx, colIdx],
        [rowIdx, colIdx - 1],
        [rowIdx, colIdx + 1],
      ];
    },
  };
  
  const blocks = [
    blocksCreator.rectangle,
    blocksCreator.line,
    blocksCreator.halfCross,
    blocksCreator.cross,
  ];
  
  export default blocks;
  