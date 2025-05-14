// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAuditTaskResponseBodyDataResponseHeader extends $dara.Model {
  /**
   * @example
   * DataNotExists
   */
  errorCode?: string;
  /**
   * @example
   * 数据不存在
   */
  errorMessage?: string;
  /**
   * @example
   * task-failed
   */
  event?: string;
  /**
   * @example
   * 49eab783-9172-487a-b9df-c6372c47392c
   */
  sessionId?: string;
  /**
   * @example
   * 896b733535274d28b1a61c78bc145217
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      event: 'Event',
      sessionId: 'SessionId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      event: 'string',
      sessionId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

