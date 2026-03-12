// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryContactTemplateResponseBodyContactTemplatesContactTemplate extends $dara.Model {
  auditStatus?: string;
  CCity?: string;
  CCompany?: string;
  CCountry?: string;
  CName?: string;
  CProvince?: string;
  CVenu?: string;
  contactTemplateId?: number;
  createTime?: string;
  defaultTemplate?: boolean;
  ECity?: string;
  ECompany?: string;
  EName?: string;
  EProvince?: string;
  EVenu?: string;
  email?: string;
  emailVerificationStatus?: number;
  postalCode?: string;
  regType?: string;
  telArea?: string;
  telExt?: string;
  telMain?: string;
  updateTime?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      auditStatus: 'AuditStatus',
      CCity: 'CCity',
      CCompany: 'CCompany',
      CCountry: 'CCountry',
      CName: 'CName',
      CProvince: 'CProvince',
      CVenu: 'CVenu',
      contactTemplateId: 'ContactTemplateId',
      createTime: 'CreateTime',
      defaultTemplate: 'DefaultTemplate',
      ECity: 'ECity',
      ECompany: 'ECompany',
      EName: 'EName',
      EProvince: 'EProvince',
      EVenu: 'EVenu',
      email: 'Email',
      emailVerificationStatus: 'EmailVerificationStatus',
      postalCode: 'PostalCode',
      regType: 'RegType',
      telArea: 'TelArea',
      telExt: 'TelExt',
      telMain: 'TelMain',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditStatus: 'string',
      CCity: 'string',
      CCompany: 'string',
      CCountry: 'string',
      CName: 'string',
      CProvince: 'string',
      CVenu: 'string',
      contactTemplateId: 'number',
      createTime: 'string',
      defaultTemplate: 'boolean',
      ECity: 'string',
      ECompany: 'string',
      EName: 'string',
      EProvince: 'string',
      EVenu: 'string',
      email: 'string',
      emailVerificationStatus: 'number',
      postalCode: 'string',
      regType: 'string',
      telArea: 'string',
      telExt: 'string',
      telMain: 'string',
      updateTime: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactTemplateResponseBodyContactTemplates extends $dara.Model {
  contactTemplate?: QueryContactTemplateResponseBodyContactTemplatesContactTemplate[];
  static names(): { [key: string]: string } {
    return {
      contactTemplate: 'ContactTemplate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplate: { 'type': 'array', 'itemType': QueryContactTemplateResponseBodyContactTemplatesContactTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.contactTemplate)) {
      $dara.Model.validateArray(this.contactTemplate);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryContactTemplateResponseBody extends $dara.Model {
  contactTemplates?: QueryContactTemplateResponseBodyContactTemplates;
  currentPageNum?: number;
  nextPage?: boolean;
  pageSize?: number;
  prePage?: boolean;
  requestId?: string;
  totalItemNum?: number;
  totalPageNum?: number;
  static names(): { [key: string]: string } {
    return {
      contactTemplates: 'ContactTemplates',
      currentPageNum: 'CurrentPageNum',
      nextPage: 'NextPage',
      pageSize: 'PageSize',
      prePage: 'PrePage',
      requestId: 'RequestId',
      totalItemNum: 'TotalItemNum',
      totalPageNum: 'TotalPageNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactTemplates: QueryContactTemplateResponseBodyContactTemplates,
      currentPageNum: 'number',
      nextPage: 'boolean',
      pageSize: 'number',
      prePage: 'boolean',
      requestId: 'string',
      totalItemNum: 'number',
      totalPageNum: 'number',
    };
  }

  validate() {
    if(this.contactTemplates && typeof (this.contactTemplates as any).validate === 'function') {
      (this.contactTemplates as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

