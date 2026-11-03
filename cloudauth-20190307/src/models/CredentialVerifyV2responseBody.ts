// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyV2ResponseBodyResultObjectVlResult extends $dara.Model {
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   * 
   * @example
   * -
   */
  success?: boolean;
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   * 
   * @example
   * -
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

export class CredentialVerifyV2ResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The other information in JSON format.
   * 
   * @example
   * {
   * 
   * "sameBackgroundDetail": {
   * 
   * // The request ID of the original image request for the similar background
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
   * The OCR recognition result.
   * >Danger: **[Deprecated]**</danger>
   * 
   * @example
   * {
   *    "certNo":"20216*********",
   *   "certType":"Primary school teacher qualification",
   *    "gender":"Male",
   *    "subject":"Art",
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
   * - 0: low risk
   * - 1: high risk
   * - 2: suspicious
   * 
   * @example
   * 1
   */
  result?: string;
  /**
   * @remarks
   * The risk score map.
   */
  riskScore?: { [key: string]: string };
  /**
   * @remarks
   * The risk tags. Multiple tags are separated by commas (,). Valid values:
   * 
   * - PS: The image is edited by using Photoshop.
   * - SCREEN_PHOTO: The image is a photo of a screen.
   * - SCREENSHOT: The image is a screenshot.
   * - WATERMARK: The image contains a watermark.
   * - SAME_BACKGROUND: The image has a similar background.
   * - ORIGINAL_PHOTO: The image is not an original photo.
   * 
   * @example
   * PS,SCREEN_PHOTO
   */
  riskTag?: string;
  /**
   * @remarks
   * The authoritative verification details.
   * >Danger: **[Deprecated]**</danger>
   * 
   * @example
   * **
   */
  verifyDetail?: string;
  /**
   * @remarks
   * The authoritative verification result.
   * >Danger: **[Deprecated]**</danger>
   * 
   * @example
   * *
   */
  verifyResult?: string;
  /**
   * @remarks
   * This feature has been retired and the parameter no longer takes effect.
   */
  vlResult?: CredentialVerifyV2ResponseBodyResultObjectVlResult;
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
      vlResult: CredentialVerifyV2ResponseBodyResultObjectVlResult,
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

export class CredentialVerifyV2ResponseBody extends $dara.Model {
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
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result information.
   */
  resultObject?: CredentialVerifyV2ResponseBodyResultObject;
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
      resultObject: CredentialVerifyV2ResponseBodyResultObject,
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

