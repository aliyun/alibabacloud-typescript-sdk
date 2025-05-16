// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNodesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * You can call the [ListClusters](https://help.aliyun.com/document_detail/87116.html) operation to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The hardware configurations of the compute nodes.
   */
  computeNodeShrink?: string;
  /**
   * @remarks
   * The number of compute nodes that you want to add. Valid values: 1 to 99. The MinCount value must be smaller than the Count value.
   * 
   * *   If the number of available Elastic Compute Service (ECS) instances is smaller than the MinCount value, the nodes fail to be added.
   * *   If the number of available ECS instances is larger than the MinCount value but smaller than the Count value, nodes are added based on the MinCount value.
   * *   If the number of available ECS instances is larger than the Count value, nodes are added based on the Count value.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * Deployment set ID. You can obtain the deployment set ID through [DescribeDeploymentSets](https://help.aliyun.com/document_detail/91313.html). Currently, only deployment sets with a low network latency strategy are supported.
   * 
   * @example
   * ds-bp1frxuzdg87zh4pzq****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The type of the network between compute nodes. Valid values:
   * 
   * *   vpc
   * *   eRDMA
   * 
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @remarks
   * The hostname prefix of the added compute nodes.
   * 
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the added compute nodes.
   * 
   * @example
   * demo
   */
  hostnameSuffix?: string;
  /**
   * @remarks
   * Specifies whether to enable deletion protection for the added compute nodes.
   * 
   * @example
   * false
   */
  keepAlive?: string;
  /**
   * @remarks
   * The name of the queue for which you want to create compute nodes.
   * 
   * @example
   * test1
   */
  queueName?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role to be assumed by the added nodes.
   * 
   * @example
   * AliyunServiceRoleForOOSBandwidthScheduler
   */
  ramRole?: string;
  /**
   * @remarks
   * Preset node pool ID.
   * 
   * @example
   * rnp-756vlp7a
   */
  reservedNodePoolId?: string;
  /**
   * @remarks
   * The ID of the vSwitch to be used by the added nodes.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeNodeShrink: 'ComputeNode',
      count: 'Count',
      deploymentSetId: 'DeploymentSetId',
      HPCInterConnect: 'HPCInterConnect',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      keepAlive: 'KeepAlive',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNodeShrink: 'string',
      count: 'number',
      deploymentSetId: 'string',
      HPCInterConnect: 'string',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      keepAlive: 'string',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

