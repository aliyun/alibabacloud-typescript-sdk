// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationTemplateResponseBodyApplicationTemplatesBuiltInApplicationActionStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of built-in applications whose final effective action is Alert.
   * 
   * @example
   * 5
   */
  alertApplicationCount?: number;
  /**
   * @remarks
   * The number of built-in applications whose final effective action is Allow.
   * 
   * @example
   * 10
   */
  allowApplicationCount?: number;
  /**
   * @remarks
   * The number of built-in applications whose final effective action is Deny.
   * 
   * @example
   * 2
   */
  denyApplicationCount?: number;
  static names(): { [key: string]: string } {
    return {
      alertApplicationCount: 'AlertApplicationCount',
      allowApplicationCount: 'AllowApplicationCount',
      denyApplicationCount: 'DenyApplicationCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertApplicationCount: 'number',
      allowApplicationCount: 'number',
      denyApplicationCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationTemplateResponseBodyApplicationTemplates extends $dara.Model {
  /**
   * @remarks
   * The application template ID.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The name of the application template.
   * 
   * @example
   * Application template 01
   */
  applicationTemplateName?: string;
  /**
   * @remarks
   * The statistics on the number of built-in applications in the template, categorized by the final effective action.
   */
  builtInApplicationActionStatistics?: ListApplicationTemplateResponseBodyApplicationTemplatesBuiltInApplicationActionStatistics;
  /**
   * @remarks
   * The switch status of built-in application control. Valid values:
   * - **Enable**: enabled
   * - **Disable**: disabled
   * 
   * @example
   * Enable
   */
  builtInApplicationStatus?: string;
  /**
   * @remarks
   * The creation time of the application template. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731465600
   */
  createTime?: number;
  /**
   * @remarks
   * The number of custom application rules under the template.
   * 
   * @example
   * 3
   */
  customRuleCount?: number;
  /**
   * @remarks
   * The switch status of custom application rules. Valid values:
   * - **Enable**: enabled
   * - **Disable**: disabled
   * 
   * @example
   * Enable
   */
  customRuleStatus?: string;
  /**
   * @remarks
   * The description of the application template.
   * 
   * @example
   * Office network application control
   */
  description?: string;
  /**
   * @remarks
   * The master switch status of the application template. Valid values:
   * - **Enable**: enabled
   * - **Disable**: disabled
   * 
   * @example
   * Enable
   */
  templateStatus?: string;
  /**
   * @remarks
   * The action for unrecognized applications. Valid values:
   * - **Allow**: allow
   * - **Alert**: monitor
   * - **Deny**: block
   * 
   * @example
   * Alert
   */
  unknownAction?: string;
  /**
   * @remarks
   * The last modification time of the application template. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731469200
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      applicationTemplateId: 'ApplicationTemplateId',
      applicationTemplateName: 'ApplicationTemplateName',
      builtInApplicationActionStatistics: 'BuiltInApplicationActionStatistics',
      builtInApplicationStatus: 'BuiltInApplicationStatus',
      createTime: 'CreateTime',
      customRuleCount: 'CustomRuleCount',
      customRuleStatus: 'CustomRuleStatus',
      description: 'Description',
      templateStatus: 'TemplateStatus',
      unknownAction: 'UnknownAction',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplateId: 'string',
      applicationTemplateName: 'string',
      builtInApplicationActionStatistics: ListApplicationTemplateResponseBodyApplicationTemplatesBuiltInApplicationActionStatistics,
      builtInApplicationStatus: 'string',
      createTime: 'number',
      customRuleCount: 'number',
      customRuleStatus: 'string',
      description: 'string',
      templateStatus: 'string',
      unknownAction: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.builtInApplicationActionStatistics && typeof (this.builtInApplicationActionStatistics as any).validate === 'function') {
      (this.builtInApplicationActionStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of application templates.
   */
  applicationTemplates?: ListApplicationTemplateResponseBodyApplicationTemplates[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of application templates that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      applicationTemplates: 'ApplicationTemplates',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationTemplates: { 'type': 'array', 'itemType': ListApplicationTemplateResponseBodyApplicationTemplates },
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.applicationTemplates)) {
      $dara.Model.validateArray(this.applicationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

