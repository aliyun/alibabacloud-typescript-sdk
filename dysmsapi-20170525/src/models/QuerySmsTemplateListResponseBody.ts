// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateListResponseBodySmsTemplateListReason extends $dara.Model {
  /**
   * @remarks
   * The time when the template was rejected. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-06-04 16:01:17
   */
  rejectDate?: string;
  /**
   * @remarks
   * The reason why the template was rejected.
   * 
   * @example
   * 变量不符合规范
   */
  rejectInfo?: string;
  /**
   * @remarks
   * The detailed reason why the template was rejected.
   * 
   * @example
   * 变量属性选择错误。
   * 请根据业务使用场景选择合适的变量属性。
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
   * The template approval status. Valid values:
   * 
   * - **AUDIT_STATE_INIT**: under review.
   * - **AUDIT_STATE_PASS**: approved.
   * - **AUDIT_STATE_NOT_PASS**: rejected. View the rejection reason in the Reason response parameter.
   * - **AUDIT_SATE_CANCEL**: review canceled.
   * 
   * @example
   * AUDIT_STATE_PASS
   */
  auditStatus?: string;
  /**
   * @remarks
   * The time when the template was created. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2020-06-04 11:42:17
   */
  createDate?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * Reviewers use this parameter when querying approval information. You must provide this ticket ID when you request expedited approval.
   * 
   * @example
   * 2004983****
   */
  orderId?: string;
  /**
   * @remarks
   * The template type (for external use). Valid values:
   * 
   * - **0**: verification code message.
   * - **1**: notification message.
   * - **2**: promotional message.
   * - **3**: international or Hong Kong, Macao, and Taiwan message.
   * 
   * @example
   * 0
   */
  outerTemplateType?: number;
  /**
   * @remarks
   * The approval result.
   */
  reason?: QuerySmsTemplateListResponseBodySmsTemplateListReason;
  /**
   * @remarks
   * The name of the associated signature.
   * 
   * @example
   * 阿里云
   */
  signatureName?: string;
  /**
   * @remarks
   * The code of the SMS template.
   * 
   * @example
   * SMS_1525***
   */
  templateCode?: string;
  /**
   * @remarks
   * The template content.
   * 
   * @example
   * 验证码为：${code}，您正在注册成为平台会员，感谢您的支持！
   */
  templateContent?: string;
  /**
   * @remarks
   * The name of the SMS template.
   * 
   * @example
   * 验证码模板
   */
  templateName?: string;
  /**
   * @remarks
   * The template type. Valid values:
   * 
   * - **0**: notification message.
   * - **1**: promotional message.
   * - **2**: verification code message.
   * - **6**: international or Hong Kong, Macao, and Taiwan message.
   * 
   * @example
   * 2
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
   * - The value OK indicates that the request was successful.
   * - For information about other status codes, see [Error codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
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
   * The number of templates displayed per page. Valid values: **1 to 50**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request. The unique identifier generated by Alibaba Cloud for the request can be used to troubleshoot and locate issues.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * The result list.
   */
  smsTemplateList?: QuerySmsTemplateListResponseBodySmsTemplateList[];
  /**
   * @remarks
   * The total number of templates returned.
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

