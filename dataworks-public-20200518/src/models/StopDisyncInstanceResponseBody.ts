// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopDISyncInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the synchronization task fails to be stopped.
   * 
   * If the synchronization task is stopped, the value null is returned.
   * 
   * @example
   * fileId:[100] is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the synchronization task is stopped. Valid values:
   * 
   * *   success
   * *   fail
   * 
   * @example
   * success
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

export class StopDISyncInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned for the synchronization task.
   */
  data?: StopDISyncInstanceResponseBodyData;
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
      data: StopDISyncInstanceResponseBodyData,
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

