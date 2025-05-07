// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocBrainmapResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * success
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 07181f55-2311-48af-8048-132a77dee020
   */
  sessionId?: string;
  /**
   * @example
   * 161816
   */
  taskId?: string;
  /**
   * @example
   * 6427cdf4-2ffe-4d05-b0ef-c4adceea90f4
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      eventInfo: 'EventInfo',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      eventInfo: 'string',
      sessionId: 'string',
      taskId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

