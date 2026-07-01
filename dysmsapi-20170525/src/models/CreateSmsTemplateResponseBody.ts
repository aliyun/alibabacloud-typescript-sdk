// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request. Valid values:
   * 
   * - OK: The request was successful.
   * 
   * - For other error codes, see the **Error codes** list in this topic or [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
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
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * Reviewers use this ID to check the review status. You must provide this ID when you request an expedited review.
   * 
   * @example
   * 2005020****
   */
  orderId?: string;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique ID for each request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * F655A8D5-B967-440B-8683-DAD6FF8DE991
   */
  requestId?: string;
  /**
   * @remarks
   * The code of the message template.
   * 
   * After you submit a template application, you can use the template code to call the [GetSmsTemplate](https://help.aliyun.com/document_detail/2807433.html) operation and query the review details of the template. You can also [configure delivery receipts](https://help.aliyun.com/document_detail/101508.html) to receive the review status of the template in the [TemplateSmsReport](https://help.aliyun.com/document_detail/120999.html) message.
   * 
   * @example
   * SMS_10000****
   */
  templateCode?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * 验证码模板
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      orderId: 'OrderId',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      orderId: 'string',
      requestId: 'string',
      templateCode: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

