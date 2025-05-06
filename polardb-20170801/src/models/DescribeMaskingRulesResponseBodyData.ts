// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMaskingRulesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Details about the masking rules.
   */
  ruleList?: string[];
  /**
   * @remarks
   * The version of the masking rule. Valid values: v1 and v2. Default value: v1
   * 
   * @example
   * v1
   */
  ruleVersion?: string;
  static names(): { [key: string]: string } {
    return {
      ruleList: 'RuleList',
      ruleVersion: 'RuleVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleList: { 'type': 'array', 'itemType': 'string' },
      ruleVersion: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ruleList)) {
      $dara.Model.validateArray(this.ruleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

