// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose extends $dara.Model {
  /**
   * @remarks
   * Pitch angle, in degrees.
   * 
   * @example
   * -1.5683923959732056
   */
  pitchAngle?: number;
  /**
   * @remarks
   * Roll angle, in degrees.
   * 
   * @example
   * 7.163370132446289
   */
  rollAngle?: number;
  /**
   * @remarks
   * Yaw angle, in degrees.
   * 
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
   * @remarks
   * Smile threshold.
   * 
   * @example
   * 95
   */
  threshold?: number;
  /**
   * @remarks
   * Smile score.
   * 
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
   * @remarks
   * Face blur level, with higher values indicating more blurriness. Typically, a value ≥2.0 is considered quite blurry. It is recommended to adjust based on actual business data testing.
   * 
   * @example
   * 0.1419367790222168
   */
  blur?: number;
  /**
   * @remarks
   * A score ranging from 0 to 100. The higher the score, the better the quality. It is recommended to consider a score of 50 or above as acceptable quality.
   * 
   * @example
   * 60
   */
  facequal?: number;
  /**
   * @remarks
   * Whether it is a human face. Values:
   * 
   * - **None**: Not a human face
   * - **Face**: Human face
   * - **Profile**: Profile (head turned left or right by more than 30°)
   * 
   * > If no face is detected, the `faceInfos` in the response will be empty; here, `None` means that a face was detected but is considered to be a cartoon, pet, etc.
   * 
   * @example
   * Face
   */
  facetype?: string;
  /**
   * @remarks
   * Whether wearing glasses. Values:
   * 
   * - **None**: Not wearing glasses
   * - **Wear**: Wearing regular glasses
   * - **Sunglass**: Wearing sunglasses
   * 
   * @example
   * None
   */
  glasses?: string;
  /**
   * @remarks
   * Face pose.
   */
  headpose?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributesHeadpose;
  /**
   * @remarks
   * A score ranging from 0 to 100. The higher the score, the more complete the face. It is recommended to consider a score of 70 or above as acceptable completeness.
   * 
   * @example
   * 70
   */
  integrity?: number;
  /**
   * @remarks
   * Whether wearing a mask. Values:
   * 
   * - Wear: Wearing a mask.
   * - None: Not wearing a mask.
   * 
   * @example
   * Wear
   */
  respirator?: string;
  /**
   * @remarks
   * Whether smiling.
   */
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
   * @remarks
   * Height of the face rectangle.
   * 
   * @example
   * 473
   */
  height?: number;
  /**
   * @remarks
   * Distance from the top-left corner of the face rectangle to the left edge of the original image, in pixels.
   * 
   * @example
   * 354
   */
  left?: number;
  /**
   * @remarks
   * Distance from the top-left corner of the face rectangle to the top edge of the original image, in pixels.
   * 
   * @example
   * 453
   */
  top?: number;
  /**
   * @remarks
   * Width of the face rectangle.
   * 
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
  /**
   * @remarks
   * Face attributes.
   */
  faceAttributes?: DetectFaceAttributesResponseBodyDataFaceInfosFaceAttributesDetectInfoFaceAttributes;
  /**
   * @remarks
   * Position of the face in the original image.
   */
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
  /**
   * @remarks
   * Face detection results.
   */
  faceInfos?: DetectFaceAttributesResponseBodyDataFaceInfos;
  /**
   * @remarks
   * Original image height, in pixels.
   * 
   * @example
   * 1920
   */
  imgHeight?: number;
  /**
   * @remarks
   * Original image width, in pixels.
   * 
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
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: DetectFaceAttributesResponseBodyData;
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * Error.InternalError
   */
  message?: string;
  /**
   * @remarks
   * ID of this request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the response was successful.
   * 
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

