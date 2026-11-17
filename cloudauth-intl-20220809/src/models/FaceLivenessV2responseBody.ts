// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessV2ResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @remarks
   * The predicted reference age of the face. If the prediction fails, no value is returned.
   * 
   * @example
   * 18
   */
  faceAge?: number;
  /**
   * @remarks
   * The liveness detection result. Valid values: Y (attack) and N (normal).
   * 
   * @example
   * Y
   */
  faceAttack?: string;
  /**
   * @remarks
   * Detects the facial attributes of the primary face in the input image. The primary face is the one closest to the camera, with the largest facial area, and in focus. The detection result is returned as a string for downstream processing.
   * 
   * The returned fields are defined as follows:
   * 
   * **gender**: the gender of the primary person. A value of 1 indicates male, and 0 indicates female.
   * 
   * **glasses**: whether the primary person is wearing glasses. A value of 1 indicates that glasses are detected, and 0 indicates that glasses are not detected.
   * 
   * **hat**: whether the primary person is wearing a hat (including headscarves and veils). A value of 1 indicates that a hat is detected, and 0 indicates that a hat is not detected.
   * 
   * **mask**: whether the primary person is wearing a mask. A value of 1 indicates that a mask is detected, and 0 indicates that a mask is not detected.
   * 
   * **tattoo**: whether the primary person has visible tattoos. A value of 1 indicates that a tattoo is detected, and 0 indicates that a tattoo is not detected.
   * 
   * **smoking**: whether the primary person is smoking. A value of 1 indicates that smoking is detected, and 0 indicates that smoking is not detected.
   * 
   * **others**: whether other people are present besides the primary person. A value of 1 indicates that other people are detected, and 0 indicates that other people are not detected.
   * 
   * **env**: the environment where the primary person is located, such as an office, factory, hospital, or vehicle. Valid values: office, hospital, factory, vehical, and other.
   * 
   * **expression**: whether the primary person has an exaggerated expression (facial expressions that significantly deviate from a natural or calm state). A value of 1 indicates that an exaggerated expression is detected, and 0 indicates that an exaggerated expression is not detected.
   * 
   * **age**: the actual age of the primary person in years.
   * 
   * @example
   * {
   *         gender: 1
   *         glasses: 0
   *         hat: 1
   *         mask: 1
   *         tattoo: 0
   *         smoking: 0
   *         others: 1
   *         env：office
   *         expression：1
   *         age：16
   * }
   */
  faceAttributeInfo?: string;
  /**
   * @remarks
   * The predicted gender of the face in the image. If the prediction fails, no value is returned. Valid values:
   * - M: male
   * - F: female
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * The liveness face quality score. Valid values: 0 to 100. A larger value indicates better quality.
   * 
   * @example
   * 79.04
   */
  faceQualityScore?: number;
  /**
   * @remarks
   * The algorithm score for illumination in the quality judgment sub-dimension. Valid values: 0 to 100. A larger value indicates better quality.
   * 
   * @example
   * 97.43
   */
  illuminationScore?: number;
  /**
   * @remarks
   * The algorithm score for key area occlusion in the quality judgment sub-dimension. Valid values: 0 to 100. A larger value indicates better quality.
   * 
   * @example
   * 100
   */
  kaOcclusionScore?: number;
  /**
   * @remarks
   * Indicates whether the face is occluded. A value of Y indicates that the face is occluded. A value of N indicates that the face is not occluded.
   * 
   * @example
   * Y
   */
  occlusionResult?: string;
  /**
   * @remarks
   * The algorithm score for occlusion in the quality judgment sub-dimension. Valid values: 0 to 100. A larger value indicates better quality.
   * 
   * @example
   * 50.26
   */
  occlusionScore?: number;
  /**
   * @remarks
   * The image sharpness score in the quality judgment sub-dimension. Valid values: 0 to 100. A larger value indicates better quality.
   * 
   * @example
   * 60.78
   */
  sharpnessScore?: number;
  static names(): { [key: string]: string } {
    return {
      faceAge: 'FaceAge',
      faceAttack: 'FaceAttack',
      faceAttributeInfo: 'FaceAttributeInfo',
      faceGender: 'FaceGender',
      faceQualityScore: 'FaceQualityScore',
      illuminationScore: 'IlluminationScore',
      kaOcclusionScore: 'KaOcclusionScore',
      occlusionResult: 'OcclusionResult',
      occlusionScore: 'OcclusionScore',
      sharpnessScore: 'SharpnessScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAge: 'number',
      faceAttack: 'string',
      faceAttributeInfo: 'string',
      faceGender: 'string',
      faceQualityScore: 'number',
      illuminationScore: 'number',
      kaOcclusionScore: 'number',
      occlusionResult: 'string',
      occlusionScore: 'number',
      sharpnessScore: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessV2ResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The face result information.
   */
  extFaceInfo?: FaceLivenessV2ResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * Indicates whether the authentication is passed. Valid values:
   * - Y: passed
   * - N: failed
   * 
   * @example
   * Y
   */
  passed?: string;
  /**
   * @remarks
   * The sub-result code.
   * 
   * @example
   * 200
   */
  subCode?: string;
  /**
   * @remarks
   * The unique identifier of the authentication request.
   * 
   * @example
   * hksb7ba1b28130d24e015d694361****
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      extFaceInfo: 'ExtFaceInfo',
      passed: 'Passed',
      subCode: 'SubCode',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extFaceInfo: FaceLivenessV2ResponseBodyResultExtFaceInfo,
      passed: 'string',
      subCode: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    if(this.extFaceInfo && typeof (this.extFaceInfo as any).validate === 'function') {
      (this.extFaceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5E63B760-0ECB-5C07-8503-A65C27876968
   */
  requestId?: string;
  /**
   * @remarks
   * The response result.
   */
  result?: FaceLivenessV2ResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      result: FaceLivenessV2ResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

