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
   *  // The request ID of the original image request corresponding to the similar background
   *  "originalRequestId": "130A2C10-B9EE-4D84-88E3-5384FF03****";
   *  // The merchant ID of the original image request corresponding to the similar background 
   *  "originalMerchantId": "xxxxxxxx" 
   *  }
   * }
   */
  materialInfo?: string;
  /**
   * @remarks
   * The risk result. Valid values:
   * 
   * - **0**: low risk
   * - **1**: high risk
   * - **2**: suspicious
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
   * - PS: The image is edited by using Photoshop.
   * - SCREEN_PHOTO: The image is a photo of a screen.
   * - SCREENSHOT: The image is a screenshot.
   * - ORIGINAL_PHOTO: The image is not an original image.
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
   * 130A2C10-B9EE-4D84-88E3-5384FF039795
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result information.
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

