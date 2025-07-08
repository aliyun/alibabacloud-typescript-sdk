// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySmsTemplateListNewResponseBodyListSmsTemplateTags } from "./QuerySmsTemplateListNewResponseBodyListSmsTemplateTags";


export class QuerySmsTemplateListNewResponseBodyListSmsTemplate extends $dara.Model {
  auditInfo?: string;
  auditRemarkInfo?: string;
  auditState?: string;
  bizType?: string;
  expireDateStr?: string;
  gmtCreateStr?: string;
  id?: string;
  intelligentApproval?: boolean;
  intlType?: number;
  isAnyParam?: boolean;
  isDefaultTemplate?: boolean;
  isRecently?: boolean;
  orderCount?: number;
  orderId?: string;
  passErrType?: string;
  productUrl?: string;
  relatedSignName?: string;
  remark?: string;
  signType?: number;
  smsContent?: string;
  supportVendor?: string;
  tags?: QuerySmsTemplateListNewResponseBodyListSmsTemplateTags;
  templateCode?: string;
  templateContent?: string;
  templateName?: string;
  templateRule?: string;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditRemarkInfo: 'AuditRemarkInfo',
      auditState: 'AuditState',
      bizType: 'BizType',
      expireDateStr: 'ExpireDateStr',
      gmtCreateStr: 'GmtCreateStr',
      id: 'Id',
      intelligentApproval: 'IntelligentApproval',
      intlType: 'IntlType',
      isAnyParam: 'IsAnyParam',
      isDefaultTemplate: 'IsDefaultTemplate',
      isRecently: 'IsRecently',
      orderCount: 'OrderCount',
      orderId: 'OrderId',
      passErrType: 'PassErrType',
      productUrl: 'ProductUrl',
      relatedSignName: 'RelatedSignName',
      remark: 'Remark',
      signType: 'SignType',
      smsContent: 'SmsContent',
      supportVendor: 'SupportVendor',
      tags: 'Tags',
      templateCode: 'TemplateCode',
      templateContent: 'TemplateContent',
      templateName: 'TemplateName',
      templateRule: 'TemplateRule',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditRemarkInfo: 'string',
      auditState: 'string',
      bizType: 'string',
      expireDateStr: 'string',
      gmtCreateStr: 'string',
      id: 'string',
      intelligentApproval: 'boolean',
      intlType: 'number',
      isAnyParam: 'boolean',
      isDefaultTemplate: 'boolean',
      isRecently: 'boolean',
      orderCount: 'number',
      orderId: 'string',
      passErrType: 'string',
      productUrl: 'string',
      relatedSignName: 'string',
      remark: 'string',
      signType: 'number',
      smsContent: 'string',
      supportVendor: 'string',
      tags: QuerySmsTemplateListNewResponseBodyListSmsTemplateTags,
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

