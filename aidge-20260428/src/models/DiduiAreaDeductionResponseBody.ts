// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionResponseBodyDataResultStage4AreaLabel extends $dara.Model {
  /**
   * @example
   * 1.5334
   */
  areaM2?: number;
  /**
   * @example
   * 1.025
   */
  leftEdgeM?: number;
  /**
   * @example
   * 1.419
   */
  rightEdgeM?: number;
  static names(): { [key: string]: string } {
    return {
      areaM2: 'AreaM2',
      leftEdgeM: 'LeftEdgeM',
      rightEdgeM: 'RightEdgeM',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaM2: 'number',
      leftEdgeM: 'number',
      rightEdgeM: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiduiAreaDeductionResponseBodyDataResult extends $dara.Model {
  stage4AreaLabel?: DiduiAreaDeductionResponseBodyDataResultStage4AreaLabel;
  static names(): { [key: string]: string } {
    return {
      stage4AreaLabel: 'Stage4AreaLabel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      stage4AreaLabel: DiduiAreaDeductionResponseBodyDataResultStage4AreaLabel,
    };
  }

  validate() {
    if(this.stage4AreaLabel && typeof (this.stage4AreaLabel as any).validate === 'function') {
      (this.stage4AreaLabel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DiduiAreaDeductionResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  attempts?: number;
  /**
   * @example
   * success
   */
  code?: string;
  /**
   * @example
   * OK
   */
  httpStatus?: number;
  /**
   * @example
   * 1000
   */
  latencyMs?: number;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * model_req_id_xx
   */
  modelRequestId?: string;
  /**
   * @example
   * 643913D2-063F-599C-B3DF-B8D415CE171F
   */
  reqId?: string;
  result?: DiduiAreaDeductionResponseBodyDataResult;
  /**
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @example
   * True
   */
  success?: boolean;
  /**
   * @example
   * {"ProcessingCount":1}
   */
  usageMap?: { [key: string]: number };
  static names(): { [key: string]: string } {
    return {
      attempts: 'Attempts',
      code: 'Code',
      httpStatus: 'HttpStatus',
      latencyMs: 'LatencyMs',
      message: 'Message',
      modelRequestId: 'ModelRequestId',
      reqId: 'ReqId',
      result: 'Result',
      status: 'Status',
      success: 'Success',
      usageMap: 'UsageMap',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attempts: 'number',
      code: 'string',
      httpStatus: 'number',
      latencyMs: 'number',
      message: 'string',
      modelRequestId: 'string',
      reqId: 'string',
      result: DiduiAreaDeductionResponseBodyDataResult,
      status: 'string',
      success: 'boolean',
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

export class DiduiAreaDeductionResponseBody extends $dara.Model {
  /**
   * @example
   * success
   */
  code?: string;
  data?: DiduiAreaDeductionResponseBodyData;
  /**
   * @example
   * Success
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
      data: DiduiAreaDeductionResponseBodyData,
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

