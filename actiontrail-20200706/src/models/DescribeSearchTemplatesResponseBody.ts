// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSearchTemplatesResponseBodyTemplateList extends $dara.Model {
  /**
   * @remarks
   * The list of dashboards. This parameter is deprecated.
   * 
   * > This parameter is deprecated and no longer returns valid data. The returned value is always an empty array `[]`. Stop using this parameter and remove its dependency from your code.
   * 
   * @example
   * []
   */
  charts?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Events of Console Logons by Using Cloud Account
   */
  description?: string;
  /**
   * @remarks
   * The filter conditions.<br>This parameter is returned as a JSON-serialized string that contains a structured list of filter conditions. Use a standard JSON deserialization tool for your programming language to parse the string into an array of objects.
   * 
   * @example
   * [{"key":"event.eventName","value":"ConsoleSignin","type":"system","display":true,"displayKey":"event.eventName","displayValue":"ConsoleSignin","displayValueEn":"ConsoleSignin"},{"oper":"AND","key":"event.userIdentity.type","value":"root-account","type":"system","display":true,"displayKey":"event.userIdentity.type","displayValueEn":"Alibaba Cloud Account"}]
   */
  params?: string;
  /**
   * @remarks
   * The scenario ID.
   * 
   * @example
   * sc-lpYrjKouRfy3MK-wteJW_Q
   */
  sceneId?: string;
  /**
   * @remarks
   * The query statement.
   * 
   * @example
   * select "event.userIdentity.accountId" as account_id, count(1) as cnt group by account_id limit 1000
   */
  sql?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * tpl-wCZAFWx3Spq6CO9Ymp****
   */
  templateId?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Events of Console Logons by Using Cloud Account
   */
  templateName?: string;
  /**
   * @remarks
   * The identifier for the template category.
   * 
   * @example
   * identity.rootLogin
   */
  token?: string;
  /**
   * @remarks
   * The template type.
   * 
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
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of results returned.
   * 
   * Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 787DD24A-E322-5C0D-A730-057FE62B****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of template details.
   */
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

