// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchTemplatesResponseBodyTemplateList extends $dara.Model {
  /**
   * @example
   * []
   */
  charts?: string;
  description?: string;
  params?: string;
  /**
   * @example
   * sc-lpYrjKouRfy3MK-wteJW_Q
   */
  sceneId?: string;
  /**
   * @example
   * select \\"event.userIdentity.accountId\\" as account_id, count(1) as cnt group by account_id limit 1000
   */
  sql?: string;
  /**
   * @example
   * tpl-wCZAFWx3Spq6CO9Ymp****
   */
  templateId?: string;
  templateName?: string;
  /**
   * @example
   * identity.rootLogin
   */
  token?: string;
  /**
   * @example
   * audit
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      charts: 'Charts',
      description: 'Description',
      params: 'Params',
      sceneId: 'SceneId',
      sql: 'Sql',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      token: 'Token',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charts: 'string',
      description: 'string',
      params: 'string',
      sceneId: 'string',
      sql: 'string',
      templateId: 'string',
      templateName: 'string',
      token: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSearchTemplatesResponseBody extends $dara.Model {
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
   * 787DD24A-E322-5C0D-A730-057FE62B****
   */
  requestId?: string;
  templateList?: DescribeSearchTemplatesResponseBodyTemplateList[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      templateList: 'TemplateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      templateList: { 'type': 'array', 'itemType': DescribeSearchTemplatesResponseBodyTemplateList },
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

