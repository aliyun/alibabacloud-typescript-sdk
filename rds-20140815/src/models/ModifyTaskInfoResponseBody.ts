// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * mst.errorcode.success.errormessage
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the failed task. This parameter is returned when a task fails.
   * 
   * @example
   * t-83br18hlw11ue610yo
   */
  errorTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 18B3000C-2B06-5D4F-AA5B-456D5FBCA55B
   */
  requestId?: string;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 5
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

