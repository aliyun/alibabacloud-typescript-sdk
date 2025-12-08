// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeExpressionResponseBodyDataElementsFaceRectangle extends $dara.Model {
  /**
   * @example
   * 174
   */
  height?: number;
  /**
   * @example
   * 196
   */
  left?: number;
  /**
   * @example
   * 41
   */
  top?: number;
  /**
   * @example
   * 121
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

export class RecognizeExpressionResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * surprise
   */
  expression?: string;
  /**
   * @example
   * 0.99651491641998291
   */
  faceProbability?: number;
  faceRectangle?: RecognizeExpressionResponseBodyDataElementsFaceRectangle;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      faceProbability: 'FaceProbability',
      faceRectangle: 'FaceRectangle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      faceProbability: 'number',
      faceRectangle: RecognizeExpressionResponseBodyDataElementsFaceRectangle,
    };
  }

  validate() {
    if(this.faceRectangle && typeof (this.faceRectangle as any).validate === 'function') {
      (this.faceRectangle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeExpressionResponseBodyData extends $dara.Model {
  elements?: RecognizeExpressionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': RecognizeExpressionResponseBodyDataElements },
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

export class RecognizeExpressionResponseBody extends $dara.Model {
  data?: RecognizeExpressionResponseBodyData;
  /**
   * @example
   * E1C4C576-1799-4079-A934-15BC406A54EF
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
      data: RecognizeExpressionResponseBodyData,
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

