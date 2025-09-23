// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class DetectIPCObjectResponseBodyDataElements extends $dara.Model {
  box?: number[];
  /**
   * @example
   * 0.7138671875
   */
  score?: number;
  /**
   * @example
   * 0.8566723958333333
   */
  targetRate?: number;
  /**
   * @example
   * DOG
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      box: 'Box',
      score: 'Score',
      targetRate: 'TargetRate',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      box: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      targetRate: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.box)) {
      $dara.Model.validateArray(this.box);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectIPCObjectResponseBodyData extends $dara.Model {
  elements?: DetectIPCObjectResponseBodyDataElements[];
  /**
   * @example
   * 1200
   */
  height?: number;
  /**
   * @example
   * 1600
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectIPCObjectResponseBodyDataElements },
      height: 'number',
      width: 'number',
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

export class DetectIPCObjectResponseBody extends $dara.Model {
  data?: DetectIPCObjectResponseBodyData;
  /**
   * @example
   * 7AE23740-A3E5-5607-8E10-895DCBD4C260
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
      data: DetectIPCObjectResponseBodyData,
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

