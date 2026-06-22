// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContainerPluginRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for requests and responses. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The action mode of the rule. Valid values:
   * - **1**: Alert.
   * - **2**: Block.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The rule ID.
   * > You can call the [ListSasContainerWebDefenseRule](https://help.aliyun.com/document_detail/2623606.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 100012
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * test
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule type. Valid values:
   * - **0**: User-defined.
   * - **1**: System built-in.
   * 
   * @example
   * 0
   */
  ruleType?: number;
  /**
   * @remarks
   * The list of rule items.
   */
  selectedPolicy?: string[];
  /**
   * @remarks
   * The list of whitelisted images.
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

