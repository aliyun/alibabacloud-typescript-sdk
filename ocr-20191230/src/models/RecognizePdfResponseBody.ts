// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizePdfResponseBodyDataWordsInfoPositions extends $dara.Model {
  /**
   * @example
   * 863
   */
  x?: number;
  /**
   * @example
   * 43
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfResponseBodyDataWordsInfo extends $dara.Model {
  /**
   * @example
   * 0
   */
  angle?: number;
  /**
   * @example
   * 16
   */
  height?: number;
  positions?: RecognizePdfResponseBodyDataWordsInfoPositions[];
  /**
   * @example
   * 205
   */
  width?: number;
  word?: string;
  /**
   * @example
   * 863
   */
  x?: number;
  /**
   * @example
   * 46
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      height: 'Height',
      positions: 'Positions',
      width: 'Width',
      word: 'Word',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      positions: { 'type': 'array', 'itemType': RecognizePdfResponseBodyDataWordsInfoPositions },
      width: 'number',
      word: 'string',
      x: 'number',
      y: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.positions)) {
      $dara.Model.validateArray(this.positions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfResponseBodyData extends $dara.Model {
  /**
   * @example
   * 0
   */
  angle?: number;
  /**
   * @example
   * 788
   */
  height?: number;
  /**
   * @example
   * 610
   */
  orgHeight?: number;
  /**
   * @example
   * 394
   */
  orgWidth?: number;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 1220
   */
  width?: number;
  wordsInfo?: RecognizePdfResponseBodyDataWordsInfo[];
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      height: 'Height',
      orgHeight: 'OrgHeight',
      orgWidth: 'OrgWidth',
      pageIndex: 'PageIndex',
      width: 'Width',
      wordsInfo: 'WordsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      orgHeight: 'number',
      orgWidth: 'number',
      pageIndex: 'number',
      width: 'number',
      wordsInfo: { 'type': 'array', 'itemType': RecognizePdfResponseBodyDataWordsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.wordsInfo)) {
      $dara.Model.validateArray(this.wordsInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizePdfResponseBody extends $dara.Model {
  data?: RecognizePdfResponseBodyData;
  /**
   * @example
   * CD9A9659-ABEE-4A7D-837F-9FDF40879A97
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizePdfResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

