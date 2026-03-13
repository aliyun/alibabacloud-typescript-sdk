// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncTaskEvent extends $dara.Model {
  /**
   * @remarks
   * The details of the event payload.
   * 
   * @example
   * body
   */
  eventDetail?: string;
  /**
   * @remarks
   * The event ID.
   * 
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @remarks
   * The state of the event.
   * 
   * *   Enqueued: The asynchronous invocation is enqueued and is waiting to be executed.
   * *   Succeeded: The invocation is successful.
   * *   Failed: The invocation fails.
   * *   Running: The invocation is being executed.
   * *   Stopped: The invocation is terminated.
   * *   Stopping: The invocation is being terminated.
   * *   Invalid: The invocation is invalid and not executed due to specific reasons. For example, the function is deleted.
   * *   Expired: The maximum validity period of messages is specified for asynchronous invocation. The invocation is discarded and not executed because the specified maximum validity period of has elapsed.
   * *   Retrying: The asynchronous invocation is being retried due to an execution error.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The timestamp when the event occurred. Unit: milliseconds.
   * 
   * @example
   * 1647420449721
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      eventDetail: 'eventDetail',
      eventId: 'eventId',
      status: 'status',
      timestamp: 'timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventDetail: 'string',
      eventId: 'number',
      status: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

