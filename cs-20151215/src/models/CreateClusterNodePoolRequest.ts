// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterNodePoolRequestAutoMode } from "./CreateClusterNodePoolRequestAutoMode";
import { CreateClusterNodePoolRequestAutoScaling } from "./CreateClusterNodePoolRequestAutoScaling";
import { CreateClusterNodePoolRequestEfloNodeGroup } from "./CreateClusterNodePoolRequestEfloNodeGroup";
import { CreateClusterNodePoolRequestInterconnectConfig } from "./CreateClusterNodePoolRequestInterconnectConfig";
import { CreateClusterNodePoolRequestKubernetesConfig } from "./CreateClusterNodePoolRequestKubernetesConfig";
import { CreateClusterNodePoolRequestManagement } from "./CreateClusterNodePoolRequestManagement";
import { CreateClusterNodePoolRequestNodeConfig } from "./CreateClusterNodePoolRequestNodeConfig";
import { CreateClusterNodePoolRequestNodepoolInfo } from "./CreateClusterNodePoolRequestNodepoolInfo";
import { CreateClusterNodePoolRequestScalingGroup } from "./CreateClusterNodePoolRequestScalingGroup";
import { CreateClusterNodePoolRequestTeeConfig } from "./CreateClusterNodePoolRequestTeeConfig";


export class CreateClusterNodePoolRequest extends $dara.Model {
  autoMode?: CreateClusterNodePoolRequestAutoMode;
  /**
   * @remarks
   * The configurations of auto scaling.
   */
  autoScaling?: CreateClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * This parameter is deprecated. Use the desired_size parameter instead.
   * 
   * The number of nodes in the node pool.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  efloNodeGroup?: CreateClusterNodePoolRequestEfloNodeGroup;
  /**
   * @remarks
   * Specifies whether to set the network type of the pod to host network.
   * 
   * *   `true`: sets to host network.
   * *   `false`: sets to container network.
   * 
   * @example
   * true
   */
  hostNetwork?: boolean;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The configurations of the edge node pool.
   * 
   * @deprecated
   */
  interconnectConfig?: CreateClusterNodePoolRequestInterconnectConfig;
  /**
   * @remarks
   * The network type of the edge node pool. This parameter takes effect only when the `type` of the node pool is set to `edge`. Valid values:
   * 
   * *   `basic`: Internet.
   * *   `private`: private network.
   * 
   * @example
   * basic
   */
  interconnectMode?: string;
  /**
   * @remarks
   * Specifies whether all nodes in the edge node pool can communicate with each other at Layer 3.
   * 
   * *   `true`: The nodes in the edge node pool can communicate with each other at Layer 3.
   * *   `false`: The nodes in the edge node pool cannot communicate with each other at Layer 3.
   * 
   * @example
   * true
   */
  intranet?: boolean;
  /**
   * @remarks
   * The configurations of the cluster.
   */
  kubernetesConfig?: CreateClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configurations of the managed node pool feature.
   */
  management?: CreateClusterNodePoolRequestManagement;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * The maximum number of nodes that can be contained in the edge node pool.
   * 
   * @example
   * 10
   * 
   * @deprecated
   */
  maxNodes?: number;
  /**
   * @remarks
   * The node configurations.
   */
  nodeConfig?: CreateClusterNodePoolRequestNodeConfig;
  /**
   * @remarks
   * The configurations of the node pool.
   */
  nodepoolInfo?: CreateClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The configurations of the scaling group that is used by the node pool.
   */
  scalingGroup?: CreateClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configurations of confidential computing for the cluster.
   */
  teeConfig?: CreateClusterNodePoolRequestTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoMode: 'auto_mode',
      autoScaling: 'auto_scaling',
      count: 'count',
      efloNodeGroup: 'eflo_node_group',
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
      teeConfig: 'tee_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoMode: CreateClusterNodePoolRequestAutoMode,
      autoScaling: CreateClusterNodePoolRequestAutoScaling,
      count: 'number',
      efloNodeGroup: CreateClusterNodePoolRequestEfloNodeGroup,
      hostNetwork: 'boolean',
      interconnectConfig: CreateClusterNodePoolRequestInterconnectConfig,
      interconnectMode: 'string',
      intranet: 'boolean',
      kubernetesConfig: CreateClusterNodePoolRequestKubernetesConfig,
      management: CreateClusterNodePoolRequestManagement,
      maxNodes: 'number',
      nodeConfig: CreateClusterNodePoolRequestNodeConfig,
      nodepoolInfo: CreateClusterNodePoolRequestNodepoolInfo,
      scalingGroup: CreateClusterNodePoolRequestScalingGroup,
      teeConfig: CreateClusterNodePoolRequestTeeConfig,
    };
  }

  validate() {
    if(this.autoMode && typeof (this.autoMode as any).validate === 'function') {
      (this.autoMode as any).validate();
    }
    if(this.autoScaling && typeof (this.autoScaling as any).validate === 'function') {
      (this.autoScaling as any).validate();
    }
    if(this.efloNodeGroup && typeof (this.efloNodeGroup as any).validate === 'function') {
      (this.efloNodeGroup as any).validate();
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
    if(this.teeConfig && typeof (this.teeConfig as any).validate === 'function') {
      (this.teeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

