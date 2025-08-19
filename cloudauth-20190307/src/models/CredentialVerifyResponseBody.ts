// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyResponseBodyResultObjectVlResult extends $dara.Model {
  success?: boolean;
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
  materialInfo?: string;
  ocrInfo?: string;
  /**
   * @example
   * 1
   */
  result?: string;
  riskScore?: { [key: string]: string };
  /**
   * @example
   * PS,SCREEN_PHOTO
   */
  riskTag?: string;
  /**
   * @example
   * **
   */
  verifyDetail?: string;
  /**
   * @example
   * *
   */
  verifyResult?: string;
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
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * D6163397-15C5-419C-9ACC-B7C83E0B4C10
   */
  requestId?: string;
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

