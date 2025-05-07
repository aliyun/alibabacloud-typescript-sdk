// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunCommentGenerationResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * result-generated
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * 1813ceee-7fe5-41b4-87e5-982a4d18cca5
   */
  requestId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  sessionId?: string;
  /**
   * @example
   * 3f7045e099474ba28ceca1b4eb6d6e21
   */
  taskId?: string;
  /**
   * @example
   * 0bd58ea2-dc38-45da-ac02-17f05cb9040b
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventInfo: 'EventInfo',
      requestId: 'RequestId',
      sessionId: 'SessionId',
      taskId: 'TaskId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventInfo: 'string',
      requestId: 'string',
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

