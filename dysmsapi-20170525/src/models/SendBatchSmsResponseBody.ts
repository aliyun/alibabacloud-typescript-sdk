// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendBatchSmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The delivery receipt ID.
   * 
   * - You can use this ID to query the delivery status by calling the [QuerySendDetails](https://help.aliyun.com/document_detail/102352.html) operation.
   * 
   * - Log on to the [Short Message Service console](https://dysms.console.aliyun.com/dysms.htm#/overview) and go to **Statistics** > **Delivery Logs** to view delivery details.
   * 
   * @example
   * 9006197469364984400
   */
  bizId?: string;
  /**
   * @remarks
   * The request status code.
   * 
   * - A value of `OK` indicates a successful request.
   * 
   * - For a list of other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The description of the request status.
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

