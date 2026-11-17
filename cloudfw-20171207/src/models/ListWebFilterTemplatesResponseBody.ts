// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWebFilterTemplatesResponseBodyWebFilterTemplatesRuleActionStatistics extends $dara.Model {
  /**
   * @remarks
   * The number of web filtering rules whose action is Alert in the template.
   * 
   * @example
   * 2
   */
  alert?: number;
  /**
   * @remarks
   * The number of web filtering rules whose action is Allow in the template.
   * 
   * @example
   * 3
   */
  allow?: number;
  /**
   * @remarks
   * The number of web filtering rules whose action is Deny in the template.
   * 
   * @example
   * 1
   */
  deny?: number;
  static names(): { [key: string]: string } {
    return {
      alert: 'Alert',
      allow: 'Allow',
      deny: 'Deny',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alert: 'number',
      allow: 'number',
      deny: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebFilterTemplatesResponseBodyWebFilterTemplates extends $dara.Model {
  /**
   * @remarks
   * The creation time of the web filtering template. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1731465600
   */
  createTime?: number;
  /**
   * @remarks
   * The description of the web filtering template.
   * 
   * @example
   * Web filtering template for URL access control
   */
  description?: string;
  /**
   * @remarks
   * The name of the web filtering template.
   * 
   * @example
   * Web filtering template 01
   */
  name?: string;
  /**
   * @remarks
   * The statistics on the number of web filtering rules in the template categorized by action.
   */
  ruleActionStatistics?: ListWebFilterTemplatesResponseBodyWebFilterTemplatesRuleActionStatistics;
  /**
   * @remarks
   * The status of the web filtering template. Valid values:
   * - **Enable**: Enabled.
   * - **Disable**: Disabled.
   * 
   * @example
   * Enable
   */
  status?: string;
  /**
   * @remarks
   * The ID of the web filtering template.
   * 
   * @example
   * wft-3f2a9c1d4b5e6f70
   */
  webFilterTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      ruleActionStatistics: 'RuleActionStatistics',
      status: 'Status',
      webFilterTemplateId: 'WebFilterTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      description: 'string',
      name: 'string',
      ruleActionStatistics: ListWebFilterTemplatesResponseBodyWebFilterTemplatesRuleActionStatistics,
      status: 'string',
      webFilterTemplateId: 'string',
    };
  }

  validate() {
    if(this.ruleActionStatistics && typeof (this.ruleActionStatistics as any).validate === 'function') {
      (this.ruleActionStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWebFilterTemplatesResponseBody extends $dara.Model {
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
   * The total number of web filtering templates that meet the filter conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The list of web filtering templates.
   */
  webFilterTemplates?: ListWebFilterTemplatesResponseBodyWebFilterTemplates[];
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      webFilterTemplates: 'WebFilterTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      webFilterTemplates: { 'type': 'array', 'itemType': ListWebFilterTemplatesResponseBodyWebFilterTemplates },
    };
  }

  validate() {
    if(Array.isArray(this.webFilterTemplates)) {
      $dara.Model.validateArray(this.webFilterTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

