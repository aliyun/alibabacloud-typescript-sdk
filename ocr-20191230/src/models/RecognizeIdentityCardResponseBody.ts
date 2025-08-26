// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeIdentityCardResponseBodyDataBackResult extends $dara.Model {
  /**
   * @example
   * 19800101
   */
  endDate?: string;
  issue?: string;
  /**
   * @example
   * 19970101
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      issue: 'Issue',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      issue: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResultCardAreas extends $dara.Model {
  /**
   * @example
   * 40
   */
  x?: number;
  /**
   * @example
   * 81
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices extends $dara.Model {
  /**
   * @example
   * 429.46124267578125
   */
  x?: number;
  /**
   * @example
   * 164.23321533203125
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter extends $dara.Model {
  /**
   * @example
   * 475.59390258789062
   */
  x?: number;
  /**
   * @example
   * 225.20643615722656
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize extends $dara.Model {
  /**
   * @example
   * 97.063156127929688
   */
  height?: number;
  /**
   * @example
   * 118.16333770751953
   */
  width?: number;
  static names(): { [key: string]: string } {
    return {
      height: 'Height',
      width: 'Width',
    };
  }

  static types(): { [key: string]: any } {
    return {
      height: 'number',
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

export class RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle extends $dara.Model {
  /**
   * @example
   * -87.710586547851562
   */
  angle?: number;
  center?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter;
  size?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize;
  static names(): { [key: string]: string } {
    return {
      angle: 'Angle',
      center: 'Center',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      angle: 'number',
      center: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleCenter,
      size: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangleSize,
    };
  }

  validate() {
    if(this.center && typeof (this.center as any).validate === 'function') {
      (this.center as any).validate();
    }
    if(this.size && typeof (this.size as any).validate === 'function') {
      (this.size as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyDataFrontResult extends $dara.Model {
  address?: string;
  /**
   * @example
   * 19960111
   */
  birthDate?: string;
  cardAreas?: RecognizeIdentityCardResponseBodyDataFrontResultCardAreas[];
  faceRectVertices?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices[];
  faceRectangle?: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle;
  gender?: string;
  /**
   * @example
   * 310228199601115411
   */
  IDNumber?: string;
  name?: string;
  nationality?: string;
  static names(): { [key: string]: string } {
    return {
      address: 'Address',
      birthDate: 'BirthDate',
      cardAreas: 'CardAreas',
      faceRectVertices: 'FaceRectVertices',
      faceRectangle: 'FaceRectangle',
      gender: 'Gender',
      IDNumber: 'IDNumber',
      name: 'Name',
      nationality: 'Nationality',
    };
  }

  static types(): { [key: string]: any } {
    return {
      address: 'string',
      birthDate: 'string',
      cardAreas: { 'type': 'array', 'itemType': RecognizeIdentityCardResponseBodyDataFrontResultCardAreas },
      faceRectVertices: { 'type': 'array', 'itemType': RecognizeIdentityCardResponseBodyDataFrontResultFaceRectVertices },
      faceRectangle: RecognizeIdentityCardResponseBodyDataFrontResultFaceRectangle,
      gender: 'string',
      IDNumber: 'string',
      name: 'string',
      nationality: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.cardAreas)) {
      $dara.Model.validateArray(this.cardAreas);
    }
    if(Array.isArray(this.faceRectVertices)) {
      $dara.Model.validateArray(this.faceRectVertices);
    }
    if(this.faceRectangle && typeof (this.faceRectangle as any).validate === 'function') {
      (this.faceRectangle as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBodyData extends $dara.Model {
  backResult?: RecognizeIdentityCardResponseBodyDataBackResult;
  frontResult?: RecognizeIdentityCardResponseBodyDataFrontResult;
  static names(): { [key: string]: string } {
    return {
      backResult: 'BackResult',
      frontResult: 'FrontResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backResult: RecognizeIdentityCardResponseBodyDataBackResult,
      frontResult: RecognizeIdentityCardResponseBodyDataFrontResult,
    };
  }

  validate() {
    if(this.backResult && typeof (this.backResult as any).validate === 'function') {
      (this.backResult as any).validate();
    }
    if(this.frontResult && typeof (this.frontResult as any).validate === 'function') {
      (this.frontResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeIdentityCardResponseBody extends $dara.Model {
  data?: RecognizeIdentityCardResponseBodyData;
  /**
   * @example
   * D3F5BA69-79C4-46A4-B02B-58C4EEBC4C33
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
      data: RecognizeIdentityCardResponseBodyData,
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

