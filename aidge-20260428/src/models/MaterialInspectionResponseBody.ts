// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MaterialInspectionResponseBodyDataResultSteps extends $dara.Model {
  /**
   * @example
   * PASS
   */
  result?: string;
  /**
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
   * @example
   * 1项规则：1 PASS，所有检测项合规
   */
  evidence?: string;
  /**
   * @example
   * PASS
   */
  overallResult?: string;
  /**
   * @example
   * req-001
   */
  reqId?: string;
  steps?: MaterialInspectionResponseBodyDataResultSteps[];
  /**
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
  result?: MaterialInspectionResponseBodyDataResult;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: MaterialInspectionResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * E1AD60F1-BAC7-546B-9533-E7AD02B16E3F
   */
  requestId?: string;
  /**
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

