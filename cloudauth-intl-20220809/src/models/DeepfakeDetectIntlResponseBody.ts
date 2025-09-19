// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectIntlResponseBodyResultObject extends $dara.Model {
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
   * Risk tags. Multiple tags are separated by commas (,). Includes:
   * 
   * - **SuspectDeepForgery** Suspected deep forgery  
   * - **SuspectPSFace** Suspected synthetic attack  
   * - **SuspectWarterMark** Suspected watermark presence  
   * - **SuspectTemple** Suspected template attack  
   * - **SuspectAIGCFace**  Suspected generated face  
   * - **SuspectRemake**  Suspected rephotographed face
   * 
   * @example
   * SuspectDeepForgery,SuspectWarterMark
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

export class DeepfakeDetectIntlResponseBody extends $dara.Model {
  /**
   * @remarks
   * Return code: 200 indicates a successful request, any other value indicates failure.
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
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result information.
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

