// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerdConfig } from "./ContainerdConfig";
import { KubeletConfig } from "./KubeletConfig";


export class ModifyNodePoolNodeConfigRequestOsConfig extends $dara.Model {
  /**
   * @remarks
   * The sysctl configuration.
   */
  sysctl?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      sysctl: 'sysctl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sysctl: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
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
   * The maximum number of unavailable nodes.
   * 
   * @example
   * 3
   */
  maxParallelism?: number;
  static names(): { [key: string]: string } {
    return {
      maxParallelism: 'max_parallelism',
    };
  }

  static types(): { [key: string]: any } {
    return {
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
   * The kubelet configurations.
   */
  kubeletConfig?: KubeletConfig;
  /**
   * @remarks
   * The OS configuration.
   */
  osConfig?: ModifyNodePoolNodeConfigRequestOsConfig;
  /**
   * @remarks
   * The rolling policy configuration.
   */
  rollingPolicy?: ModifyNodePoolNodeConfigRequestRollingPolicy;
  static names(): { [key: string]: string } {
    return {
      containerdConfig: 'containerd_config',
      kubeletConfig: 'kubelet_config',
      osConfig: 'os_config',
      rollingPolicy: 'rolling_policy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerdConfig: ContainerdConfig,
      kubeletConfig: KubeletConfig,
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

