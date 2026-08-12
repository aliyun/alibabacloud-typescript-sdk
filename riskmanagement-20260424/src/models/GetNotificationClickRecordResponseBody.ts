// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotificationClickRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user clicked cancel.
   * 
   * - **true**: Canceled.
   * - **false**: Not canceled.
   * 
   * @example
   * false
   */
  userCancel?: string;
  /**
   * @remarks
   * Indicates whether the user clicked confirm.
   * 
   * - **true**: Confirmed.
   * - **false**: Not confirmed.
   * 
   * @example
   * true
   */
  userConfirm?: string;
  static names(): { [key: string]: string } {
    return {
      userCancel: 'UserCancel',
      userConfirm: 'UserConfirm',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userCancel: 'string',
      userConfirm: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetNotificationClickRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * - **200**: Succeeded.
   * - **Others (400, 500)**: Failed.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The metadata.
   */
  data?: GetNotificationClickRecordResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * > If the request was successful, a success message is returned. If the request failed, the failure reason is returned.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 99D93ED4-D462-5FC5-8518-9BC1C49C7B6C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * - **true**: The call was successful.         
   * - **false**: The call failed.
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
      data: GetNotificationClickRecordResponseBodyData,
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

