// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
  id?: number;
  ips?: string;
  templateId?: number;
  templateName?: string;
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      ips: 'Ips',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      ips: 'string',
      templateId: 'number',
      templateName: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllWhitelistTemplateResponseBodyData extends $dara.Model {
  currPageNumbers?: number;
  hasNext?: boolean;
  hasPrev?: boolean;
  maxRecordsPerPage?: number;
  templates?: DescribeAllWhitelistTemplateResponseBodyDataTemplates[];
  totalPageNumbers?: number;
  totalRecords?: number;
  static names(): { [key: string]: string } {
    return {
      currPageNumbers: 'CurrPageNumbers',
      hasNext: 'HasNext',
      hasPrev: 'HasPrev',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      templates: 'Templates',
      totalPageNumbers: 'TotalPageNumbers',
      totalRecords: 'TotalRecords',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currPageNumbers: 'number',
      hasNext: 'boolean',
      hasPrev: 'boolean',
      maxRecordsPerPage: 'number',
      templates: { 'type': 'array', 'itemType': DescribeAllWhitelistTemplateResponseBodyDataTemplates },
      totalPageNumbers: 'number',
      totalRecords: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAllWhitelistTemplateResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeAllWhitelistTemplateResponseBodyData;
  httpStatusCode?: number;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAllWhitelistTemplateResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

