// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDISyncTaskResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the synchronization task fails to be deleted. If the synchronization task is deleted, the value null is returned for this parameter.
   * 
   * @example
   * fileId:[100] is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the synchronization task is deleted. Valid values:
   * 
   * *   success: The synchronization task is deleted.
   * *   fail: The synchronization task fails to be deleted. You can troubleshoot the issue based on the failure reason.
   * 
   * @example
   * fail
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
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

export class DeleteDISyncTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The deletion result.
   */
  data?: DeleteDISyncTaskResponseBodyData;
  /**
   * @remarks
   * The request ID. You can locate logs and troubleshoot issues based on the ID.
   * 
   * @example
   * 0bc1411515937635973****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DeleteDISyncTaskResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

