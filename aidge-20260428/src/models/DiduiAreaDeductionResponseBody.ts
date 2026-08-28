// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DiduiAreaDeductionResponseBodyDataResultStage4AreaLabel extends $dara.Model {
  /**
   * @remarks
   * The floor display area, in square meters.
   * 
   * @example
   * 1.5334
   */
  areaM2?: number;
  /**
   * @remarks
   * The left edge length, in meters.
   * 
   * @example
   * 1.025
   */
  leftEdgeM?: number;
  /**
   * @remarks
   * The right edge length, in meters.
   * 
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
  /**
   * @remarks
   * The stage 4 area label.
   */
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
   * @remarks
   * The number of downstream call attempts.
   * 
   * @example
   * 1
   */
  attempts?: number;
  /**
   * @remarks
   * The workflow error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The downstream HTTP status code.
   * 
   * @example
   * OK
   */
  httpStatus?: number;
  /**
   * @remarks
   * The downstream call latency, in milliseconds.
   * 
   * @example
   * 1000
   */
  latencyMs?: number;
  /**
   * @remarks
   * The workflow description message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The model request ID.
   * 
   * @example
   * model_req_id_xx
   */
  modelRequestId?: string;
  /**
   * @remarks
   * The business request ID.
   * 
   * @example
   * 643913D2-063F-599C-B3DF-B8D415CE171F
   */
  reqId?: string;
  /**
   * @remarks
   * The area calculation result.
   */
  result?: DiduiAreaDeductionResponseBodyDataResult;
  /**
   * @remarks
   * The workflow status.
   * 
   * @example
   * COMPLETED
   */
  status?: string;
  /**
   * @remarks
   * The workflow business status.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * The usage information.
   * 
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
   * @remarks
   * The error code.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The floor display area inference result.
   */
  data?: DiduiAreaDeductionResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success
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
   * Indicates whether the call was successful.
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

