// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSiteMonitorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of the site monitoring tasks that were deleted.
   * 
   * @example
   * 0
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DeleteSiteMonitorsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * >  The status code 200 indicates that the call was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information about the site monitoring tasks that were deleted.
   */
  data?: DeleteSiteMonitorsResponseBodyData;
  /**
   * @remarks
   * The returned message. If the call was successful, the value success is returned. If the call failed, an error message such as `TaskId not found` is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 123BCC5D-8B63-48EA-B747-9A8995BE7AA6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. The value true indicates success. The value false indicates failure.
   * 
   * @example
   * true
   */
  success?: string;
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
      data: DeleteSiteMonitorsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
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

