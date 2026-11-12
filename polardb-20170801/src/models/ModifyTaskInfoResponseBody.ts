// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTaskInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned when the task modification fails.
   * 
   * @example
   * InvalidParameter
   */
  errorCode?: string;
  /**
   * @remarks
   * The ID of the task that failed to be modified.
   * 
   * @example
   * 32077061
   */
  errorTaskId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The number of successfully modified tasks.
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

