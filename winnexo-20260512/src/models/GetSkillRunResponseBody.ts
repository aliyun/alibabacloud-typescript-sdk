// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task creation time in ISO 8601 format.
   * 
   * @example
   * string_value
   */
  createdAt?: string;
  /**
   * @remarks
   * The error code. This parameter is returned only when the status is Failed.
   * 
   * @example
   * string_value
   */
  errorCode?: string;
  /**
   * @remarks
   * The error description. This parameter is returned only when the status is Failed.
   * 
   * @example
   * string_value
   */
  errorMessage?: string;
  /**
   * @remarks
   * The task end time in ISO 8601 format. This parameter has a value only in desired states (Succeeded, Failed, or Cancelled).
   * 
   * @example
   * string_value
   */
  finishedAt?: string;
  /**
   * @remarks
   * The execution log list. This parameter is returned only when IncludeLogs is set to true.
   */
  logs?: { [key: string]: any }[];
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The progress percentage. This parameter is meaningful only when the status is Running.
   * 
   * @example
   * 1
   */
  progress?: number;
  /**
   * @remarks
   * The progress description.
   * 
   * @example
   * string_value
   */
  progressMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The execution result. This parameter is returned only when the status is Succeeded. It contains a content list.
   */
  result?: { [key: string]: any };
  /**
   * @remarks
   * The asynchronous task ID.
   * 
   * @example
   * exampleRunId
   */
  runId?: string;
  /**
   * @remarks
   * The skill code.
   * 
   * @example
   * string_value
   */
  skillCode?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * string_value
   */
  skillName?: string;
  /**
   * @remarks
   * The task execution start time in ISO 8601 format.
   * 
   * @example
   * string_value
   */
  startedAt?: string;
  /**
   * @remarks
   * The execution status. Valid values: Running, Succeeded, Failed, and Cancelled.
   * 
   * @example
   * READY
   */
  status?: string;
  /**
   * @remarks
   * The LLM token usage statistics. This parameter is returned only when the status is Succeeded.
   */
  usage?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      createdAt: 'createdAt',
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      finishedAt: 'finishedAt',
      logs: 'logs',
      message: 'message',
      progress: 'progress',
      progressMessage: 'progressMessage',
      requestId: 'requestId',
      result: 'result',
      runId: 'runId',
      skillCode: 'skillCode',
      skillName: 'skillName',
      startedAt: 'startedAt',
      status: 'status',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createdAt: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      finishedAt: 'string',
      logs: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      message: 'string',
      progress: 'number',
      progressMessage: 'string',
      requestId: 'string',
      result: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      runId: 'string',
      skillCode: 'string',
      skillName: 'string',
      startedAt: 'string',
      status: 'string',
      usage: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.logs)) {
      $dara.Model.validateArray(this.logs);
    }
    if(this.result) {
      $dara.Model.validateMap(this.result);
    }
    if(this.usage) {
      $dara.Model.validateMap(this.usage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

