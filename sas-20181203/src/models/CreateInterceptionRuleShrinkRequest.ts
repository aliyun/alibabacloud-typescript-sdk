// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInterceptionRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster.
   * 
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to query the IDs of container clusters.
   * 
   * This parameter is required.
   * 
   * @example
   * c35xxxa416
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * sas-test-cnnf
   */
  clusterName?: string;
  /**
   * @remarks
   * The information about the destination network object. The value of this parameter contains the following fields:
   * 
   * *   targetId: the ID of the destination network object. You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to query the ID.
   * *   ports: the destination port ranges.
   * 
   * @example
   * [
   *       {
   *             "targetId": 600036,
   *             "ports": [
   *                   "1/65535"
   *             ]
   *       }
   * ]
   */
  dstTargetListShrink?: string;
  /**
   * @remarks
   * The action on traffic. Valid values:
   * 
   * *   **1**: blocks traffic.
   * *   **2**: allows traffic and generates alerts.
   * *   **3**: allows traffic and does not generate alerts.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  interceptType?: number;
  /**
   * @remarks
   * The priority of the defense rule. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @remarks
   * The name of the defense rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies the status of the defense rule. Valid values:
   * 
   * *   **0**: disables the rule.
   * *   **1**: enables the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The type of the defense rule. Valid values:
   * 
   * *   customize: custom rule
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The source network object. The value of this parameter contains the following field:
   * 
   * *   targetId: the ID of the source network object. You can call the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to query the ID.
   * 
   * @example
   * {"targetId":301940}
   */
  srcTargetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      dstTargetListShrink: 'DstTargetList',
      interceptType: 'InterceptType',
      orderIndex: 'OrderIndex',
      ruleName: 'RuleName',
      ruleSwitch: 'RuleSwitch',
      ruleType: 'RuleType',
      srcTargetShrink: 'SrcTarget',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      dstTargetListShrink: 'string',
      interceptType: 'number',
      orderIndex: 'number',
      ruleName: 'string',
      ruleSwitch: 'number',
      ruleType: 'string',
      srcTargetShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

