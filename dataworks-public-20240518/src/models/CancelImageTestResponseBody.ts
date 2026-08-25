// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelImageTestResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the canceled image test execution.
   * 
   * @example
   * 582d4896-d224-413b-b883-239eeebe0bc5
   */
  processId?: string;
  /**
   * @remarks
   * Indicates whether the cancellation was triggered successfully.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      processId: 'ProcessId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CancelImageTestResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result of the API request.
   * 
   * @example
   * true
   */
  data?: CancelImageTestResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate logs and troubleshoot issues.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
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
      data: CancelImageTestResponseBodyData,
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

