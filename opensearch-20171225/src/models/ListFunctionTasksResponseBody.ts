// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The timestamp that indicates the end time. Unit: milliseconds. 0 indicates that the task has not ended.
   * 
   * @example
   * 100010
   */
  endTime?: number;
  /**
   * @remarks
   * The value is a JSON string. It includes model evaluation information and training error information.
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
   * 2
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
   * The timestamp that indicates the start time. Unit: milliseconds.
   * 
   * @example
   * 100010
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

export class ListFunctionTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
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
   * fail
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1638157479281
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * [         {             "functionName": "ctr",             "progress": 100,             "status": "success",             "startTime": 100010,             "endTime": 200020,             "extendInfo": "{\\"recall\\":91,\\"errors\\":[]}",             "runId": "trigger__2021-03-05T12:18:41"         }     ]
   */
  result?: ListFunctionTasksResponseBodyResult[];
  /**
   * @remarks
   * The status of the request.
   * 
   * @example
   * 200
   */
  status?: string;
  /**
   * @remarks
   * The total number of records that meet the requirements.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpCode: 'HttpCode',
      latency: 'Latency',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      status: 'Status',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpCode: 'number',
      latency: 'number',
      message: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListFunctionTasksResponseBodyResult },
      status: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

