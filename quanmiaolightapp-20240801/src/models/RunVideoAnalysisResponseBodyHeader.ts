// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * InvalidParam
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check log.
   */
  errorMessage?: string;
  /**
   * @example
   * task-progress-start-generating
   */
  event?: string;
  eventInfo?: string;
  /**
   * @example
   * xxx
   */
  sessionId?: string;
  /**
   * @example
   * xxx
   */
  taskId?: string;
  /**
   * @example
   * 2150432017236011824686132ecdbc
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

