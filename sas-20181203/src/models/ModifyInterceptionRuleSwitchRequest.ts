// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInterceptionRuleSwitchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of clusters.
   * 
   * @example
   * ce5c29aba99694ade9ba85dc620b4****
   */
  clusterId?: string;
  /**
   * @remarks
   * The IDs of the rules whose status you want to change. Separate multiple IDs with commas (,).
   * 
   * > You can call the [ListInterceptionRulePage](https://help.aliyun.com/document_detail/182997.html) operation to query the IDs of rules.
   * 
   * @example
   * 403287
   */
  ruleIds?: string;
  /**
   * @remarks
   * Specifies whether the rule is enabled. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
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

