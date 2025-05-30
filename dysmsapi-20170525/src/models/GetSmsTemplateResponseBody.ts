// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSmsTemplateResponseBodyAuditInfo } from "./GetSmsTemplateResponseBodyAuditInfo";
import { GetSmsTemplateResponseBodyFileUrlList } from "./GetSmsTemplateResponseBodyFileUrlList";
import { GetSmsTemplateResponseBodyMoreDataFileUrlList } from "./GetSmsTemplateResponseBodyMoreDataFileUrlList";


export class GetSmsTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * Application scenario content.
   * 
   * @example
   * http://www.aliyun.com/
   */
  applyScene?: string;
  /**
   * @remarks
   * Audit information.
   */
  auditInfo?: GetSmsTemplateResponseBodyAuditInfo;
  /**
   * @remarks
   * Request status code.
   * 
   * * OK indicates a successful request.
   * * For other error codes, please refer to [API Error Codes](https://help.aliyun.com/document_detail/101346.html).
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The time when the SMS template was created.
   * 
   * @example
   * 2024-06-03 10:02:34
   */
  createDate?: string;
  /**
   * @remarks
   * File information, compatible with signatures created by the [AddSmsSign](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-addsmstemplate?spm) API.
   */
  fileUrlList?: GetSmsTemplateResponseBodyFileUrlList;
  /**
   * @remarks
   * International/Hong Kong, Macao, and Taiwan template type. When the **TemplateType** parameter is **3**, this parameter is required for international/Hong Kong, Macao, and Taiwan templates, with values:
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * 
   * @example
   * 0
   */
  intlType?: number;
  /**
   * @remarks
   * Description of the status code.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * Additional documentation information, supplementing uploaded business proof files or operational screenshots file list.
   */
  moreDataFileUrlList?: GetSmsTemplateResponseBodyMoreDataFileUrlList;
  /**
   * @remarks
   * Work order number.
   * 
   * This parameter is used by auditors when querying the audit. You need to provide this work order number when requesting expedited review.
   * 
   * @example
   * 2003019****
   */
  orderId?: string;
  /**
   * @remarks
   * The SMS signature associated with the template when applied.
   * 
   * @example
   * 阿里云
   */
  relatedSignName?: string;
  /**
   * @remarks
   * Explanation for the SMS template application, which is one of the reference information for template review.
   * 
   * @example
   * 申请验证码模板
   */
  remark?: string;
  /**
   * @remarks
   * The ID of this call request, which is a unique identifier generated by Alibaba Cloud for the request and can be used for troubleshooting and issue定位.
   * 
   * @example
   * 819BE656-D2E0-4858-8B21-B2E47708****
   */
  requestId?: string;
  /**
   * @remarks
   * SMS template code.
   * 
   * @example
   * SMS_20375****
   */
  templateCode?: string;
  /**
   * @remarks
   * Content of the SMS template.
   * 
   * @example
   * 您正在申请手机注册，验证码为：${code}，5分钟内有效！
   */
  templateContent?: string;
  /**
   * @remarks
   * Name of the SMS template.
   * 
   * @example
   * 验证码
   */
  templateName?: string;
  /**
   * @remarks
   * Template review status. Return values:
   * 
   * - **0**: Under review.
   * - **1**: Approved.
   * - **2**: Not approved, with reasons for failure returned. Please refer to [Handling Suggestions for Failed SMS Reviews](https://help.aliyun.com/zh/sms/user-guide/causes-of-application-failures-and-suggestions?spm=a2c4g.11186623.0.0.41fd339f3bPSCQ), invoke the [UpdateSmsTemplate](https://help.aliyun.com/zh/sms/developer-reference/api-dysmsapi-2017-05-25-updatesmstemplate?spm) API or modify the SMS template on the [Template Management](https://dysms.console.aliyun.com/domestic/text/template) page.
   * - **10**: Review canceled.
   * 
   * @example
   * 2
   */
  templateStatus?: string;
  /**
   * @remarks
   * Template identifier, indicating whether the template is user-defined or system-provided. Values:
   * 
   * - **2**: User-defined template.
   * 
   * - **3**: System-provided template.
   * 
   * @example
   * 2
   */
  templateTag?: number;
  /**
   * @remarks
   * SMS type. Values:
   * 
   * - **0**: Verification code.
   * - **1**: SMS notification.
   * - **2**: Promotional SMS.
   * - **3**: International/Hong Kong, Macao, and Taiwan messages.
   * 
   * > Only enterprise-certified users can apply for promotional SMS and international/Hong Kong, Macao, and Taiwan messages. For details on the differences between personal and enterprise user rights, please refer to [Usage Notes](https://help.aliyun.com/zh/sms/user-guide/usage-notes?spm=a2c4g.11186623.0.0.67447f576NJnE8).
   * 
   * @example
   * 0
   */
  templateType?: string;
  /**
   * @remarks
   * Template variable rules.
   * 
   * For detailed rules of template variables, refer to the [Example Document](https://help.aliyun.com/zh/sms/templaterule-template-variable-parameter-filling-example).
   * 
   * @example
   * {"code":"characterWithNumber"}
   */
  variableAttribute?: string;
  vendorAuditStatus?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      applyScene: 'ApplyScene',
      auditInfo: 'AuditInfo',
      code: 'Code',
      createDate: 'CreateDate',
      fileUrlList: 'FileUrlList',
      intlType: 'IntlType',
      message: 'Message',
      moreDataFileUrlList: 'MoreDataFileUrlList',
      orderId: 'OrderId',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      requestId: 'RequestId',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      templateTag: 'TemplateTag',
      templateType: 'TemplateType',
      variableAttribute: 'VariableAttribute',
      vendorAuditStatus: 'VendorAuditStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyScene: 'string',
      auditInfo: GetSmsTemplateResponseBodyAuditInfo,
      code: 'string',
      createDate: 'string',
      fileUrlList: GetSmsTemplateResponseBodyFileUrlList,
      intlType: 'number',
      message: 'string',
      moreDataFileUrlList: GetSmsTemplateResponseBodyMoreDataFileUrlList,
      orderId: 'string',
      relatedSignName: 'string',
      remark: 'string',
      requestId: 'string',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateStatus: 'string',
      templateTag: 'number',
      templateType: 'string',
      variableAttribute: 'string',
      vendorAuditStatus: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.auditInfo && typeof (this.auditInfo as any).validate === 'function') {
      (this.auditInfo as any).validate();
    }
    if(this.fileUrlList && typeof (this.fileUrlList as any).validate === 'function') {
      (this.fileUrlList as any).validate();
    }
    if(this.moreDataFileUrlList && typeof (this.moreDataFileUrlList as any).validate === 'function') {
      (this.moreDataFileUrlList as any).validate();
    }
    if(this.vendorAuditStatus) {
      $dara.Model.validateMap(this.vendorAuditStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

