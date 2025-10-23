// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTemplateByParamResponseBodyDataTemplate extends $dara.Model {
  /**
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  smsStatus?: number;
  smsTemplateCode?: number;
  smsrejectinfo?: number;
  templateComment?: string;
  /**
   * @example
   * 3xxxx8
   */
  templateId?: string;
  /**
   * @example
   * test
   */
  templateName?: string;
  /**
   * @example
   * 2
   */
  templateStatus?: string;
  templateType?: number;
  /**
   * @example
   * 1661830382
   */
  utcCreatetime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      smsStatus: 'SmsStatus',
      smsTemplateCode: 'SmsTemplateCode',
      smsrejectinfo: 'Smsrejectinfo',
      templateComment: 'TemplateComment',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateStatus: 'TemplateStatus',
      templateType: 'TemplateType',
      utcCreatetime: 'UtcCreatetime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      smsStatus: 'number',
      smsTemplateCode: 'number',
      smsrejectinfo: 'number',
      templateComment: 'string',
      templateId: 'string',
      templateName: 'string',
      templateStatus: 'string',
      templateType: 'number',
      utcCreatetime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponseBodyData extends $dara.Model {
  template?: QueryTemplateByParamResponseBodyDataTemplate[];
  static names(): { [key: string]: string } {
    return {
      template: 'template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      template: { 'type': 'array', 'itemType': QueryTemplateByParamResponseBodyDataTemplate },
    };
  }

  validate() {
    if(Array.isArray(this.template)) {
      $dara.Model.validateArray(this.template);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTemplateByParamResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 10Axxxxxxxxxxxx37
   */
  requestId?: string;
  /**
   * @example
   * 21
   */
  totalCount?: number;
  data?: QueryTemplateByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      data: QueryTemplateByParamResponseBodyData,
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

