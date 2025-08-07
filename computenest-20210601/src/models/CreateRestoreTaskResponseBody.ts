// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRestoreTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 13FE89A5-C036-56BF-A0FF-A31C59819FD7
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the restore task.
   * 
   * @example
   * restore-fdsafda
   */
  restoreTaskId?: string;
  /**
   * @remarks
   * The status of the service instance. Valid values:
   * 
   * *   Restoring
   * *   Restored
   * *   RestoreFailed
   * 
   * @example
   * Restoring
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      restoreTaskId: 'RestoreTaskId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      restoreTaskId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

