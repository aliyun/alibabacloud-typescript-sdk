// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunScriptPlanningResponseBodyHeader extends $dara.Model {
  /**
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @example
   * Pop sign mismatch, please check.
   */
  errorMessage?: string;
  /**
   * @example
   * result-generated
   */
  event?: string;
  /**
   * @example
   * 模型生成事件
   */
  eventInfo?: string;
  /**
   * @example
   * 0EB27AE3-CA53-5FAE-83C6-EE66CA4DF5DF
   */
  requestId?: string;
  /**
   * @example
   * 3cd10828-0e42-471c-8f1a-931cde20b035
   */
  sessionId?: string;
  /**
   * @example
   * d3be9981-ca2d-4e17-bf31-1c0a628e9f99
   */
  taskId?: string;
  /**
   * @example
   * 2150451a17191950923411783e2927
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      event: 'event',
      eventInfo: 'eventInfo',
      requestId: 'requestId',
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

