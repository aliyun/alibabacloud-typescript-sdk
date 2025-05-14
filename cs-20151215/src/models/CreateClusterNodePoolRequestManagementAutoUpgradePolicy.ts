// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClusterNodePoolRequestManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to allow the auto upgrade of the kubelet. This parameter takes effect only when `auto_upgrade` is set to true. Valid values:
   * 
   * *   `true`: allows the auto upgrade of the kubelet.
   * *   `false`: does not allow the auto upgrade of the kubelet.
   * 
   * If `auto_upgrade` is set to true, the default value of this parameter is `true`. If `auto_upgrade` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the auto upgrade of the OS. This parameter takes effect only when `auto_upgrade` is set to true. Valid values:
   * 
   * *   `true`: allows the auto upgrade of the OS.
   * *   `false`: does not allow the auto upgrade of the OS.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether to allow the auto upgrade of the runtime. This parameter takes effect only when `auto_upgrade` is set to true. Valid values:
   * 
   * *   `true`: allows the auto upgrade of the runtime.
   * *   `false`: does not allow the auto upgrade of the runtime.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeRuntime?: boolean;
  static names(): { [key: string]: string } {
    return {
      autoUpgradeKubelet: 'auto_upgrade_kubelet',
      autoUpgradeOs: 'auto_upgrade_os',
      autoUpgradeRuntime: 'auto_upgrade_runtime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoUpgradeKubelet: 'boolean',
      autoUpgradeOs: 'boolean',
      autoUpgradeRuntime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

