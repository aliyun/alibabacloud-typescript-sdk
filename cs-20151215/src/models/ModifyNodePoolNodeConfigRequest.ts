// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerdConfig } from "./ContainerdConfig";
import { KubeletConfig } from "./KubeletConfig";
import { Hugepage } from "./Hugepage";


export class ModifyNodePoolNodeConfigRequestOsConfig extends $dara.Model {
  /**
   * @remarks
   * The hugepage configuration.
   */
  hugepage?: Hugepage;
  /**
   * @remarks
   * The custom sysctl parameter settings.
   */
  sysctl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      hugepage: 'hugepage',
      sysctl: 'sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hugepage: Hugepage,
      sysctl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.hugepage && typeof (this.hugepage as any).validate === 'function') {
      (this.hugepage as any).validate();
    }
    if(this.sysctl) {
      $dara.Model.validateMap(this.sysctl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolNodeConfigRequestRollingPolicy extends $dara.Model {
  /**
   * @remarks
   * The maximum number of nodes that are allowed to fail during the rolling update. Default value: 0, which indicates that the task fails if any node fails. If the value is greater than 0, the task fails and stops when the cumulative number of failed nodes exceeds this value.
   * 
   * @example
   * 0
   */
  maxFailedNodes?: number;
  /**
   * @remarks
   * The node updates in the node pool are performed in batches. This parameter specifies the maximum number of nodes that can be updated in parallel per batch.
   * 
   * Valid values: [1,10].
   * 
   * Default value: 10.
   * 
   * @example
   * 3
   */
  maxParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      maxFailedNodes: 'max_failed_nodes',
      maxParallelism: 'max_parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxFailedNodes: 'number',
      maxParallelism: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyNodePoolNodeConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The containerd runtime configuration.
   */
  containerdConfig?: ContainerdConfig;
  /**
   * @remarks
   * The kubelet parameter settings.
   */
  kubeletConfig?: KubeletConfig;
  /**
   * @remarks
   * The list of nodes to upgrade.
   */
  nodeNames?: string[];
  /**
   * @remarks
   * The operating system parameter settings.
   */
  osConfig?: ModifyNodePoolNodeConfigRequestOsConfig;
  /**
   * @remarks
   * The rolling update configuration.
   */
  rollingPolicy?: ModifyNodePoolNodeConfigRequestRollingPolicy;
  static names(): { [key: string]: string } {
    return {
      containerdConfig: 'containerd_config',
      kubeletConfig: 'kubelet_config',
      nodeNames: 'node_names',
      osConfig: 'os_config',
      rollingPolicy: 'rolling_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerdConfig: ContainerdConfig,
      kubeletConfig: KubeletConfig,
      nodeNames: { 'type': 'array', 'itemType': 'string' },
      osConfig: ModifyNodePoolNodeConfigRequestOsConfig,
      rollingPolicy: ModifyNodePoolNodeConfigRequestRollingPolicy,
    };
  }

  validate() {
    if(this.containerdConfig && typeof (this.containerdConfig as any).validate === 'function') {
      (this.containerdConfig as any).validate();
    }
    if(this.kubeletConfig && typeof (this.kubeletConfig as any).validate === 'function') {
      (this.kubeletConfig as any).validate();
    }
    if(Array.isArray(this.nodeNames)) {
      $dara.Model.validateArray(this.nodeNames);
    }
    if(this.osConfig && typeof (this.osConfig as any).validate === 'function') {
      (this.osConfig as any).validate();
    }
    if(this.rollingPolicy && typeof (this.rollingPolicy as any).validate === 'function') {
      (this.rollingPolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

