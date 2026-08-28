// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaterialInspectionResponseBodyDataResultSteps extends $dara.Model {
  /**
   * @remarks
   * The determination result of the step. Valid values:
   * - PASS: The step is compliant.
   * - FAIL: The step is non-compliant.
   * - UNABLE_TO_JUDGE: The system cannot determine the result.
   * 
   * @example
   * PASS
   */
  result?: string;
  /**
   * @remarks
   * The step ID.
   * 
   * @example
   * XXX
   */
  stepId?: string;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      stepId: 'StepId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'string',
      stepId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaterialInspectionResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The natural language summary of the inspection result, such as "1 rule: 1 PASS, all inspection items are compliant."
   * 
   * @example
   * 1项规则：1 PASS，所有检测项合规
   */
  evidence?: string;
  /**
   * @remarks
   * The overall determination result. Valid values:
   * - PASS: All inspection items are compliant.
   * - FAIL: One or more inspection items are non-compliant.
   * 
   * @example
   * PASS
   */
  overallResult?: string;
  /**
   * @remarks
   * The request ID returned as-is from the input.
   * 
   * @example
   * req-001
   */
  reqId?: string;
  /**
   * @remarks
   * The list of detection steps.
   */
  steps?: MaterialInspectionResponseBodyDataResultSteps[];
  /**
   * @remarks
   * The detection type that indicates the identified material category.
   * 
   * @example
   * Stamp
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      evidence: 'Evidence',
      overallResult: 'OverallResult',
      reqId: 'ReqId',
      steps: 'Steps',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evidence: 'string',
      overallResult: 'string',
      reqId: 'string',
      steps: { 'type': 'array', 'itemType': MaterialInspectionResponseBodyDataResultSteps },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.steps)) {
      $dara.Model.validateArray(this.steps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaterialInspectionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The inspection result.
   */
  result?: MaterialInspectionResponseBodyDataResult;
  /**
   * @remarks
   * The usage information. The key is the usage metric name and the value is the count.
   * 
   * @example
   * {"ProcessingCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: MaterialInspectionResponseBodyDataResult,
      usageMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'number' },
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    if(this.usageMap) {
      $dara.Model.validateMap(this.usageMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MaterialInspectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. This parameter is not returned if the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The material display detection result.
   */
  data?: MaterialInspectionResponseBodyData;
  /**
   * @remarks
   * The error message. This parameter is not returned if the call is successful.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * - true: The call is successful.
   * - false: The call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: MaterialInspectionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

