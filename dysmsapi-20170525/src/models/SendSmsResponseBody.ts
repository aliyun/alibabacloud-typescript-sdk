// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery receipt ID.
   * 
   * Use this ID to query the delivery status by calling the [QuerySendDetails](~~QuerySendDetails~~) API.
   * 
   * @example
   * 9006197469364984****
   */
  bizId?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of `OK` indicates that the request was successful.
   * 
   * - For other error codes, see [API error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The Request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE990
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      code: 'string',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

