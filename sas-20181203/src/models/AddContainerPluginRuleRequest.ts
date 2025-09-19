// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContainerPluginRuleRequest extends $dara.Model {
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
   * The action that you want to specify for the rule. Valid values:
   * 
   * *   **1**: triggers alerts.
   * *   **2**: blocks escapes.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The name of the rule. The name must be 1 to 80 characters in length, and can contain letters, digits, hyphens (-), forward slashes (/), periods (.), and underscores (_). The names of rules that are created for the same user must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * tyest111
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the rule template. You can call the ListSystemClientRules operation to query the ID of the rule template.
   * 
   * This parameter is required.
   * 
   * @example
   * 86863
   */
  ruleTemplateId?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * 
   * *   **0**: custom rule
   * *   **1**: system rule
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The check items that are enabled for the rule.
   * 
   * This parameter is required.
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
      ruleName: 'RuleName',
      ruleTemplateId: 'RuleTemplateId',
      ruleType: 'RuleType',
      selectedPolicy: 'SelectedPolicy',
      whiteImages: 'WhiteImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      mode: 'number',
      ruleName: 'string',
      ruleTemplateId: 'number',
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

