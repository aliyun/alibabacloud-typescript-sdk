// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ContainerdConfig } from "./ContainerdConfig";
import { KubeletConfig } from "./KubeletConfig";
import { ModifyNodePoolNodeConfigRequestOsConfig } from "./ModifyNodePoolNodeConfigRequestOsConfig";
import { ModifyNodePoolNodeConfigRequestRollingPolicy } from "./ModifyNodePoolNodeConfigRequestRollingPolicy";


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

