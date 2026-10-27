// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContainerDefenseRuleRequestConditions extends $dara.Model {
  /**
   * @remarks
   * The condition type. The following types are supported:
   * 
   * - **ruleName**: the rule name.
   * 
   * @example
   * ruleName
   */
  type?: string;
  /**
   * @remarks
   * The condition content.
   * 
   * @example
   * auto-test-rule-**
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContainerDefenseRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of conditions.
   */
  conditions?: ListContainerDefenseRuleRequestConditions[];
  /**
   * @remarks
   * Specifies the page number from which to display the query results. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the rule is a system default rule. <notice>**[Deprecated]**</notice>
   * 
   * @example
   * 1
   */
  isDefaultRule?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Specifies the maximum number of entries to return on each page in a paging query. Default value: 20. If this parameter is left empty, 20 entries are returned by default.
   * > Specify a value for PageSize.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * - 1: system rule
   * - 2: user rule
   * 
   * @example
   * 1
   */
  ruleType?: number;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      currentPage: 'CurrentPage',
      isDefaultRule: 'IsDefaultRule',
      lang: 'Lang',
      pageSize: 'PageSize',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': ListContainerDefenseRuleRequestConditions },
      currentPage: 'number',
      isDefaultRule: 'number',
      lang: 'string',
      pageSize: 'number',
      ruleType: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

