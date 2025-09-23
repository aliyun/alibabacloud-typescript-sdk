// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectKitchenAnimalsResponseBodyDataElementsRectangles extends $dara.Model {
  /**
   * @example
   * 64
   */
  height?: number;
  /**
   * @example
   * 292
   */
  left?: number;
  /**
   * @example
   * 1048
   */
  top?: number;
  /**
   * @example
   * 64
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      left: 'Left',
      top: 'Top',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DetectKitchenAnimalsResponseBodyDataElements extends $dara.Model {
  rectangles?: DetectKitchenAnimalsResponseBodyDataElementsRectangles;
  /**
   * @example
   * 0.75105053
   */
  score?: number;
  /**
   * @example
   * mouse
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      rectangles: 'Rectangles',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rectangles: DetectKitchenAnimalsResponseBodyDataElementsRectangles,
      score: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.rectangles && typeof (this.rectangles as any).validate === 'function') {
      (this.rectangles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectKitchenAnimalsResponseBodyData extends $dara.Model {
  elements?: DetectKitchenAnimalsResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectKitchenAnimalsResponseBodyDataElements },
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

export class DetectKitchenAnimalsResponseBody extends $dara.Model {
  data?: DetectKitchenAnimalsResponseBodyData;
  /**
   * @example
   * C306F16F-30E1-54F4-93DF-A52CCF6664D1
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
      data: DetectKitchenAnimalsResponseBodyData,
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

