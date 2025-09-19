// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContainerDefenseRuleRequestConditions extends $dara.Model {
  /**
   * @remarks
   * The condition type. Valid values:
   * 
   * *   **ruleName**: the rule name
   * 
   * @example
   * ruleName
   */
  type?: string;
  /**
   * @remarks
   * The rule content.
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
   * The details of the condition.
   */
  conditions?: ListContainerDefenseRuleRequestConditions[];
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether to query system rules.
   * 
   * >  This parameter is deprecated.
   * 
   * @example
   * 1
   */
  isDefaultRule?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 20. If you leave this parameter empty, 20 entries are returned on each page.
   * 
   * >  We recommend that you do not leave this parameter empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The rule type. Valid values:
   * 
   * *   1: system rule
   * *   2: user-defined rule
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

