// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeVideoCharacterResponseBodyDataFramesElementsTextRectangles extends $dara.Model {
  /**
   * @example
   * -90
   */
  angle?: number;
  /**
   * @example
   * 213
   */
  height?: number;
  /**
   * @example
   * 213
   */
  left?: number;
  /**
   * @example
   * 98
   */
  top?: number;
  /**
   * @example
   * 46
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

export class RecognizeVideoCharacterResponseBodyDataFramesElements extends $dara.Model {
  /**
   * @example
   * 0.99
   */
  score?: number;
  text?: string;
  textRectangles?: RecognizeVideoCharacterResponseBodyDataFramesElementsTextRectangles[];
  static names(): { [key: string]: string } {
    return {
      score: 'Score',
      text: 'Text',
      textRectangles: 'TextRectangles',
    };
  }

  static types(): { [key: string]: any } {
    return {
      score: 'number',
      text: 'string',
      textRectangles: { 'type': 'array', 'itemType': RecognizeVideoCharacterResponseBodyDataFramesElementsTextRectangles },
    };
  }

  validate() {
    if(Array.isArray(this.textRectangles)) {
      $dara.Model.validateArray(this.textRectangles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBodyDataFrames extends $dara.Model {
  elements?: RecognizeVideoCharacterResponseBodyDataFramesElements[];
  /**
   * @example
   * 6124533574
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeVideoCharacterResponseBodyDataFramesElements },
      timestamp: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.elements)) {
      $dara.Model.validateArray(this.elements);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBodyData extends $dara.Model {
  frames?: RecognizeVideoCharacterResponseBodyDataFrames[];
  /**
   * @example
   * 1080
   */
  height?: number;
  /**
   * @example
   * oss://my-bucket/a/b/c.mp4
   */
  inputFile?: string;
  /**
   * @example
   * 1920
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      frames: 'Frames',
      height: 'Height',
      inputFile: 'InputFile',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      frames: { 'type': 'array', 'itemType': RecognizeVideoCharacterResponseBodyDataFrames },
      height: 'number',
      inputFile: 'string',
      width: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.frames)) {
      $dara.Model.validateArray(this.frames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeVideoCharacterResponseBody extends $dara.Model {
  data?: RecognizeVideoCharacterResponseBodyData;
  message?: string;
  /**
   * @example
   * D3F5BA69-79C4-46A4-B02B-58C4EEBC4C33
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeVideoCharacterResponseBodyData,
      message: 'string',
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

