// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PackageWeightSizeCheckResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID used to query the review result later by calling QueryAsyncTaskResult.
   * 
   * @example
   * a8323ada-a196-9061-976f-90e38b27323a
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PackageWeightSizeCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. A value of 200 indicates a successful call. For other response codes, refer to the error code information.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The submit status result data, which contains the asynchronous task ID.
   */
  data?: PackageWeightSizeCheckResponseBodyData;
  /**
   * @remarks
   * The error message. "Success" is returned for successful calls. A specific error message is returned for failed calls.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, which uniquely identifies the request.
   * 
   * @example
   * F93D82E4-D0B6-1043-AC58-282597BC3C10
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values: true and false.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: PackageWeightSizeCheckResponseBodyData,
      message: 'string',
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

