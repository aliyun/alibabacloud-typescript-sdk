// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute } from "./DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute";


export class DescribePhoneNumberAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **InvalidParameter**: The specified phone number is invalid or the parameter format is invalid.
   * *   **PhoneNumberNotfound**: No attribute information can be found for the specified phone number.
   * *   **isp.UNKNOWN**: An unknown exception occurred.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The attribute information about the phone number.
   */
  phoneNumberAttribute?: DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC3BB6D2-2FDF-4321-9DCE-B38165CE4C47
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      phoneNumberAttribute: 'PhoneNumberAttribute',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      phoneNumberAttribute: DescribePhoneNumberAttributeResponseBodyPhoneNumberAttribute,
      requestId: 'string',
    };
  }

  validate() {
    if(this.phoneNumberAttribute && typeof (this.phoneNumberAttribute as any).validate === 'function') {
      (this.phoneNumberAttribute as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

