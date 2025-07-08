// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDigitalTemplateDetailNewResponseBodyOssKeys } from "./QueryDigitalTemplateDetailNewResponseBodyOssKeys";
import { QueryDigitalTemplateDetailNewResponseBodyTags } from "./QueryDigitalTemplateDetailNewResponseBodyTags";


export class QueryDigitalTemplateDetailNewResponseBody extends $dara.Model {
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
  ossKeys?: QueryDigitalTemplateDetailNewResponseBodyOssKeys;
  passErrType?: string;
  remark?: string;
  requestId?: string;
  signType?: number;
  smsContent?: string;
  supportVendor?: string;
  tags?: QueryDigitalTemplateDetailNewResponseBodyTags;
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
      ossKeys: 'OssKeys',
      passErrType: 'PassErrType',
      remark: 'Remark',
      requestId: 'RequestId',
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
      isAnyParam: 'boolean',
      isDefaultTemplate: 'boolean',
      isRecently: 'boolean',
      orderId: 'string',
      ossKeys: QueryDigitalTemplateDetailNewResponseBodyOssKeys,
      passErrType: 'string',
      remark: 'string',
      requestId: 'string',
      signType: 'number',
      smsContent: 'string',
      supportVendor: 'string',
      tags: QueryDigitalTemplateDetailNewResponseBodyTags,
      templateCode: 'string',
      templateContent: 'string',
      templateName: 'string',
      templateRule: 'string',
    };
  }

  validate() {
    if(this.ossKeys && typeof (this.ossKeys as any).validate === 'function') {
      (this.ossKeys as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

