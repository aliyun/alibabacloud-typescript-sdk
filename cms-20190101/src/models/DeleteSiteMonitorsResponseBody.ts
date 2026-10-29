// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSiteMonitorsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of affected rows.
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
   * The status code.
   * 
   * > 200 indicates success.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The number of affected rows.
   */
  data?: DeleteSiteMonitorsResponseBodyData;
  /**
   * @remarks
   * The returned message. If the request is successful, a success message is returned. If the request fails, the cause of the failure is returned, such as `TaskId not found`.
   * 
   * @example
   * Request succeeded.
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
   * Indicates whether the operation was successful. A value of true indicates success, and a value of false indicates failure.
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

