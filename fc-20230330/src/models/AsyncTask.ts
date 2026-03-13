// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncTaskEvent } from "./AsyncTaskEvent";


export class AsyncTask extends $dara.Model {
  /**
   * @remarks
   * The number of retries after the asynchronous task fails.
   * 
   * @example
   * 3
   */
  alreadyRetriedTimes?: number;
  /**
   * @remarks
   * The final state of the asynchronous task.
   * 
   * @example
   * Succeeded
   */
  destinationStatus?: string;
  /**
   * @remarks
   * The execution duration of the asynchronous task.
   * 
   * @example
   * 1000
   */
  durationMs?: number;
  /**
   * @remarks
   * The end time of the asynchronous task. Unit: milliseconds.
   * 
   * @example
   * 1633449590000
   */
  endTime?: number;
  /**
   * @remarks
   * The events of the asynchronous task.
   */
  events?: AsyncTaskEvent[];
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the function.
   * 
   * @example
   * acs:fc:cn-shanghai:1234/functions/my-func
   */
  functionArn?: string;
  /**
   * @remarks
   * The ID of the instance that corresponds to the asynchronous task.
   * 
   * @example
   * D4-*******9FD1-882707E
   */
  instanceId?: string;
  /**
   * @remarks
   * The version or alias of the function.
   * 
   * @example
   * prod
   */
  qualifier?: string;
  /**
   * @remarks
   * The ID of the request corresponding to this asynchronous task.
   * 
   * @example
   * e026ae92-61e5-472f-b32d-1c9e3c4e****
   */
  requestId?: string;
  /**
   * @remarks
   * The content of the response after the asynchronous task is executed. The maximum size is 1 MB. This parameter is in public preview. If you want to use this parameter, [contact us](https://help.aliyun.com/document_detail/2513733.html).
   * 
   * @example
   * result
   */
  returnPayload?: string;
  /**
   * @remarks
   * The start time of the asynchronous task. Unit: milliseconds.
   * 
   * @example
   * 1633449590000
   */
  startedTime?: number;
  /**
   * @remarks
   * The state of the asynchronous task.
   * 
   * *   Enqueued: The asynchronous invocation is enqueued and waiting to be executed.
   * *   Succeeded: The invocation is successful.
   * *   Failed: The invocation fails.
   * *   Running: The invocation is being executed.
   * *   Stopped: The invocation is terminated.
   * *   Stopping: The invocation is being terminated.
   * *   Invalid: The invocation is invalid and not executed due to specific reasons. For example, the function is deleted.
   * *   Expired: The maximum validity period of messages is specified for asynchronous invocation. The invocation is discarded and not executed because the specified maximum validity period of messages expires.
   * *   Retrying: The asynchronous invocation is being retried due to an execution error.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The error message for an asynchronous task failure.
   * 
   * @example
   * UnhandledInvocationError
   */
  taskErrorMessage?: string;
  /**
   * @remarks
   * The ID of the asynchronous task.
   * 
   * @example
   * e026ae92-61e5-472f-b32d-1c9e3c4e****
   */
  taskId?: string;
  /**
   * @remarks
   * The content of the input parameter during asynchronous task execution.
   * 
   * @example
   * body
   */
  taskPayload?: string;
  static names(): { [key: string]: string } {
    return {
      alreadyRetriedTimes: 'alreadyRetriedTimes',
      destinationStatus: 'destinationStatus',
      durationMs: 'durationMs',
      endTime: 'endTime',
      events: 'events',
      functionArn: 'functionArn',
      instanceId: 'instanceId',
      qualifier: 'qualifier',
      requestId: 'requestId',
      returnPayload: 'returnPayload',
      startedTime: 'startedTime',
      status: 'status',
      taskErrorMessage: 'taskErrorMessage',
      taskId: 'taskId',
      taskPayload: 'taskPayload',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alreadyRetriedTimes: 'number',
      destinationStatus: 'string',
      durationMs: 'number',
      endTime: 'number',
      events: { 'type': 'array', 'itemType': AsyncTaskEvent },
      functionArn: 'string',
      instanceId: 'string',
      qualifier: 'string',
      requestId: 'string',
      returnPayload: 'string',
      startedTime: 'number',
      status: 'string',
      taskErrorMessage: 'string',
      taskId: 'string',
      taskPayload: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

