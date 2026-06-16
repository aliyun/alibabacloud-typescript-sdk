// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyIntlResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The additional information in JSON format.
   * 
   * @example
   * {
   *  "sameBackgroundDetail": {
   *  // 相似背景对于的原始图请求RequestId
   *  "originalRequestId": "130A2C10-B9EE-4D84-88E3-5384FF03****";
   *  // 相似背景对于的原始图请求商户ID 
   *  "originalMerchantId": "xxxxxxxx" 
   *  }
   * }
   */
  materialInfo?: string;
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
   * - PS: Image has been edited with photo editing software.
   * - SCREEN_PHOTO: Photo taken from a screen.
   * - SCREENSHOT: Screenshot.
   * - ORIGINAL_PHOTO: Non-original image.
   * 
   * @example
   * PS
   */
  riskTag?: string;
  static names(): { [key: string]: string } {
    return {
      materialInfo: 'MaterialInfo',
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      materialInfo: 'string',
      result: 'string',
      riskScore: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      riskTag: 'string',
    };
  }

  validate() {
    if(this.riskScore) {
      $dara.Model.validateMap(this.riskScore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CredentialVerifyIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates success. Other values indicate failure.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The return message.
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
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
  resultObject?: CredentialVerifyIntlResponseBodyResultObject;
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
      resultObject: CredentialVerifyIntlResponseBodyResultObject,
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

