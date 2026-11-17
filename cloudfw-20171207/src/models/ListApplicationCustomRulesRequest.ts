// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationCustomRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application custom rule. Exact match is supported.
   * 
   * @example
   * acr-7d2e4f6a8b0c1d3e
   */
  applicationCustomRuleId?: string;
  /**
   * @remarks
   * The name of the custom rule. Fuzzy match is supported.
   * 
   * @example
   * Custom rule
   */
  applicationCustomRuleName?: string;
  /**
   * @remarks
   * The ID of the application. This parameter is used to filter custom rules associated with the application. The application must exist in the built-in application signature library.
   * 
   * @example
   * 10012150000
   */
  applicationId?: number;
  /**
   * @remarks
   * The ID of the application template to query. This parameter is required. The template must exist within the current Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * ati-4f0691c56b8d4f06
   */
  applicationTemplateId?: string;
  /**
   * @remarks
   * The language of the returned information. Valid values:
   * - **zh**: Chinese. This is the default value.
   * - **en**: English.
   * This parameter determines whether the returned application names are in Chinese or English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The page number. Valid values: integers greater than or equal to 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: integers greater than or equal to 1. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The priority of the rule. Exact match is supported. Valid values: integers from 1 to 200.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The action of the rule. Exact match is supported. Valid values:
   * - **Allow**: allows the traffic.
   * - **Alert**: monitors the traffic.
   * - **Deny**: blocks the traffic.
   * 
   * @example
   * Deny
   */
  ruleAction?: string;
  static names(): { [key: string]: string } {
    return {
      applicationCustomRuleId: 'ApplicationCustomRuleId',
      applicationCustomRuleName: 'ApplicationCustomRuleName',
      applicationId: 'ApplicationId',
      applicationTemplateId: 'ApplicationTemplateId',
      lang: 'Lang',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      priority: 'Priority',
      ruleAction: 'RuleAction',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationCustomRuleId: 'string',
      applicationCustomRuleName: 'string',
      applicationId: 'number',
      applicationTemplateId: 'string',
      lang: 'string',
      pageNo: 'number',
      pageSize: 'number',
      priority: 'number',
      ruleAction: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

