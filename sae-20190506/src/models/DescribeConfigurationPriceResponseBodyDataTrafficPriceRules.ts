// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigurationPriceResponseBodyDataTrafficPriceRules extends $dara.Model {
  /**
   * @remarks
   * The name of the discount rule.
   */
  name?: string;
  /**
   * @remarks
   * The ID of the discount rule.
   * 
   * @example
   * 2000010******
   */
  ruleDescId?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      ruleDescId: 'RuleDescId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      ruleDescId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

