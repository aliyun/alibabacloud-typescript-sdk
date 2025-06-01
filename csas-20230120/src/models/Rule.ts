// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Rule extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  combinator?: string;
  id?: string;
  /**
   * **if can be null:**
   * true
   */
  name?: string;
  /**
   * **if can be null:**
   * true
   */
  operator?: string;
  /**
   * **if can be null:**
   * true
   */
  ruleSubType?: string;
  /**
   * **if can be null:**
   * true
   */
  ruleType?: string;
  rules?: Rule[];
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

