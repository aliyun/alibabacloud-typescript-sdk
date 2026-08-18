// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Rule extends $dara.Model {
  /**
   * @remarks
   * The logical relationship between rules at the same level. Valid values:
   * - **AND**: All rules at the same level must be hit.
   * - **OR**: Any one rule at the same level can be hit.
   * 
   * @example
   * AND
   * 
   * **if can be null:**
   * true
   */
  combinator?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 1361
   */
  id?: string;
  /**
   * @remarks
   * The endpoint device attribute field to match. Required for leaf rules.
   * 
   * @example
   * mac
   * 
   * **if can be null:**
   * true
   */
  name?: string;
  /**
   * @remarks
   * The matching operator. Required for leaf rules.
   * 
   * @example
   * equal
   * 
   * **if can be null:**
   * true
   */
  operator?: string;
  /**
   * @remarks
   * The rule subtype.
   * 
   * @example
   * windows
   * 
   * **if can be null:**
   * true
   */
  ruleSubType?: string;
  /**
   * @remarks
   * The rule type.
   * 
   * @example
   * device_info
   * 
   * **if can be null:**
   * true
   */
  ruleType?: string;
  /**
   * @remarks
   * The list of matching rules. At least one rule must be included.
   */
  rules?: Rule[];
  /**
   * @remarks
   * The set of values to match. Required for leaf rules and cannot be empty.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      combinator: 'Combinator',
      id: 'Id',
      name: 'Name',
      operator: 'Operator',
      ruleSubType: 'RuleSubType',
      ruleType: 'RuleType',
      rules: 'Rules',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      combinator: 'string',
      id: 'string',
      name: 'string',
      operator: 'string',
      ruleSubType: 'string',
      ruleType: 'string',
      rules: { 'type': 'array', 'itemType': Rule },
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.rules)) {
      $dara.Model.validateArray(this.rules);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

