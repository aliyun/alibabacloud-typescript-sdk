// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBatchSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery receipt. You can use one of the following methods to query the delivery status of a message based on the ID.
   * 
   * *   Call the [QuerySendDetails](https://help.aliyun.com/document_detail/102352.html) operation.
   * *   Log on to the [Alibaba Cloud SMS console](https://dysms.console.aliyun.com/dysms.htm#/overview). In the left-side navigation pane, choose **Analytics** > **Delivery Report**.
   * 
   * @example
   * 9006197469364984400
   */
  bizId?: string;
  /**
   * @remarks
   * The response code.
   * 
   * *   If OK is returned, the request is successful.
   * *   Other values indicate that the request fails. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
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
   * The request ID.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8D230E
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

