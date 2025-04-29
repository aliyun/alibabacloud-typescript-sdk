// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhoneNumberOperatorAttributeResponseBodyData } from "./DescribePhoneNumberOperatorAttributeResponseBodyData";


export class DescribePhoneNumberOperatorAttributeResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **InvalidParameter**: The specified phone number is invalid or the parameter format is invalid.
   * *   **PhoneNumberNotfound**: No attribute information can be found for the specified phone number.
   * *   **isp.UNKNOWN**: An unknown exception occurred.
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribePhoneNumberOperatorAttributeResponseBodyData;
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
   * The request ID.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: DescribePhoneNumberOperatorAttributeResponseBodyData,
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

