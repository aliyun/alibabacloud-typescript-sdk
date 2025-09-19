// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyContainerPluginRuleResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule.
   * 
   * @example
   * 600640
   */
  ruleId?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * @example
   * test555
   */
  ruleName?: string;
  /**
   * @remarks
   * The switch ID.
   * 
   * @example
   * USER-CONTAINER-RULE-SWITCH-TYPE_xxx
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

export class ModifyContainerPluginRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The defense rule against container escapes.
   */
  data?: ModifyContainerPluginRuleResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D03DD0FD-6041-5107-AC00-383E28F1****
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
      data: ModifyContainerPluginRuleResponseBodyData,
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

