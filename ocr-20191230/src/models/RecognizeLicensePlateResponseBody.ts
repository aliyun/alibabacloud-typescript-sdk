// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeLicensePlateResponseBodyDataPlatesPositions extends $dara.Model {
  /**
   * @example
   * 466
   */
  x?: number;
  /**
   * @example
   * 293
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

export class RecognizeLicensePlateResponseBodyDataPlatesRoi extends $dara.Model {
  /**
   * @example
   * 53
   */
  h?: number;
  /**
   * @example
   * 141
   */
  w?: number;
  /**
   * @example
   * 294
   */
  x?: number;
  /**
   * @example
   * 256
   */
  y?: number;
  static names(): { [key: string]: string } {
    return {
      h: 'H',
      w: 'W',
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      h: 'number',
      w: 'number',
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

export class RecognizeLicensePlateResponseBodyDataPlates extends $dara.Model {
  /**
   * @example
   * 0.99745339155197144
   */
  confidence?: number;
  plateNumber?: string;
  plateType?: string;
  /**
   * @example
   * 1
   */
  plateTypeConfidence?: number;
  positions?: RecognizeLicensePlateResponseBodyDataPlatesPositions[];
  roi?: RecognizeLicensePlateResponseBodyDataPlatesRoi;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      plateNumber: 'PlateNumber',
      plateType: 'PlateType',
      plateTypeConfidence: 'PlateTypeConfidence',
      positions: 'Positions',
      roi: 'Roi',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      plateNumber: 'string',
      plateType: 'string',
      plateTypeConfidence: 'number',
      positions: { 'type': 'array', 'itemType': RecognizeLicensePlateResponseBodyDataPlatesPositions },
      roi: RecognizeLicensePlateResponseBodyDataPlatesRoi,
    };
  }

  validate() {
    if(Array.isArray(this.positions)) {
      $dara.Model.validateArray(this.positions);
    }
    if(this.roi && typeof (this.roi as any).validate === 'function') {
      (this.roi as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponseBodyData extends $dara.Model {
  plates?: RecognizeLicensePlateResponseBodyDataPlates[];
  static names(): { [key: string]: string } {
    return {
      plates: 'Plates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plates: { 'type': 'array', 'itemType': RecognizeLicensePlateResponseBodyDataPlates },
    };
  }

  validate() {
    if(Array.isArray(this.plates)) {
      $dara.Model.validateArray(this.plates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeLicensePlateResponseBody extends $dara.Model {
  data?: RecognizeLicensePlateResponseBodyData;
  /**
   * @example
   * 3F10DAC3-CF4A-487C-BF33-3B8EB9AA12F2
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
      data: RecognizeLicensePlateResponseBodyData,
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

