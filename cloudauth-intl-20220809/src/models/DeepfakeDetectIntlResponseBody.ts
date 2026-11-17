// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlResponseBodyResultObject extends $dara.Model {
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
   * The map of risk scores.
   */
  riskScore?: { [key: string]: string };
  /**
   * @remarks
   * The risk tags. Multiple tags are separated by commas (,). Valid values:
   * 
   * - **SuspectDeepForgery**: Suspected deepfake.  
   * - **SuspectPSFace**: Suspected synthetic attack.  
   * - **SuspectWarterMark**: Suspected watermark.  
   * - **SuspectTemple**: Suspected template attack.  
   * - **SuspectAIGCFace**: Suspected AIGC-generated face.  
   * - **SuspectRemake**: Suspected recaptured face.
   * 
   * @example
   * SuspectDeepForgery,SuspectWarterMark
   */
  riskTag?: string;
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

export class DeepfakeDetectIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code. A value of 200 indicates that the request is successful. Other values indicate that the request failed.
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
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result information.
   */
  resultObject?: DeepfakeDetectIntlResponseBodyResultObject;
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
      resultObject: DeepfakeDetectIntlResponseBodyResultObject,
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

