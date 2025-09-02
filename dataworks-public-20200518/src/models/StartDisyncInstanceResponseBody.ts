// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartDISyncInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the real-time synchronization task or the data synchronization solution fails to be started.
   * 
   * If the real-time synchronization task or the data synchronization solution is started, the value null is returned.
   * 
   * @example
   * fileId:[100] is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the real-time synchronization task or the data synchronization solution is started. Valid values:
   * 
   * *   success: The real-time synchronization task or the data synchronization solution is started.
   * *   fail: The real-time synchronization task or the data synchronization solution fails to be started. You can troubleshoot the issue based on the provided cause.
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

export class StartDISyncInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result returned for the start.
   */
  data?: StartDISyncInstanceResponseBodyData;
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
      data: StartDISyncInstanceResponseBodyData,
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

