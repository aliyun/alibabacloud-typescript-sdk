// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyGroupRequestNetRedirectPolicyRules extends $dara.Model {
  /**
   * @remarks
   * The type of the rule.
   * 
   * Valid values:
   * 
   * *   prc: an application package name.
   * *   domain: a domain name.
   * 
   * @example
   * domain
   */
  ruleType?: string;
  /**
   * @remarks
   * The name of the application package or domain name.
   * 
   * @example
   * *.example.com
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      ruleType: 'RuleType',
      target: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleType: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

