// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunWriteToneGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * AccessForbid
   */
  errorCode?: string;
  /**
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  sessionId?: string;
  /**
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  taskId?: string;
  /**
   * @example
   * F1953EE6-157C-40DC-BBF1-87C98AC27C51
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
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

