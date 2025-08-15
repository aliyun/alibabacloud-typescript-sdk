// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvancedQueryTemplateResponseBodyTemplatePageTemplateList extends $dara.Model {
  /**
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
   * @example
   * utpl-7OaxbyJATDaoLOgZRcV5RQ
   */
  templateId?: string;
  templateName?: string;
  /**
   * @example
   * event.userIdentity.type: root-account AND event.userIdentity.accessKeyId: *
   */
  templateSql?: string;
  static names(): { [key: string]: string } {
    return {
      simpleQuery: 'SimpleQuery',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateSql: 'TemplateSql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      simpleQuery: 'boolean',
      templateId: 'string',
      templateName: 'string',
      templateSql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvancedQueryTemplateResponseBodyTemplatePage extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 20
   */
  pageSize?: string;
  templateList?: DescribeAdvancedQueryTemplateResponseBodyTemplatePageTemplateList[];
  /**
   * @example
   * 5
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      templateList: 'TemplateList',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'string',
      pageSize: 'string',
      templateList: { 'type': 'array', 'itemType': DescribeAdvancedQueryTemplateResponseBodyTemplatePageTemplateList },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvancedQueryTemplateResponseBody extends $dara.Model {
  /**
   * @example
   * 1EC1FDC7-6D01-559F-852C-30D86E9EEB3F
   */
  requestId?: string;
  templatePage?: DescribeAdvancedQueryTemplateResponseBodyTemplatePage;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templatePage: 'TemplatePage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templatePage: DescribeAdvancedQueryTemplateResponseBodyTemplatePage,
    };
  }

  validate() {
    if(this.templatePage && typeof (this.templatePage as any).validate === 'function') {
      (this.templatePage as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

