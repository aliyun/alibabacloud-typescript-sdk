// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyResponseBodyResultObjectVlResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Qwen explanation is successful. Valid values:
   * 
   * - true: Successful.
   * - false: Failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The content of the Qwen explanation.
   * 
   * @example
   * {"Does this image have obvious Photoshop features":0,"Is the image a normal business photo":1,"Does the image contain the words 58, Meituan, or Dianping":0,"Does this image contain website information":0,"Is the business scene in the image a hotel":0}
   */
  vlContent?: string;
  static names(): { [key: string]: string } {
    return {
      success: 'Success',
      vlContent: 'VlContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      success: 'boolean',
      vlContent: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The other information in JSON format.
   * 
   * @example
   * {
   * 
   * "sameBackgroundDetail": {
   * 
   * // The request ID of the original image for the similar background
   * 
   * "originalRequestId": "130A2C10-B9EE-4D84-88E3-5384FF03****";
   * 
   * // The merchant ID of the original image request for the similar background
   * 
   * "originalMerchantId": "xxxxxxxx"
   * 
   * }
   * 
   * }
   */
  materialInfo?: string;
  /**
   * @remarks
   * The OCR result.
   * 
   * @example
   * {
   *    "certNo":"20216*********",
   *   "certType":"Primary School Teacher Qualification",
   *    "gender":"Male",
   *    "subject":"Fine Arts",
   *     "name":"Li**",
   *     "ext_info":"{}",
   *     "birthDate":"1998-07-28",
   *     "idNo":"620************",
   *     "certOrg":""
   * }
   */
  ocrInfo?: string;
  /**
   * @remarks
   * The risk result. Valid values:
   * 
   * - **0**: Low risk.
   * - **1**: High risk.
   * - ****2****: Suspicious.
   * 
   * @example
   * 1
   */
  result?: string;
  /**
   * @remarks
   * The map of risk scores.
   */
  riskScore?: { [key: string]: string };
  /**
   * @remarks
   * The risk tags. Multiple tags are separated by commas (,). Valid values:
   * 
   * - PS: The image is photoshopped.
   * - SCREEN_PHOTO: The image is a photo of a screen.
   * - SCREENSHOT: The image is a screenshot.
   * - WATERMARK: The image contains a watermark.
   * - COLOR_PRINT: The image is a color print or copy.
   * - WEB_IMAGE: The image is a web image.
   * - SAME_FACE: The face is similar to another face.
   * - SAME_BACKGROUND: The background is similar to another background.
   * 
   * @example
   * PS,SCREEN_PHOTO
   */
  riskTag?: string;
  /**
   * @remarks
   * The authoritative verification details.
   * 
   * @example
   * **
   */
  verifyDetail?: string;
  /**
   * @remarks
   * The authoritative verification result.
   * 
   * @example
   * *
   */
  verifyResult?: string;
  /**
   * @remarks
   * The Qwen explanation.
   */
  vlResult?: CredentialVerifyResponseBodyResultObjectVlResult;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      ocrInfo: 'OcrInfo',
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
      verifyDetail: 'VerifyDetail',
      verifyResult: 'VerifyResult',
      vlResult: 'VlResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      ocrInfo: 'string',
      result: 'string',
      riskScore: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      riskTag: 'string',
      verifyDetail: 'string',
      verifyResult: 'string',
      vlResult: CredentialVerifyResponseBodyResultObjectVlResult,
    };
  }

  validate() {
    if(this.riskScore) {
      $dara.Model.validateMap(this.riskScore);
    }
    if(this.vlResult && typeof (this.vlResult as any).validate === 'function') {
      (this.vlResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success, and other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
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
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: CredentialVerifyResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      resultObject: 'ResultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resultObject: CredentialVerifyResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

