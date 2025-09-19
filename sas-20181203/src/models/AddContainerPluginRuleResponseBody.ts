// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddContainerPluginRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 219
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test2
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the switch.
   * 
   * @example
   * USER-CONTAINER-RULE-SWITCH-TYPE_xxxx
   */
  switchId?: string;
  static names(): { [key: string]: string } {
    return {
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      switchId: 'SwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ruleId: 'number',
      ruleName: 'string',
      switchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddContainerPluginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: AddContainerPluginRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
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
      data: AddContainerPluginRuleResponseBodyData,
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

