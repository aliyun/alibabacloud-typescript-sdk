// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFunctionTaskResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates the end time of the task. Unit: milliseconds.
   * 
   * @example
   * 1647213406267
   */
  endTime?: number;
  /**
   * @remarks
   * The extended information, which is a JSON string.
   * 
   * @example
   * {\\"recall\\":91,\\"errors\\":[]}
   */
  extendInfo?: string;
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * ctr
   */
  functionName?: string;
  /**
   * @remarks
   * The number of iterations.
   * 
   * @example
   * 1
   */
  generation?: string;
  /**
   * @remarks
   * The progress. 90 indicates 90%.
   * 
   * @example
   * 90
   */
  progress?: number;
  /**
   * @remarks
   * The ID of the task.
   * 
   * @example
   * trigger__2021-03-05T12:18:41
   */
  runId?: string;
  /**
   * @remarks
   * The timestamp that indicates the start time of the task. Unit: milliseconds.
   * 
   * @example
   * 1647212220000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the task. Valid values:
   * 
   * *   success
   * *   failed
   * *   running
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      extendInfo: 'ExtendInfo',
      functionName: 'FunctionName',
      generation: 'Generation',
      progress: 'Progress',
      runId: 'RunId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'number',
      extendInfo: 'string',
      functionName: 'string',
      generation: 'string',
      progress: 'number',
      runId: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFunctionTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * Task.NotExist
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The time consumed for the request, in milliseconds.
   * 
   * @example
   * 123
   */
  latency?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * operation success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A4D487A9-A456-5AA5-A9C6-B7BF2889CF74
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the request.
   */
  result?: GetFunctionTaskResponseBodyResult;
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * OK
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: GetFunctionTaskResponseBodyResult,
      status: 'string',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

