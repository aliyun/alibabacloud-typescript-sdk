// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * *   The value OK indicates that the request was successful.
   * *   Other values indicate that the request failed. For more information, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The time when the message template was created.
   * 
   * @example
   * 2019-06-04 11:42:17
   */
  createDate?: string;
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
   * The approval remarks.
   * 
   * *   If the value of AuditStatus is **AUDIT_STATE_PASS** or **AUDIT_STATE_INIT**, the value of Reason is No Approval Remarks.
   * *   If the value of AuditStatus is **AUDIT_STATE_NOT_PASS**, the reason why the message template is rejected is returned.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
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
   * The code of the message template.
   * 
   * @example
   * SMS_16703****
   */
  templateCode?: string;
  /**
   * @remarks
   * The content of the message template.
   * 
   * @example
   * You are applying for mobile registration. The verification code is: ${code}, valid for 5 minutes!
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the message template.
   * 
   * @example
   * aliyun verification code
   */
  templateName?: string;
  /**
   * @remarks
   * The approval status of the message template. Valid values:
   * 
   * *   **0**: The message template is pending approval.
   * *   **1**: The message template is approved.
   * *   **AUDIT_STATE_NOT_PASS**: The message template is rejected. You can view the reason in the Reason response parameter.
   * *   **10**: The approval is canceled.
   * 
   * @example
   * 1
   */
  templateStatus?: number;
  /**
   * @remarks
   * The type of the message. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification message
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
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

