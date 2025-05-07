// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunMultiDocIntroductionResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 200
   */
  errorCode?: string;
  /**
   * @example
   * Message does not exist.
   */
  errorMessage?: string;
  /**
   * @example
   * finished
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 92e16ccb-92b6-4894-abbf-fc6e2929a0df
   */
  sessionId?: string;
  /**
   * @example
   * b057f2fa-2277-477b-babf-cbc062307828
   */
  taskId?: string;
  /**
   * @example
   * 46e5c2b5-0877-4f09-bd91-ab0cf314e48b
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

