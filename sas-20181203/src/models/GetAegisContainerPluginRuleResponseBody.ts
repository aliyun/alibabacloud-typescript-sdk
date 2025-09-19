// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAegisContainerPluginRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The timestamp when the rule was created. Unit: milliseconds.
   * 
   * @example
   * 1671607025000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The timestamp when the rule was modified. Unit: milliseconds.
   * 
   * @example
   * 1671607025000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The action mode of the rule. Valid values:
   * 
   * *   **0**: allows escape behavior.
   * *   **1**: triggers alerts.
   * *   **2**: blocks escape behavior.
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The description of the rule.
   * 
   * @example
   * autoTest
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 21**
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * auto_test_rule-EmzIXZ
   */
  ruleName?: string;
  /**
   * @remarks
   * The template ID of the rule.
   * 
   * @example
   * 100**
   */
  ruleTemplateId?: string;
  /**
   * @remarks
   * The template name of the rule.
   * 
   * @example
   * template01
   */
  ruleTemplateName?: string;
  /**
   * @remarks
   * The rule items.
   */
  selectedPolicy?: string[];
  /**
   * @remarks
   * The ID of the switch.
   * 
   * @example
   * USER-CONTAINER-RULE-SWITCH-TYPE_***
   */
  switchId?: string;
  /**
   * @remarks
   * The images that are added to the whitelist.
   */
  whiteImages?: string[];
  static names(): { [key: string]: string } {
    return {
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      mode: 'Mode',
      ruleDescription: 'RuleDescription',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      ruleTemplateId: 'RuleTemplateId',
      ruleTemplateName: 'RuleTemplateName',
      selectedPolicy: 'SelectedPolicy',
      switchId: 'SwitchId',
      whiteImages: 'WhiteImages',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreate: 'number',
      gmtModified: 'number',
      mode: 'number',
      ruleDescription: 'string',
      ruleId: 'number',
      ruleName: 'string',
      ruleTemplateId: 'string',
      ruleTemplateName: 'string',
      selectedPolicy: { 'type': 'array', 'itemType': 'string' },
      switchId: 'string',
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

export class GetAegisContainerPluginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAegisContainerPluginRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 09969D2C-***0DEF8BF6F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAegisContainerPluginRuleResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

