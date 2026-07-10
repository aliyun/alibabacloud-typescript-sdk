// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyResponseBodyResultObjectVlResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Qwen interpretation is successful. Valid values:
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
   * The Qwen interpretation content.
   * 
   * @example
   * {\\"这张图有没有明显的PS特征\\":0,\\"图片是否为正常经营照片\\":1,\\"图片中有没有58、美团、大众点评字样\\":0,\\"这张图有没有网站信息\\":0,\\"图片经营的场景是否为酒店\\":0}
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
   * The additional information in JSON format.
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
   * The OCR recognition result.
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
   * The risk result. Valid values:
   * 
   * - **0**: Low risk.
   * - **1**: High risk.
   * - **2**: Suspicious.
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
   * The risk tags, separated by commas (,). Valid values:
   * 
   * - PS: image manipulation.
   * - SCREEN_PHOTO: screen recapture.
   * - SCREENSHOT: screenshot.
   * - WATERMARK: watermark.
   * - COLOR_PRINT: color print copy.
   * - WEB_IMAGE: web image.
   * - SAME_FACE: similar face.
   * - SAME_BACKGROUND: similar background.
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
   * The Qwen interpretation.
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
   * The response code. A value of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
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
   * The request ID.
   * 
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
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

