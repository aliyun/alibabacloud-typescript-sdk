// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodepoolAutoScaling } from "./NodepoolAutoScaling";
import { NodepoolInterconnectConfig } from "./NodepoolInterconnectConfig";
import { NodepoolKubernetesConfig } from "./NodepoolKubernetesConfig";
import { NodepoolManagement } from "./NodepoolManagement";
import { NodepoolNodeConfig } from "./NodepoolNodeConfig";
import { NodepoolNodepoolInfo } from "./NodepoolNodepoolInfo";
import { NodepoolScalingGroup } from "./NodepoolScalingGroup";
import { NodepoolTeeConfig } from "./NodepoolTeeConfig";


export class Nodepool extends $dara.Model {
  autoScaling?: NodepoolAutoScaling;
  /**
   * @example
   * 1
   * 
   * @deprecated
   */
  count?: number;
  /**
   * @deprecated
   */
  interconnectConfig?: NodepoolInterconnectConfig;
  /**
   * @example
   * basic
   */
  interconnectMode?: string;
  kubernetesConfig?: NodepoolKubernetesConfig;
  management?: NodepoolManagement;
  /**
   * @example
   * 10
   */
  maxNodes?: number;
  nodeConfig?: NodepoolNodeConfig;
  nodepoolInfo?: NodepoolNodepoolInfo;
  scalingGroup?: NodepoolScalingGroup;
  teeConfig?: NodepoolTeeConfig;
  static names(): { [key: string]: string } {
    return {
      autoScaling: 'auto_scaling',
      count: 'count',
      interconnectConfig: 'interconnect_config',
      interconnectMode: 'interconnect_mode',
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
      autoScaling: NodepoolAutoScaling,
      count: 'number',
      interconnectConfig: NodepoolInterconnectConfig,
      interconnectMode: 'string',
      kubernetesConfig: NodepoolKubernetesConfig,
      management: NodepoolManagement,
      maxNodes: 'number',
      nodeConfig: NodepoolNodeConfig,
      nodepoolInfo: NodepoolNodepoolInfo,
      scalingGroup: NodepoolScalingGroup,
      teeConfig: NodepoolTeeConfig,
    };
  }

  validate() {
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
    if(this.teeConfig && typeof (this.teeConfig as any).validate === 'function') {
      (this.teeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

