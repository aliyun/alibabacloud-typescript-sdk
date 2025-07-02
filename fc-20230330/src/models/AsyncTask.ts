// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AsyncTaskEvent } from "./AsyncTaskEvent";


export class AsyncTask extends $dara.Model {
  /**
   * @example
   * 3
   */
  alreadyRetriedTimes?: number;
  /**
   * @example
   * Succeeded
   */
  destinationStatus?: string;
  /**
   * @example
   * 1000
   */
  durationMs?: number;
  /**
   * @example
   * 1633449590000
   */
  endTime?: number;
  events?: AsyncTaskEvent[];
  /**
   * @example
   * acs:fc:cn-shanghai:1234/functions/my-func
   */
  functionArn?: string;
  /**
   * @example
   * D4-*******9FD1-882707E
   */
  instanceId?: string;
  /**
   * @example
   * prod
   */
  qualifier?: string;
  /**
   * @example
   * e026ae92-61e5-472f-b32d-1c9e3c4e****
   */
  requestId?: string;
  /**
   * @example
   * result
   */
  returnPayload?: string;
  /**
   * @example
   * 1633449590000
   */
  startedTime?: number;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * UnhandledInvocationError
   */
  taskErrorMessage?: string;
  /**
   * @example
   * e026ae92-61e5-472f-b32d-1c9e3c4e****
   */
  taskId?: string;
  /**
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

