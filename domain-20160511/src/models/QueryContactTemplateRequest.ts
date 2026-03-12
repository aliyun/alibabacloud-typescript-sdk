// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactTemplateRequest extends $dara.Model {
  auditStatus?: string;
  CCompany?: string;
  contactTemplateId?: number;
  defaultTemplate?: boolean;
  ECompany?: string;
  lang?: string;
  pageNum?: number;
  pageSize?: number;
  regType?: string;
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      CCompany: 'CCompany',
      contactTemplateId: 'ContactTemplateId',
      defaultTemplate: 'DefaultTemplate',
      ECompany: 'ECompany',
      lang: 'Lang',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      regType: 'RegType',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      CCompany: 'string',
      contactTemplateId: 'number',
      defaultTemplate: 'boolean',
      ECompany: 'string',
      lang: 'string',
      pageNum: 'number',
      pageSize: 'number',
      regType: 'string',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

