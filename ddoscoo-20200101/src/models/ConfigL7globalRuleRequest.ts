// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigL7GlobalRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{\\"RuleId\\":\\"global_01\\",\\"Action\\":\\"block\\",\\"Enabled\\":0}]
   */
  ruleAttr?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      ruleAttr: 'RuleAttr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      ruleAttr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

