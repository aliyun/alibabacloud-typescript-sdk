// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDigitalTemplateLastRangeNewResponseBodyListSmsTemplate extends $dara.Model {
  auditInfo?: string;
  auditRemarkInfo?: string;
  auditState?: string;
  bizType?: string;
  expireDateStr?: string;
  gmtCreateStr?: string;
  id?: string;
  isAnyParam?: boolean;
  isDefaultTemplate?: boolean;
  isRecently?: boolean;
  orderId?: string;
  passErrType?: string;
  remark?: string;
  signType?: number;
  smsContent?: string;
  supportVendor?: string;
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
      isAnyParam: 'IsAnyParam',
      isDefaultTemplate: 'IsDefaultTemplate',
      isRecently: 'IsRecently',
      orderId: 'OrderId',
      passErrType: 'PassErrType',
      remark: 'Remark',
      signType: 'SignType',
      smsContent: 'SmsContent',
      supportVendor: 'SupportVendor',
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
      isAnyParam: 'boolean',
      isDefaultTemplate: 'boolean',
      isRecently: 'boolean',
      orderId: 'string',
      passErrType: 'string',
      remark: 'string',
      signType: 'number',
      smsContent: 'string',
      supportVendor: 'string',
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

