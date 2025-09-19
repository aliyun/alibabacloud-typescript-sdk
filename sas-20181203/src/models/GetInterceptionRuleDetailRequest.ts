// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInterceptionRuleDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * c7f60fdabc84xxx
   */
  clusterId?: string;
  /**
   * @remarks
   * The ID of the rule.
   * 
   * > You can call the [ListInterceptionRulePage](~~ListInterceptionRulePage~~) operation to query the IDs of rules.
   * 
   * This parameter is required.
   * 
   * @example
   * 500002
   */
  ruleId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      ruleId: 'RuleId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      ruleId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

