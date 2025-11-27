// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateListResponseBodySmsTemplateListReason extends $dara.Model {
  /**
   * @remarks
   * The time when the message template was rejected. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-06-04 16:01:17
   */
  rejectDate?: string;
  /**
   * @remarks
   * The reason why the message template was rejected.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The remarks about the rejection.
   * 
   * @example
   * The document cannot verify the authenticity of the information. Please upload it again.
   */
  rejectSubInfo?: string;
  static names(): { [key: string]: string } {
    return {
      rejectDate: 'RejectDate',
      rejectInfo: 'RejectInfo',
      rejectSubInfo: 'RejectSubInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rejectDate: 'string',
      rejectInfo: 'string',
      rejectSubInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
  signatureName?: string;
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
  trafficDriving?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      createDate: 'CreateDate',
      orderId: 'OrderId',
      outerTemplateType: 'OuterTemplateType',
      reason: 'Reason',
      signatureName: 'SignatureName',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
      trafficDriving: 'TrafficDriving',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      createDate: 'string',
      orderId: 'string',
      outerTemplateType: 'number',
      reason: QuerySmsTemplateListResponseBodySmsTemplateListReason,
      signatureName: 'string',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateType: 'number',
      trafficDriving: 'string',
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

export class QuerySmsTemplateListResponseBody extends $dara.Model {
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
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The number of templates per page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * The queried message templates.
   */
  smsTemplateList?: QuerySmsTemplateListResponseBodySmsTemplateList[];
  /**
   * @remarks
   * The total number of templates.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      currentPage: 'CurrentPage',
      message: 'Message',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      smsTemplateList: 'SmsTemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      currentPage: 'number',
      message: 'string',
      pageSize: 'number',
      requestId: 'string',
      smsTemplateList: { 'type': 'array', 'itemType': QuerySmsTemplateListResponseBodySmsTemplateList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.smsTemplateList)) {
      $dara.Model.validateArray(this.smsTemplateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

