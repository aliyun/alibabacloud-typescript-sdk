// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoAnalysisTaskResponseBodyDataHeader extends $dara.Model {
  /**
   * @example
   * success
   */
  errorCode?: string;
  /**
   * @example
   * Deduct task already success,Please do not resubmit.token \\"369e8f2c-d283-424a-96c4-c83efe08c89e\\"
   */
  errorMessage?: string;
  /**
   * @example
   * TIMEOUT_CLOSE_ORDER
   */
  event?: string;
  /**
   * @example
   * xxx
   */
  eventInfo?: string;
  /**
   * @example
   * d5c38cf6-a4bf-4a57-a697-9f449926f0c9
   */
  sessionId?: string;
  /**
   * @example
   * 6e223291-729b-4e84-9271-c13ada1a776b
   */
  taskId?: string;
  /**
   * @example
   * 215045f817272303448235204efdef
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      sessionId: 'sessionId',
      taskId: 'taskId',
      traceId: 'traceId',
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

