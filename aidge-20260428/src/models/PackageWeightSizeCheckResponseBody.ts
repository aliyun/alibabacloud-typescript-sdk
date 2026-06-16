// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PackageWeightSizeCheckResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asynchronous task ID, used to query the audit result later through QueryAsyncTaskResult.
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
   * The response code. 200 indicates a successful call. For other response codes, refer to the error code information.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The asynchronous submission result data, which contains the asynchronous task ID.
   */
  data?: PackageWeightSizeCheckResponseBodyData;
  /**
   * @remarks
   * The error message. "Success" is returned for normal calls, and specific error information is returned for exceptions.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The request ID, used to identify a unique request call.
   * 
   * @example
   * F93D82E4-D0B6-1043-AC58-282597BC3C10
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the call was successful. true indicates success, and false indicates failure.
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

