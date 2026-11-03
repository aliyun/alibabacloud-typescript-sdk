// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeepfakeDetectResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * The facial attribute output fields.
   * 
   * @example
   * {\\"age\\":49,\\"env\\":\\"other\\",\\"expression\\":0,\\"gender\\":1,\\"glasses\\":1,\\"hat\\":0,\\"mask\\":0,\\"others\\":0,\\"smoking\\":0,\\"tattoo\\":0}
   */
  faceAttributeInfo?: string;
  /**
   * @remarks
   * The risk result. Valid values:
   * 
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
   * The map of risk scores.
   */
  riskScore?: { [key: string]: string };
  /**
   * @remarks
   * The risk tags. Multiple tags are separated by commas (,). Valid values:
   * 
   * - SuspectDeepForgery: suspected deepfake.
   * - SuspectPSFace: suspected synthetic attack.
   * - SuspectTemple: suspected black market attack.
   * - SuspectRemake: suspected recaptured face.
   * 
   * @example
   * SuspectDeepForgery, SuspectPSFace
   */
  riskTag?: string;
  static names(): { [key: string]: string } {
    return {
      faceAttributeInfo: 'FaceAttributeInfo',
      result: 'Result',
      riskScore: 'RiskScore',
      riskTag: 'RiskTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      faceAttributeInfo: 'string',
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

export class DeepfakeDetectResponseBody extends $dara.Model {
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
   * 8FC3D6AC-9FED-4311-8DA7-C4BF47D9F260
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  resultObject?: DeepfakeDetectResponseBodyResultObject;
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
      resultObject: DeepfakeDetectResponseBodyResultObject,
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

