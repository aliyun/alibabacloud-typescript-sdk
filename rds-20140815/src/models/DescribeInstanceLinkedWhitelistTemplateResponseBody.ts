// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates extends $dara.Model {
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

export class DescribeInstanceLinkedWhitelistTemplateResponseBodyData extends $dara.Model {
  insName?: string;
  templates?: DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates[];
  static names(): { [key: string]: string } {
    return {
      insName: 'InsName',
      templates: 'Templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      insName: 'string',
      templates: { 'type': 'array', 'itemType': DescribeInstanceLinkedWhitelistTemplateResponseBodyDataTemplates },
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

export class DescribeInstanceLinkedWhitelistTemplateResponseBody extends $dara.Model {
  code?: string;
  data?: DescribeInstanceLinkedWhitelistTemplateResponseBodyData;
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
      data: DescribeInstanceLinkedWhitelistTemplateResponseBodyData,
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

