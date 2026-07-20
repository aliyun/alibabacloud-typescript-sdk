// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNotificationClickRecordResponseBodyData extends $dara.Model {
  /**
   * @example
   * false
   */
  userCancel?: string;
  /**
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
   * @example
   * 200
   */
  code?: string;
  data?: GetNotificationClickRecordResponseBodyData;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 99D93ED4-D462-5FC5-8518-9BC1C49C7B6C
   */
  requestId?: string;
  /**
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

