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
   * The rule action mode. Valid values:
   * - **0**: allow
   * - **1**: alert
   * - **2**: block
   * 
   * @example
   * 1
   */
  mode?: number;
  /**
   * @remarks
   * The rule description.
   * 
   * @example
   * autoTest
   */
  ruleDescription?: string;
  /**
   * @remarks
   * The rule ID.
   * 
   * @example
   * 21**
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule name.
   * 
   * @example
   * auto_test_rule-EmzIXZ
   */
  ruleName?: string;
  /**
   * @remarks
   * The rule template ID.
   * 
   * @example
   * 100**
   */
  ruleTemplateId?: string;
  /**
   * @remarks
   * The rule template name.
   * 
   * @example
   * template01
   */
  ruleTemplateName?: string;
  /**
   * @remarks
   * The list of selected rule items.
   */
  selectedPolicy?: string[];
  /**
   * @remarks
   * The ID of the corresponding switch.
   * 
   * @example
   * USER-CONTAINER-RULE-SWITCH-TYPE_***
   */
  switchId?: string;
  /**
   * @remarks
   * The list of whitelisted images.
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
   * The response data.
   */
  data?: GetAegisContainerPluginRuleResponseBodyData;
  /**
   * @remarks
   * The request ID, which is a unique identifier that Alibaba Cloud generates for the request. You can use the ID to troubleshoot issues.
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

