// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunDocIntroductionResponseBodyHeader extends $dara.Model {
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
   * task-started
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 20247a52-23e2-46fb-943d-309cdee2bc6d
   */
  sessionId?: string;
  /**
   * @example
   * 8a9cecb7-6d20-32db-8823-5882c217b647
   */
  taskId?: string;
  /**
   * @example
   * 0bd58ea2-dc38-45da-ac02-17f05cb9040b
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

