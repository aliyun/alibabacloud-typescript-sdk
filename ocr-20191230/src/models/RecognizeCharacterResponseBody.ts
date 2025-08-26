// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeCharacterResponseBodyDataResultsTextRectangles extends $dara.Model {
  /**
   * @example
   * -65
   */
  angle?: number;
  /**
   * @example
   * 409
   */
  height?: number;
  /**
   * @example
   * 511
   */
  left?: number;
  /**
   * @example
   * 150
   */
  top?: number;
  /**
   * @example
   * 77
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      height: 'number',
      left: 'number',
      top: 'number',
      width: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBodyDataResults extends $dara.Model {
  /**
   * @example
   * 0.99
   */
  probability?: number;
  text?: string;
  textRectangles?: RecognizeCharacterResponseBodyDataResultsTextRectangles;
  static names(): { [key: string]: string } {
    return {
      probability: 'Probability',
      text: 'Text',
      textRectangles: 'TextRectangles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      probability: 'number',
      text: 'string',
      textRectangles: RecognizeCharacterResponseBodyDataResultsTextRectangles,
    };
  }

  validate() {
    if(this.textRectangles && typeof (this.textRectangles as any).validate === 'function') {
      (this.textRectangles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBodyData extends $dara.Model {
  results?: RecognizeCharacterResponseBodyDataResults[];
  static names(): { [key: string]: string } {
    return {
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      results: { 'type': 'array', 'itemType': RecognizeCharacterResponseBodyDataResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeCharacterResponseBody extends $dara.Model {
  data?: RecognizeCharacterResponseBodyData;
  /**
   * @example
   * 7A9BC7FE-2D42-57AF-93BC-09A229DD2F1D
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
      data: RecognizeCharacterResponseBodyData,
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

