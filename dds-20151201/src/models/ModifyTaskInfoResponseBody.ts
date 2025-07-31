// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code for the failed task. It is the same as that of the ModifyTaskInfo operation.
   * 
   * @example
   * ""
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the failed task. The operation returns results after a task fails.
   * 
   * @example
   * ""
   */
  errorTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6163731A-XXXX-XXXX-B934-3388DE70C217
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successful tasks.
   * 
   * @example
   * 1
   */
  successCount?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorTaskId: 'ErrorTaskId',
      requestId: 'RequestId',
      successCount: 'SuccessCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorTaskId: 'string',
      requestId: 'string',
      successCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

