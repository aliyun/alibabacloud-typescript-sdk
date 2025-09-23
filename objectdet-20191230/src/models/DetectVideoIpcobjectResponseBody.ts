// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectVideoIPCObjectResponseBodyDataFramesElements extends $dara.Model {
  /**
   * @example
   * 156
   */
  height?: number;
  /**
   * @example
   * 0.7812
   */
  score?: number;
  /**
   * @example
   * PERSON
   */
  type?: string;
  /**
   * @example
   * 100
   */
  width?: number;
  /**
   * @example
   * 289
   */
  x?: number;
  /**
   * @example
   * 271
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      score: 'Score',
      type: 'Type',
      width: 'Width',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
      score: 'number',
      type: 'string',
      width: 'number',
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

export class DetectVideoIPCObjectResponseBodyDataFrames extends $dara.Model {
  elements?: DetectVideoIPCObjectResponseBodyDataFramesElements[];
  /**
   * @example
   * 6124533574
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectVideoIPCObjectResponseBodyDataFramesElements },
      time: 'number',
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

export class DetectVideoIPCObjectResponseBodyData extends $dara.Model {
  frames?: DetectVideoIPCObjectResponseBodyDataFrames[];
  /**
   * @example
   * 720
   */
  height?: number;
  /**
   * @example
   * oss://viapi-test/viapi-3.0domepic/objectdet/DetectVideoIPCObject/DetectVideoIPCObject4.mp4
   */
  inputFile?: string;
  /**
   * @example
   * 1280
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
      frames: { 'type': 'array', 'itemType': DetectVideoIPCObjectResponseBodyDataFrames },
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

export class DetectVideoIPCObjectResponseBody extends $dara.Model {
  data?: DetectVideoIPCObjectResponseBodyData;
  message?: string;
  /**
   * @example
   * 35B11E1B-800C-4598-B5AA-577E3BDBD917
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
      data: DetectVideoIPCObjectResponseBodyData,
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

