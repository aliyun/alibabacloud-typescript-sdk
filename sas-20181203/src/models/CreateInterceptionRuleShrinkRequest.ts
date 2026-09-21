// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateInterceptionRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster to query.
   * > You can call the [DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~) operation to obtain this parameter.
   * 
   * This parameter must be from an ACK cluster. You can call the DescribeClustersV1 operation of Container Service for Kubernetes (ACK) to query existing clusters, or call the CreateCluster operation to create a cluster, and then call the DescribeGroupedContainerInstances operation of Security Center to obtain the ID of a managed cluster.
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
   * The list of destination objects. The metric descriptions are as follows:
   * 
   * - targetId: The ID of the destination object. You can invoke the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to obtain this parameter.
   * - ports: The list of destination port ranges.
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
   * The interception mode. Valid values:
   * - **1**: Block Mode.
   * - **2**: Alert mode.
   * - **3**: Allow mode.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  interceptType?: number;
  /**
   * @remarks
   * The priority of the rule. Valid values: 1 to 1000. A smaller value indicates a higher priority.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  orderIndex?: number;
  /**
   * @remarks
   * The name of the rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test-rule-1
   */
  ruleName?: string;
  /**
   * @remarks
   * Specifies whether to enable the rule. Valid values:
   * - **0**: Disabled.
   * - **1**: Enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  ruleSwitch?: number;
  /**
   * @remarks
   * The type of the rule. Valid values:
   * - customize: user-defined rule
   * 
   * @example
   * customize
   */
  ruleType?: string;
  /**
   * @remarks
   * The source object. The metric description is as follows:
   * 
   * - targetId: The ID of the source object. You can invoke the [ListInterceptionTargetPage](~~ListInterceptionTargetPage~~) operation to obtain this parameter.
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

