// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode } from "./DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode";
import { DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling } from "./DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling";
import { DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig } from "./DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig";
import { DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig } from "./DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig";
import { DescribeClusterNodePoolsResponseBodyNodepoolsManagement } from "./DescribeClusterNodePoolsResponseBodyNodepoolsManagement";
import { DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig } from "./DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig";
import { DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo } from "./DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo";
import { DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup } from "./DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup";
import { DescribeClusterNodePoolsResponseBodyNodepoolsStatus } from "./DescribeClusterNodePoolsResponseBodyNodepoolsStatus";
import { DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig } from "./DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig";


export class DescribeClusterNodePoolsResponseBodyNodepools extends $dara.Model {
  autoMode?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode;
  /**
   * @remarks
   * The configurations of auto scaling.
   */
  autoScaling?: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The network configurations of the edge node pool. This parameter takes effect only on edge node pools.
   */
  interconnectConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. Valid values: basic and dedicated. This parameter takes effect only on edge node pools.
   * 
   * @example
   * improved
   */
  interconnectMode?: string;
  /**
   * @remarks
   * The configurations of the cluster in which the node pool is deployed.
   */
  kubernetesConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig;
  /**
   * @remarks
   * The configurations of managed node pools. Managed node pools are available only in professional managed Kubernetes clusters.
   */
  management?: DescribeClusterNodePoolsResponseBodyNodepoolsManagement;
  /**
   * @remarks
   * The maximum number of nodes that can be created in the edge node pool. The value of this parameter must be greater than or equal to 0. A value of 0 indicates that the number of nodes in the node pool is limited only by the quota of nodes in the cluster. In most cases, this parameter is set to a value larger than 0 for edge node pools. This parameter is set to 0 for node pools whose types are ess or default edge node pools.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The configurations of nodes.
   */
  nodeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig;
  /**
   * @remarks
   * The information about the node pool.
   */
  nodepoolInfo?: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group.
   */
  scalingGroup?: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup;
  /**
   * @remarks
   * The status details of the node pool.
   */
  status?: DescribeClusterNodePoolsResponseBodyNodepoolsStatus;
  /**
   * @remarks
   * The configurations of confidential computing.
   */
  teeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoMode: 'auto_mode',
      autoScaling: 'auto_scaling',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      maxNodes: 'max_nodes',
      nodeConfig: 'node_config',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      status: 'status',
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMode: DescribeClusterNodePoolsResponseBodyNodepoolsAutoMode,
      autoScaling: DescribeClusterNodePoolsResponseBodyNodepoolsAutoScaling,
      interconnectConfig: DescribeClusterNodePoolsResponseBodyNodepoolsInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: DescribeClusterNodePoolsResponseBodyNodepoolsKubernetesConfig,
      management: DescribeClusterNodePoolsResponseBodyNodepoolsManagement,
      maxNodes: 'number',
      nodeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsNodeConfig,
      nodepoolInfo: DescribeClusterNodePoolsResponseBodyNodepoolsNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolsResponseBodyNodepoolsScalingGroup,
      status: DescribeClusterNodePoolsResponseBodyNodepoolsStatus,
      teeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsTeeConfig,
    };
  }

  validate() {
    if(this.autoMode && typeof (this.autoMode as any).validate === 'function') {
      (this.autoMode as any).validate();
    }
    if(this.autoScaling && typeof (this.autoScaling as any).validate === 'function') {
      (this.autoScaling as any).validate();
    }
    if(this.interconnectConfig && typeof (this.interconnectConfig as any).validate === 'function') {
      (this.interconnectConfig as any).validate();
    }
    if(this.kubernetesConfig && typeof (this.kubernetesConfig as any).validate === 'function') {
      (this.kubernetesConfig as any).validate();
    }
    if(this.management && typeof (this.management as any).validate === 'function') {
      (this.management as any).validate();
    }
    if(this.nodeConfig && typeof (this.nodeConfig as any).validate === 'function') {
      (this.nodeConfig as any).validate();
    }
    if(this.nodepoolInfo && typeof (this.nodepoolInfo as any).validate === 'function') {
      (this.nodepoolInfo as any).validate();
    }
    if(this.scalingGroup && typeof (this.scalingGroup as any).validate === 'function') {
      (this.scalingGroup as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    if(this.teeConfig && typeof (this.teeConfig as any).validate === 'function') {
      (this.teeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

