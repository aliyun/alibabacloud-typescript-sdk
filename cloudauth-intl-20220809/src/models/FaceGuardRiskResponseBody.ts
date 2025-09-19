// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FaceGuardRiskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The device risk probability predicted by the Device Guard algorithm. A higher score indicates a higher device risk.
   * 
   * Valid values: 0 to 100.
   * 
   * @example
   * 0
   */
  guardRiskScore?: number;
  /**
   * @remarks
   * Extended information. This is empty by default.
   * 
   * @example
   * {
   *   "code": 200
   *   "message":"success"
   *   "umid":"07d3295d3d597b425d102a7f********",
   *   "sip":"198.51.100.1",
   *   "durationMs" : 4968931
   *   "queryCount":1,
   *   "querySessionCount":1,
   *   "queryUmidCount":1
   *   "platform":"Android
   * }
   */
  riskExtends?: string;
  /**
   * @remarks
   * The device risk tags. Multiple risk tags are separated by commas (**,**). For more information about the risk tags and their meanings, expand the **Risk tags (RiskTags)** section below.
   * 
   * @example
   * ROOT,VPN,HOOK
   */
  riskTags?: string;
  /**
   * @remarks
   * The transaction ID.
   * 
   * @example
   * hk573be80f944d95ac812e019e3655a8
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      guardRiskScore: 'GuardRiskScore',
      riskExtends: 'RiskExtends',
      riskTags: 'RiskTags',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      guardRiskScore: 'number',
      riskExtends: 'string',
      riskTags: 'string',
      transactionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class FaceGuardRiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of Success indicates that the API operation responded successfully. For more information about how to determine the authentication result, expand the **Return codes** section below.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * A detailed description of the return code.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 595E387B-3F0E-5C52-BD02-8EFE63D41FD5
   */
  requestId?: string;
  /**
   * @remarks
   * Result object
   */
  result?: FaceGuardRiskResponseBodyResult;
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
      result: FaceGuardRiskResponseBodyResult,
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

