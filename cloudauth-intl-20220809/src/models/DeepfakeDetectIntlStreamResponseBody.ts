// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlStreamResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Risk result:
   * 
   * - **0**: Low risk
   * - **1**: High risk
   * - **2**: Suspicious
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
   * Risk tags. Multiple tags are separated by commas (,), including:
   * 
   * - SuspectDeepForgery: Suspected deep forgery
   * - SuspectPSFace: Suspected synthetic attack
   * - SuspectTemple: Suspected template attack
   * - SuspectRemake: Suspected presentation attack
   * 
   * @example
   * SuspectDeepForgery
   */
  riskTag?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DeepfakeDetectIntlStreamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Return message
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
   * 4EB35****87EBA1
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
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

