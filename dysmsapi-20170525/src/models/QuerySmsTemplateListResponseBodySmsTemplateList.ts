// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsTemplateListResponseBodySmsTemplateListReason } from "./QuerySmsTemplateListResponseBodySmsTemplateListReason";


export class QuerySmsTemplateListResponseBodySmsTemplateList extends $dara.Model {
  /**
   * @remarks
   * The approval status of the message template. Valid values:
   * 
   * *   **AUDIT_STATE_INIT**: The message template is pending approval.
   * *   **AUDIT_STATE_PASS**: The message template is approved.
   * *   **AUDIT_STATE_NOT_PASS**: The message template is rejected. You can view the reason in the Reason response parameter.
   * *   **AUDIT_STATE_CANCEL** or **AUDIT_SATE_CANCEL**: The approval is canceled.
   * 
   * @example
   * AUDIT_STATE_PASS
   */
  auditStatus?: string;
  /**
   * @remarks
   * The time when the message template was created. The time is in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2020-06-04 11:42:17
   */
  createDate?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 2361****
   */
  orderId?: string;
  /**
   * @remarks
   * The type of the message template. We recommend that you specify this parameter. Valid values:
   * 
   * *   **0**: verification code
   * *   **1**: notification message
   * *   **2**: promotional message
   * *   **3**: message sent to countries or regions outside the Chinese mainland
   * *   **7**: digital message
   * 
   * > The template type is the same as the value of the TemplateType parameter in the AddSmsTemplate and ModifySmsTemplate operations.
   * 
   * @example
   * 0
   */
  outerTemplateType?: number;
  /**
   * @remarks
   * The approval remarks.
   * 
   * *   If the value of AuditStatus is **AUDIT_STATE_PASS** or **AUDIT_STATE_INIT**, the value of Reason is No Approval Remarks.
   * *   If the value of AuditStatus is **AUDIT_STATE_NOT_PASS**, the reason why the message template is rejected is returned.
   */
  reason?: QuerySmsTemplateListResponseBodySmsTemplateListReason;
  /**
   * @remarks
   * The code of the message template.
   * 
   * You can log on to the [Short Message Service (SMS) console](https://dysms.console.aliyun.com/dysms.htm), click **Go China** or **Go Globe** in the left-side navigation pane, and then view the template code on the **Templates** tab. You can also call the [AddSmsTemplate](https://help.aliyun.com/document_detail/121208.html) operation to obtain the template code.
   * 
   * @example
   * SMS_1525***
   */
  templateCode?: string;
  /**
   * @remarks
   * The content of the message template.
   * 
   * @example
   * 123456789
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
   * The type of the message template. Valid values:
   * 
   * *   **0**: notification message
   * *   **1**: promotional message
   * *   **2**: verification code
   * *   **6**: message sent to countries or regions outside the Chinese mainland
   * *   **7**: digital message
   * 
   * @example
   * 7
   */
  templateType?: number;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      createDate: 'CreateDate',
      orderId: 'OrderId',
      outerTemplateType: 'OuterTemplateType',
      reason: 'Reason',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      createDate: 'string',
      orderId: 'string',
      outerTemplateType: 'number',
      reason: QuerySmsTemplateListResponseBodySmsTemplateListReason,
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateType: 'number',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

