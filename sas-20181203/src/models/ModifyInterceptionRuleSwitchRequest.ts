// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInterceptionRuleSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster that you want to modify.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * @example
   * ce5c29aba99694ade9ba85dc620b4****
   */
  clusterId?: string;
  /**
   * @remarks
   * The list of rule IDs to operate on. Separate multiple IDs with commas (,).
   * > You can call the [ListInterceptionRulePage](~~ListInterceptionRulePage~~) operation to obtain this parameter.
   * 
   * @example
   * 403287
   */
  ruleIds?: string;
  /**
   * @remarks
   * The switch status of the rule. Valid values:
   * 
   * - **1**: Enabled.
   * - **0**: Disabled.
   * 
   * @example
   * 1
   */
  ruleSwitch?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ruleIds: 'RuleIds',
      ruleSwitch: 'RuleSwitch',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ruleIds: 'string',
      ruleSwitch: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

