// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePolicyGroupsResponseBodyDescribePolicyGroupsNetRedirectRule extends $dara.Model {
  /**
   * @remarks
   * The rule content.
   * 
   * @example
   * *.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether the rule is allowed.
   * 
   * Valid values:
   * 
   * *   allow
   * *   block
   * 
   * @example
   * allow
   */
  policy?: string;
  /**
   * @remarks
   * The rule type.
   * 
   * Valid values:
   * 
   * *   prc: process
   * *   domain: domain name
   * 
   * @example
   * domain
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      policy: 'Policy',
      ruleType: 'RuleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      policy: 'string',
      ruleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

