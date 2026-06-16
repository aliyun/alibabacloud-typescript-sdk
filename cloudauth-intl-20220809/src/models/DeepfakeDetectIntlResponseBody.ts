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
   * The risk score map.
   */
  riskScore?: { [key: string]: string };
  /**
   * @remarks
   * The risk labels. Multiple labels are separated by commas (,). Valid values:
   * 
   * - **SuspectDeepForgery**: suspected depth forgery  
   * - **SuspectPSFace**: suspected synthetic attack  
   * - **SuspectWarterMark**: suspected watermark  
   * - **SuspectTemple**: suspected template attack  
   * - **SuspectAIGCFace**: suspected AIGC-generated face  
   * - **SuspectRemake**: suspected recaptured face.
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
   * The return code. A value of 200 indicates success. Other values indicate failure.
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
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * The result information.
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

