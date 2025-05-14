// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyClusterNodePoolRequestAutoScaling } from "./ModifyClusterNodePoolRequestAutoScaling";
import { ModifyClusterNodePoolRequestKubernetesConfig } from "./ModifyClusterNodePoolRequestKubernetesConfig";
import { ModifyClusterNodePoolRequestManagement } from "./ModifyClusterNodePoolRequestManagement";
import { ModifyClusterNodePoolRequestNodepoolInfo } from "./ModifyClusterNodePoolRequestNodepoolInfo";
import { ModifyClusterNodePoolRequestScalingGroup } from "./ModifyClusterNodePoolRequestScalingGroup";
import { ModifyClusterNodePoolRequestTeeConfig } from "./ModifyClusterNodePoolRequestTeeConfig";


export class ModifyClusterNodePoolRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations about auto scaling.
   */
  autoScaling?: ModifyClusterNodePoolRequestAutoScaling;
  /**
   * @remarks
   * Specifies whether concurrency is supported.
   * 
   * @example
   * true
   */
  concurrency?: boolean;
  /**
   * @remarks
   * The configurations of the cluster in which the node pool is deployed.
   */
  kubernetesConfig?: ModifyClusterNodePoolRequestKubernetesConfig;
  /**
   * @remarks
   * The configuration of the managed node pool feature.
   */
  management?: ModifyClusterNodePoolRequestManagement;
  /**
   * @remarks
   * The configuration of the node pool.
   */
  nodepoolInfo?: ModifyClusterNodePoolRequestNodepoolInfo;
  /**
   * @remarks
   * The configuration of the scaling group.
   */
  scalingGroup?: ModifyClusterNodePoolRequestScalingGroup;
  /**
   * @remarks
   * The configurations about confidential computing for the cluster.
   */
  teeConfig?: ModifyClusterNodePoolRequestTeeConfig;
  /**
   * @remarks
   * Specifies whether to update node information, such as labels and taints.
   * 
   * @example
   * true
   */
  updateNodes?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      concurrency: 'concurrency',
      kubernetesConfig: 'kubernetes_config',
      management: 'management',
      nodepoolInfo: 'nodepool_info',
      scalingGroup: 'scaling_group',
      teeConfig: 'tee_config',
      updateNodes: 'update_nodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoScaling: ModifyClusterNodePoolRequestAutoScaling,
      concurrency: 'boolean',
      kubernetesConfig: ModifyClusterNodePoolRequestKubernetesConfig,
      management: ModifyClusterNodePoolRequestManagement,
      nodepoolInfo: ModifyClusterNodePoolRequestNodepoolInfo,
      scalingGroup: ModifyClusterNodePoolRequestScalingGroup,
      teeConfig: ModifyClusterNodePoolRequestTeeConfig,
      updateNodes: 'boolean',
    };
  }

  validate() {
    if(this.autoScaling && typeof (this.autoScaling as any).validate === 'function') {
      (this.autoScaling as any).validate();
    }
    if(this.kubernetesConfig && typeof (this.kubernetesConfig as any).validate === 'function') {
      (this.kubernetesConfig as any).validate();
    }
    if(this.management && typeof (this.management as any).validate === 'function') {
      (this.management as any).validate();
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

