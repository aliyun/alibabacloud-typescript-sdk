// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IntelligentCompositionResponseBodyDataElements extends $dara.Model {
  /**
   * @example
   * 981
   */
  maxX?: number;
  /**
   * @example
   * 672
   */
  maxY?: number;
  /**
   * @example
   * 43
   */
  minX?: number;
  /**
   * @example
   * 96
   */
  minY?: number;
  /**
   * @example
   * 3.6567564
   */
  score?: number;
  static names(): { [key: string]: string } {
    return {
      maxX: 'MaxX',
      maxY: 'MaxY',
      minX: 'MinX',
      minY: 'MinY',
      score: 'Score',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxX: 'number',
      maxY: 'number',
      minX: 'number',
      minY: 'number',
      score: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IntelligentCompositionResponseBodyData extends $dara.Model {
  elements?: IntelligentCompositionResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': IntelligentCompositionResponseBodyDataElements },
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

export class IntelligentCompositionResponseBody extends $dara.Model {
  data?: IntelligentCompositionResponseBodyData;
  /**
   * @example
   * C1D52018-D67A-46AD-9AAA-031750A6E770
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
      data: IntelligentCompositionResponseBodyData,
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

