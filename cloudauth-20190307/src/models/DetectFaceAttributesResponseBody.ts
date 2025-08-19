// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose extends $dara.Model {
  /**
   * @example
   * -1.5683923959732056
   */
  pitchAngle?: number;
  /**
   * @example
   * 7.163370132446289
   */
  rollAngle?: number;
  /**
   * @example
   * -6.925303936004639
   */
  yawAngle?: number;
  static names(): { [key: string]: string } {
    return {
      pitchAngle: 'PitchAngle',
      rollAngle: 'RollAngle',
      yawAngle: 'YawAngle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pitchAngle: 'number',
      rollAngle: 'number',
      yawAngle: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling extends $dara.Model {
  /**
   * @example
   * 95
   */
  threshold?: number;
  /**
   * @example
   * 97
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      threshold: 'Threshold',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      threshold: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes extends $dara.Model {
  /**
   * @example
   * 0.1419367790222168
   */
  blur?: number;
  /**
   * @example
   * 60
   */
  facequal?: number;
  /**
   * @example
   * Face
   */
  facetype?: string;
  /**
   * @example
   * None
   */
  glasses?: string;
  headpose?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  /**
   * @example
   * 70
   */
  integrity?: number;
  /**
   * @example
   * Wear
   */
  respirator?: string;
  smiling?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling;
  static names(): { [key: string]: string } {
    return {
      blur: 'Blur',
      facequal: 'Facequal',
      facetype: 'Facetype',
      glasses: 'Glasses',
      headpose: 'Headpose',
      integrity: 'Integrity',
      respirator: 'Respirator',
      smiling: 'Smiling',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blur: 'number',
      facequal: 'number',
      facetype: 'string',
      glasses: 'string',
      headpose: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose,
      integrity: 'number',
      respirator: 'string',
      smiling: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesSmiling,
    };
  }

  validate() {
    if(this.headpose && typeof (this.headpose as any).validate === 'function') {
      (this.headpose as any).validate();
    }
    if(this.smiling && typeof (this.smiling as any).validate === 'function') {
      (this.smiling as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect extends $dara.Model {
  /**
   * @example
   * 473
   */
  height?: number;
  /**
   * @example
   * 354
   */
  left?: number;
  /**
   * @example
   * 453
   */
  top?: number;
  /**
   * @example
   * 473
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

export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo extends $dara.Model {
  faceAttributes?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes;
  faceRect?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect;
  static names(): { [key: string]: string } {
    return {
      faceAttributes: 'FaceAttributes',
      faceRect: 'FaceRect',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributes: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes,
      faceRect: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceRect,
    };
  }

  validate() {
    if(this.faceAttributes && typeof (this.faceAttributes as any).validate === 'function') {
      (this.faceAttributes as any).validate();
    }
    if(this.faceRect && typeof (this.faceRect as any).validate === 'function') {
      (this.faceRect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyDataFaceInfos extends $dara.Model {
  faceAttributesDetectInfo?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo[];
  static names(): { [key: string]: string } {
    return {
      faceAttributesDetectInfo: 'FaceAttributesDetectInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributesDetectInfo: { 'type': 'array', 'itemType': DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfo },
    };
  }

  validate() {
    if(Array.isArray(this.faceAttributesDetectInfo)) {
      $dara.Model.validateArray(this.faceAttributesDetectInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBodyData extends $dara.Model {
  faceInfos?: DetectFaceAttributesResponseBodyDataFaceInfos;
  /**
   * @example
   * 1920
   */
  imgHeight?: number;
  /**
   * @example
   * 1080
   */
  imgWidth?: number;
  static names(): { [key: string]: string } {
    return {
      faceInfos: 'FaceInfos',
      imgHeight: 'ImgHeight',
      imgWidth: 'ImgWidth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceInfos: DetectFaceAttributesResponseBodyDataFaceInfos,
      imgHeight: 'number',
      imgWidth: 'number',
    };
  }

  validate() {
    if(this.faceInfos && typeof (this.faceInfos as any).validate === 'function') {
      (this.faceInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetectFaceAttributesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DetectFaceAttributesResponseBodyData;
  /**
   * @example
   * Error.InternalError
   */
  message?: string;
  /**
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DetectFaceAttributesResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

