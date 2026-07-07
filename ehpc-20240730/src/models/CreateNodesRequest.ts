// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodeTemplate } from "./NodeTemplate";


export class CreateNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * You can call [ListClusters](https://help.aliyun.com/document_detail/87116.html) to query the cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The hardware configuration of the compute nodes.
   */
  computeNode?: NodeTemplate;
  /**
   * @remarks
   * The number of compute nodes to add. Valid values: 1 to 99. The value must be greater than MinCount.
   * 
   * - If the available ECS inventory is less than MinCount, the node creation fails.
   * 
   * - If the available ECS inventory is greater than or equal to MinCount but less than Count, nodes are added based on the number specified by MinCount.
   * 
   * - If the available ECS inventory is greater than or equal to Count, nodes are added based on the number specified by Count.
   * 
   * @example
   * 10
   */
  count?: number;
  /**
   * @remarks
   * The ID of the deployment set.
   * You can call [DescribeDeploymentSets](https://help.aliyun.com/document_detail/91313.html) to query the deployment set ID. Only deployment sets that use the low network latency strategy are supported.
   * 
   * @example
   * ds-bp1frxuzdg87zh4pzq****
   */
  deploymentSetId?: string;
  /**
   * @remarks
   * The network type for communication between compute nodes. Valid values:
   * - vpc
   * - eRDMA
   * 
   * @example
   * vpc
   */
  HPCInterConnect?: string;
  /**
   * @remarks
   * The hostname prefix of the compute nodes in the queue.
   * 
   * @example
   * compute
   */
  hostnamePrefix?: string;
  /**
   * @remarks
   * The hostname suffix of the compute nodes in the queue.
   * 
   * @example
   * demo
   */
  hostnameSuffix?: string;
  hostnames?: string[];
  /**
   * @remarks
   * Specifies whether deletion protection is enabled for the compute nodes.
   * 
   * @example
   * false
   */
  keepAlive?: string;
  /**
   * @example
   * 10
   */
  minCount?: number;
  /**
   * @remarks
   * The name of the queue to which the compute nodes belong.
   * 
   * @example
   * test1
   */
  queueName?: string;
  /**
   * @remarks
   * The name of the RAM role attached to the compute nodes in the queue.
   * 
   * @example
   * AliyunServiceRoleForOOSBandwidthScheduler
   */
  ramRole?: string;
  /**
   * @remarks
   * The ID of the reserved node pool.
   * 
   * @example
   * rnp-756vlp7a
   */
  reservedNodePoolId?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-bp1lfcjbfb099rrjn****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      computeNode: 'ComputeNode',
      count: 'Count',
      deploymentSetId: 'DeploymentSetId',
      HPCInterConnect: 'HPCInterConnect',
      hostnamePrefix: 'HostnamePrefix',
      hostnameSuffix: 'HostnameSuffix',
      hostnames: 'Hostnames',
      keepAlive: 'KeepAlive',
      minCount: 'MinCount',
      queueName: 'QueueName',
      ramRole: 'RamRole',
      reservedNodePoolId: 'ReservedNodePoolId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      computeNode: NodeTemplate,
      count: 'number',
      deploymentSetId: 'string',
      HPCInterConnect: 'string',
      hostnamePrefix: 'string',
      hostnameSuffix: 'string',
      hostnames: { 'type': 'array', 'itemType': 'string' },
      keepAlive: 'string',
      minCount: 'number',
      queueName: 'string',
      ramRole: 'string',
      reservedNodePoolId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.computeNode && typeof (this.computeNode as any).validate === 'function') {
      (this.computeNode as any).validate();
    }
    if(Array.isArray(this.hostnames)) {
      $dara.Model.validateArray(this.hostnames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

