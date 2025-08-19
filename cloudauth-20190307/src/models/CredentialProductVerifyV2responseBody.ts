// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialProductVerifyV2ResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Additional information in JSON format.
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
   * Map of risk scores.
   */
  riskScore?: { [key: string]: string };
  /**
   * @remarks
   * Risk tags, separated by commas, including:
   * - PS: Image has been photoshopped
   * - LOW_QUALITY_PRODUCT: Low quality (low clarity)
   * - SAME_BACKGROUND: Similar background
   * 
   * @example
   * PS,LOW_QUALITY_PRODUCT
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

export class CredentialProductVerifyV2ResponseBody extends $dara.Model {
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
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * Result object.
   */
  resultObject?: CredentialProductVerifyV2ResponseBodyResultObject;
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
      resultObject: CredentialProductVerifyV2ResponseBodyResultObject,
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

