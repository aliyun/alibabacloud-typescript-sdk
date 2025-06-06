// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CredentialVerifyV2ResponseBodyResultObjectVlResult } from "./CredentialVerifyV2responseBodyResultObjectVlResult";


export class CredentialVerifyV2ResponseBodyResultObject extends $dara.Model {
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

