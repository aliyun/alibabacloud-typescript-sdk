// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceLivenessResponseBodyResultExtFaceInfo extends $dara.Model {
  /**
   * @remarks
   * The predicted age of the person in the image. The prediction may fail, resulting in an empty value.
   * 
   * @example
   * 18
   */
  faceAge?: number;
  /**
   * @remarks
   * Indicates whether a presentation attack was detected on the captured face. Y means an attack was detected. N means no attack was detected.
   * 
   * @example
   * Y
   */
  faceAttack?: string;
  /**
   * @remarks
   * The predicted gender of the person in the image. The prediction may fail, resulting in an empty value.
   * 
   * - **M**: Male
   * 
   * - **F**: Female
   * 
   * @example
   * M
   */
  faceGender?: string;
  /**
   * @remarks
   * Optional. The quality score of the live face. The value ranges from 0 to 100.
   * 
   * @example
   * 87.19
   */
  faceQualityScore?: number;
  /**
   * @remarks
   * Optional. Indicates whether the face is occluded. Y means the face is occluded. N means the face is not occluded.
   * 
   * @example
   * Y
   */
  occlusionResult?: string;
  static names(): { [key: string]: string } {
    return {
      faceAge: 'FaceAge',
      faceAttack: 'FaceAttack',
      faceGender: 'FaceGender',
      faceQualityScore: 'FaceQualityScore',
      occlusionResult: 'OcclusionResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAge: 'number',
      faceAttack: 'string',
      faceGender: 'string',
      faceQualityScore: 'number',
      occlusionResult: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceLivenessResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The results of the passive liveness detection. The value is in the JSON format. For more information, see [ExtFaceInfo](https://www.alibabacloud.com/help/en/ekyc/latest/cadqvlft48igbpdc?spm=a2c63.p38356.0.i54#5ff42f7274agz).
   */
  extFaceInfo?: FaceLivenessResponseBodyResultExtFaceInfo;
  /**
   * @remarks
   * The authentication result. Valid values:
   * 
   * - Y: The authentication is passed.
   * 
   * - N: The authentication is not passed.
   * 
   * @example
   * N
   */
  passed?: string;
  /**
   * @remarks
   * The code that corresponds to the verification result. For more information, see [ResultObject.SubCode error codes](https://www.alibabacloud.com/help/en/ekyc/latest/cadqvlft48igbpdc?spm=a2c63.p38356.0.i54#5ff3e16174tl2).
   * 
   * @example
   * 205
   */
  subCode?: string;
  /**
   * @remarks
   * The transaction ID.
   * 
   * @example
   * 08573be80f944d95ac812e019e3655a8
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
      extFaceInfo: FaceLivenessResponseBodyResultExtFaceInfo,
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

export class FaceLivenessResponseBody extends $dara.Model {
  /**
   * @remarks
   * [The response code.](https://www.alibabacloud.com/help/en/ekyc/latest/cadqvlft48igbpdc?spm=a2c63.p38356.0.i54#3d0ed52f967g6)
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * A detailed description of the response code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 42EA58CA-5DF4-55D5-82C4-5E7A40DA62BA
   */
  requestId?: string;
  /**
   * @remarks
   * Result object
   */
  result?: FaceLivenessResponseBodyResult;
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
      result: FaceLivenessResponseBodyResult,
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

