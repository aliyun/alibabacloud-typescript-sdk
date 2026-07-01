// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code of the request.
   * 
   * - OK indicates that the request was successful.
   * 
   * - For a list of other error codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2024-06-03 10:02:34
   */
  createDate?: string;
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
   * The review notes for the template.
   * 
   * - If the review status is **Approved** or **Reviewing**, the message "No review remarks" is returned.
   * 
   * - If the review status is **Rejected**, the reason for the rejection is returned.
   * 
   * @example
   * 无审批备注
   */
  reason?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0A974B78-02BF-4C79-ADF3-90CFBA1B55B1
   */
  requestId?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * SMS_1525****
   */
  templateCode?: string;
  /**
   * @remarks
   * The template content.
   * 
   * @example
   * 亲爱的会员！阿里云短信服务祝您新年快乐！
   */
  templateContent?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 通知短信
   */
  templateName?: string;
  /**
   * @remarks
   * The review status of the template. Valid values:
   * 
   * - **0**: Reviewing.
   * 
   * - **1**: Approved.
   * 
   * - **2**: Rejected. The reason for the rejection is returned in the response. For more information, see [Suggestions for handling a failed review](https://help.aliyun.com/document_detail/65990.html). You can then call the [ModifySmsTemplate](https://help.aliyun.com/document_detail/419287.html) API or modify the template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * 
   * - **10**: Canceled.
   * 
   * @example
   * 0
   */
  templateStatus?: number;
  /**
   * @remarks
   * The message type. Valid values:
   * 
   * - **0**: Verification code.
   * 
   * - **1**: Message notification.
   * 
   * - **2**: Promotional message.
   * 
   * - **3**: International message.
   * 
   * @example
   * 1
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createDate: 'CreateDate',
      message: 'Message',
      reason: 'Reason',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createDate: 'string',
      message: 'string',
      reason: 'string',
      requestId: 'string',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateStatus: 'number',
      templateType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

