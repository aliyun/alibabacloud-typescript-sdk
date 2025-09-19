// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContainerPluginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The action mode of the rule. Valid values:
   * 
   * *   **1**: alerts
   * *   **2**: block
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 100012
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **0**: user-defined rule
   * *   **1**: built-in rule
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The rule items.
   */
  selectedPolicy?: string[];
  /**
   * @remarks
   * The images that are added to the whitelist.
   */
  whiteImages?: string[];
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      mode: 'Mode',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleType: 'RuleType',
      selectedPolicy: 'SelectedPolicy',
      whiteImages: 'WhiteImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      mode: 'number',
      ruleId: 'number',
      ruleName: 'string',
      ruleType: 'number',
      selectedPolicy: { 'type': 'array', 'itemType': 'string' },
      whiteImages: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.selectedPolicy)) {
      $dara.Model.validateArray(this.selectedPolicy);
    }
    if(Array.isArray(this.whiteImages)) {
      $dara.Model.validateArray(this.whiteImages);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

