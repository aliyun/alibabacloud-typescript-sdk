// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if a task fails.
   * 
   * @example
   * mst.errorcode.success.errormessage
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the failed task. This parameter is returned if a task fails.
   * 
   * @example
   * t-0mqaj5hnyofczv****
   */
  errorTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2B98499B-E62B-56D4-8D7F-3D6D4DB260F2
   */
  requestId?: string;
  /**
   * @remarks
   * The number of completed tasks.
   * 
   * @example
   * 2
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

