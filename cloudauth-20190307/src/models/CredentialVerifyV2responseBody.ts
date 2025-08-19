// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyV2ResponseBodyResultObjectVlResult extends $dara.Model {
  /**
   * @remarks
   * Qwen interpretation success indicator
   * 
   * true: Success
   * 
   * false: Failure
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Image understanding result:
   * 
   * - When PromptModel is DEFAULT, the output format refers to the example on the right.
   * 
   * - When PromptModel is CUSTOM, the output format follows the agreed format of the Prompt.
   * 
   * @example
   * {
   *  "CHK_DOOR_PHOTO":1, -- 是否门头照 1：是 0：否
   *  "CHK_INTERIOR_PHOTO":0, -- 是否内景照 1：是 0：否
   *  "CHK_COUNTER_PHOTO":0 -- 是否柜台照 1：是 0：否
   * }
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
   * Additional information in JSON format.
   * 
   * @example
   * {
   * 
   * "sameBackgroundDetail": {
   * 
   * // 相似背景对于的原始图请求RequestId
   * 
   * "originalRequestId": "130A2C10-B9EE-4D84-88E3-5384FF03****";
   * 
   * // 相似背景对于的原始图请求商户ID
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
   * OCR recognition result.
   * 
   * @example
   * {
   *    "certNo":"20216*********",
   *   "certType":"小学教师资格",
   *    "gender":"男",
   *    "subject":"美术",
   *     "name":"李**",
   *     "ext_info":"{}",
   *     "birthDate":"1998-07-28",
   *     "idNo":"620************",
   *     "certOrg":""
   * }
   */
  ocrInfo?: string;
  /**
   * @remarks
   * Risk result
   * 
   * - 0: Low risk
   * - 1: High risk
   * - 2: Suspicious
   * 
   * @example
   * 1
   */
  result?: string;
  /**
   * @remarks
   * Risk score map.
   */
  riskScore?: { [key: string]: string };
  /**
   * @remarks
   * Risk tags, separated by commas (,), including:
   * 
   * - PS: Image manipulation.
   * - SCREEN_PHOTO: Screen recapture.
   * - SCREENSHOT: Screenshot.
   * - WATERMARK: Watermark.
   * - SAME_BACKGROUND: Similar background.
   * - ORIGINAL_PHOTO: Not the original image
   * 
   * @example
   * PS,SCREEN_PHOTO
   */
  riskTag?: string;
  /**
   * @remarks
   * Authority verification details.
   * 
   * @example
   * **
   */
  verifyDetail?: string;
  /**
   * @remarks
   * Authority verification result
   * 
   * @example
   * *
   */
  verifyResult?: string;
  /**
   * @remarks
   * Qwen interpretation.
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
   * Return code: 200 for success, others for failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Return message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
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

