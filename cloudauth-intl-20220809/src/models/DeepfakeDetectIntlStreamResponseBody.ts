// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlStreamResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The risk result. Valid values:
   * - **0**: low risk.
   * - **1**: high risk.
   * - **2**: suspicious.
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
   * - SuspectDeepForgery: suspected deepfake.
   * - SuspectPSFace: suspected synthetic attack.
   * - SuspectTemple: suspected template attack.
   * - SuspectRemake: suspected presentation attack.
   * 
   * @example
   * SuspectDeepForgery
   */
  riskTag?: string;
  /**
   * @remarks
   * The unique identifier of the authentication request.
   * 
   * @example
   * hksb7ba1b28130d24e015d69********
   */
  transactionId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
      transactionId: 'TransactionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      riskScore: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      riskTag: 'string',
      transactionId: 'string',
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

export class DeepfakeDetectIntlStreamResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * Success
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
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
   */
  resultObject?: DeepfakeDetectIntlStreamResponseBodyResultObject;
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
      resultObject: DeepfakeDetectIntlStreamResponseBodyResultObject,
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

