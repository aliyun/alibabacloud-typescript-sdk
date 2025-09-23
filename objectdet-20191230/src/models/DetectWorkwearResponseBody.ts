// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectWorkwearResponseBodyDataElementsPropertyProbability extends $dara.Model {
  /**
   * @example
   * 0.00036084422
   */
  no?: number;
  /**
   * @example
   * 0
   */
  threshold?: number;
  /**
   * @example
   * 0.0006906331
   */
  unknown?: number;
  /**
   * @example
   * 0.9989485
   */
  yes?: number;
  static names(): { [key: string]: string } {
    return {
      no: 'No',
      threshold: 'Threshold',
      unknown: 'Unknown',
      yes: 'Yes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      no: 'number',
      threshold: 'number',
      unknown: 'number',
      yes: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyDataElementsProperty extends $dara.Model {
  /**
   * @example
   * hat
   */
  label?: string;
  probability?: DetectWorkwearResponseBodyDataElementsPropertyProbability;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      probability: 'Probability',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      probability: DetectWorkwearResponseBodyDataElementsPropertyProbability,
    };
  }

  validate() {
    if(this.probability && typeof (this.probability as any).validate === 'function') {
      (this.probability as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyDataElementsRectangles extends $dara.Model {
  /**
   * @example
   * 96
   */
  height?: number;
  /**
   * @example
   * 1067
   */
  left?: number;
  /**
   * @example
   * 426
   */
  top?: number;
  /**
   * @example
   * 88
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

export class DetectWorkwearResponseBodyDataElements extends $dara.Model {
  property?: DetectWorkwearResponseBodyDataElementsProperty[];
  rectangles?: DetectWorkwearResponseBodyDataElementsRectangles;
  /**
   * @example
   * 0.63913465
   */
  score?: number;
  /**
   * @example
   * 1
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      rectangles: 'Rectangles',
      score: 'Score',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: { 'type': 'array', 'itemType': DetectWorkwearResponseBodyDataElementsProperty },
      rectangles: DetectWorkwearResponseBodyDataElementsRectangles,
      score: 'number',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.property)) {
      $dara.Model.validateArray(this.property);
    }
    if(this.rectangles && typeof (this.rectangles as any).validate === 'function') {
      (this.rectangles as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectWorkwearResponseBodyData extends $dara.Model {
  elements?: DetectWorkwearResponseBodyDataElements[];
  static names(): { [key: string]: string } {
    return {
      elements: 'Elements',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elements: { 'type': 'array', 'itemType': DetectWorkwearResponseBodyDataElements },
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

export class DetectWorkwearResponseBody extends $dara.Model {
  data?: DetectWorkwearResponseBodyData;
  /**
   * @example
   * 16CA8094-D7BC-51D4-8D55-6AC59AB20E0B
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
      data: DetectWorkwearResponseBodyData,
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

