// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsTemplateResponseBodyData extends $dara.Model {
  auditResult?: string;
  bizUrl?: string;
  businessType?: number;
  createDate?: number;
  defaultFlag?: boolean;
  remark?: string;
  smsTemplateCode?: string;
  smsTemplateContent?: string;
  smsTemplateName?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      auditResult: 'AuditResult',
      bizUrl: 'BizUrl',
      businessType: 'BusinessType',
      createDate: 'CreateDate',
      defaultFlag: 'DefaultFlag',
      remark: 'Remark',
      smsTemplateCode: 'SmsTemplateCode',
      smsTemplateContent: 'SmsTemplateContent',
      smsTemplateName: 'SmsTemplateName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditResult: 'string',
      bizUrl: 'string',
      businessType: 'number',
      createDate: 'number',
      defaultFlag: 'boolean',
      remark: 'string',
      smsTemplateCode: 'string',
      smsTemplateContent: 'string',
      smsTemplateName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsTemplateResponseBody extends $dara.Model {
  code?: string;
  data?: ListSmsTemplateResponseBodyData[];
  message?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListSmsTemplateResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

