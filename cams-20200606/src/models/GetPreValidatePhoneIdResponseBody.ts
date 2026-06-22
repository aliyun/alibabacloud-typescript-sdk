// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPreValidatePhoneIdResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 92****
   */
  phoneNumber?: string;
  /**
   * @remarks
   * The phone number ID.
   * 
   * @example
   * 861380000****
   */
  phoneNumberId?: string;
  static names(): { [key: string]: string } {
    return {
      phoneNumber: 'PhoneNumber',
      phoneNumberId: 'PhoneNumberId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      phoneNumber: 'string',
      phoneNumberId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetPreValidatePhoneIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of OK indicates that the request was successful.
   * 
   * - For other error codes, see [Error codes](https://www.alibabacloud.com/help/en/cams/latest/api-error-codes).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetPreValidatePhoneIdResponseBodyData;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 90E63D28-E31D-1EB2-8939-A9486641****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetPreValidatePhoneIdResponseBodyData,
      message: 'string',
      requestId: 'string',
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

