// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvancedQueryTemplateResponseBodyTemplatePageTemplateList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the simple query mode is enabled.
   * 
   * @example
   * false
   */
  simpleQuery?: boolean;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * utpl-7OaxbyJATDaoLOgZRc****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * example-template
   */
  templateName?: string;
  /**
   * @remarks
   * The query statement.
   * 
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The maximum number of results returned.
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: string;
  /**
   * @remarks
   * The list of template details.
   */
  templateList?: DescribeAdvancedQueryTemplateResponseBodyTemplatePageTemplateList[];
  /**
   * @remarks
   * The total number of records.
   * 
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
   * @remarks
   * The request ID.
   * 
   * @example
   * 1EC1FDC7-6D01-559F-852C-30D86E9EEB3F
   */
  requestId?: string;
  /**
   * @remarks
   * The paginated list of templates.
   */
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

