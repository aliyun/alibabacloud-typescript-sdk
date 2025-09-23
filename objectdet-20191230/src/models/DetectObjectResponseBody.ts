// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectObjectResponseBodyDataElements extends $dara.Model {
  boxes?: number[];
  /**
   * @example
   * 0.266
   */
  score?: number;
  /**
   * @example
   * chair
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      boxes: 'Boxes',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      boxes: { 'type': 'array', 'itemType': 'number' },
      score: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.boxes)) {
      $dara.Model.validateArray(this.boxes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectObjectResponseBodyData extends $dara.Model {
  elements?: DetectObjectResponseBodyDataElements[];
  /**
   * @example
   * 300
   */
  height?: number;
  /**
   * @example
   * 533
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
      elements: { 'type': 'array', 'itemType': DetectObjectResponseBodyDataElements },
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

export class DetectObjectResponseBody extends $dara.Model {
  data?: DetectObjectResponseBodyData;
  /**
   * @example
   * 6EF97B44-2763-4EAD-8737-FB9F5EE25FE2
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
      data: DetectObjectResponseBodyData,
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

