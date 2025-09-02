// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TerminateDISyncInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The reason why the real-time synchronization task fails to be terminated. If the real-time synchronization task is undeployed, the value of this parameter is null.
   * 
   * @example
   * fileId:[100] is invalid.
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the real-time synchronization task is undeployed. Valid values:
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

export class TerminateDISyncInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned results.
   */
  data?: TerminateDISyncInstanceResponseBodyData;
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
      data: TerminateDISyncInstanceResponseBodyData,
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

