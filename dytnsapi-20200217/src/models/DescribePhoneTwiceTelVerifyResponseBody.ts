// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhoneTwiceTelVerifyResponseBodyData } from "./DescribePhoneTwiceTelVerifyResponseBodyData";


export class DescribePhoneTwiceTelVerifyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. Valid values:
   * 
   * *   **OK**: The request is successful.
   * *   **PortabilityNumberNotSupported**: The phone number that is involved in mobile number portability is not supported.
   * *   **RequestNumberNotSupported**: You are not allowed to query phone numbers assigned by China Broadnet (that is, phone numbers start with 192) and phone numbers assigned by virtual network operators (VNOs).
   * *   **RequestFrequencyLimit**: Repeated queries for the same phone number at a high frequency within a short period of time are prohibited due to restrictions that are set by carriers. If this error code is returned, please try again later.
   * 
   * >  You are charged for phone number verifications if the value of Code is OK and the value of VerifyResult is not 0. For more information, see [Pricing](https://help.aliyun.com/document_detail/154751.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: DescribePhoneTwiceTelVerifyResponseBodyData;
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
   * The unique request ID. It is a common parameter and can be used to troubleshoot and locate issues.
   * 
   * @example
   * 68A40250-50CD-034C-B728-0BD135850177
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
      data: DescribePhoneTwiceTelVerifyResponseBodyData,
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

