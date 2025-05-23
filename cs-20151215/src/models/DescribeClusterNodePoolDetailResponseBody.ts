// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNodePoolDetailResponseBodyAutoMode } from "./DescribeClusterNodePoolDetailResponseBodyAutoMode";
import { DescribeClusterNodePoolDetailResponseBodyAutoScaling } from "./DescribeClusterNodePoolDetailResponseBodyAutoScaling";
import { DescribeClusterNodePoolDetailResponseBodyInterconnectConfig } from "./DescribeClusterNodePoolDetailResponseBodyInterconnectConfig";
import { DescribeClusterNodePoolDetailResponseBodyKubernetesConfig } from "./DescribeClusterNodePoolDetailResponseBodyKubernetesConfig";
import { DescribeClusterNodePoolDetailResponseBodyManagement } from "./DescribeClusterNodePoolDetailResponseBodyManagement";
import { DescribeClusterNodePoolDetailResponseBodyNodeConfig } from "./DescribeClusterNodePoolDetailResponseBodyNodeConfig";
import { DescribeClusterNodePoolDetailResponseBodyNodepoolInfo } from "./DescribeClusterNodePoolDetailResponseBodyNodepoolInfo";
import { DescribeClusterNodePoolDetailResponseBodyScalingGroup } from "./DescribeClusterNodePoolDetailResponseBodyScalingGroup";
import { DescribeClusterNodePoolDetailResponseBodyStatus } from "./DescribeClusterNodePoolDetailResponseBodyStatus";
import { DescribeClusterNodePoolDetailResponseBodyTeeConfig } from "./DescribeClusterNodePoolDetailResponseBodyTeeConfig";


export class DescribeClusterNodePoolDetailResponseBody extends $dara.Model {
  autoMode?: DescribeClusterNodePoolDetailResponseBodyAutoMode;
  /**
   * @remarks
   * The auto scaling configuration of the node pool.
   */
  autoScaling?: DescribeClusterNodePoolDetailResponseBodyAutoScaling;
  /**
   * @remarks
   * Indicates whether the pods in the edge node pool can use the host network.
   * 
   * `true`: sets to host network.
   * 
   * `false`: sets to container network.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * The network configuration of the edge node pool. This parameter takes effect only for edge node pools.
   */
  interconnectConfig?: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only if you set the type parameter of the node pool to edge. Valid values:
   * 
   * `basic`: Internet.
   * 
   * `private`: private network.
   * 
   * @example
   * improved
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Specifies whether all nodes in the edge node pool can communicate with each other at Layer 3.
   * 
   * `true`: The nodes in the edge node pool can communicate with each other at Layer 3.
   * 
   * `false`: The nodes in the edge node pool cannot communicate with each other at Layer 3.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * The configurations of the cluster in which the node pool is deployed.
   */
  kubernetesConfig?: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig;
  /**
   * @remarks
   * The configuration of the managed node pool feature.
   */
  management?: DescribeClusterNodePoolDetailResponseBodyManagement;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The maximum number of nodes allowed in an edge node pool.
   * 
   * @example
   * 10
   */
  maxNodes?: number;
  /**
   * @remarks
   * The node configurations.
   */
  nodeConfig?: DescribeClusterNodePoolDetailResponseBodyNodeConfig;
  /**
   * @remarks
   * The configuration of the node pool.
   */
  nodepoolInfo?: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group that is used by the node pool.
   */
  scalingGroup?: DescribeClusterNodePoolDetailResponseBodyScalingGroup;
  /**
   * @remarks
   * The status details about the node pool.
   */
  status?: DescribeClusterNodePoolDetailResponseBodyStatus;
  /**
   * @remarks
   * The configuration of confidential computing.
   */
  teeConfig?: DescribeClusterNodePoolDetailResponseBodyTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoMode: 'auto_mode',
      autoScaling: 'auto_scaling',
      hostNetwork: 'host_network',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
      intranet: 'intranet',
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
      autoMode: DescribeClusterNodePoolDetailResponseBodyAutoMode,
      autoScaling: DescribeClusterNodePoolDetailResponseBodyAutoScaling,
      hostNetwork: 'boolean',
      interconnectConfig: DescribeClusterNodePoolDetailResponseBodyInterconnectConfig,
      interconnectMode: 'string',
      intranet: 'boolean',
      kubernetesConfig: DescribeClusterNodePoolDetailResponseBodyKubernetesConfig,
      management: DescribeClusterNodePoolDetailResponseBodyManagement,
      maxNodes: 'number',
      nodeConfig: DescribeClusterNodePoolDetailResponseBodyNodeConfig,
      nodepoolInfo: DescribeClusterNodePoolDetailResponseBodyNodepoolInfo,
      scalingGroup: DescribeClusterNodePoolDetailResponseBodyScalingGroup,
      status: DescribeClusterNodePoolDetailResponseBodyStatus,
      teeConfig: DescribeClusterNodePoolDetailResponseBodyTeeConfig,
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

