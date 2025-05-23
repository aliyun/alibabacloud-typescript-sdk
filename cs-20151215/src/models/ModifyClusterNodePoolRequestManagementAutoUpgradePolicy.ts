// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyClusterNodePoolRequestManagementAutoUpgradePolicy extends $dara.Model {
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically upgrade the kubelet. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * @example
   * true
   */
  autoUpgradeKubelet?: boolean;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically upgrade the operating system. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
   * 
   * Default value: `false`.
   * 
   * @example
   * false
   */
  autoUpgradeOs?: boolean;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically upgrade the runtime. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:
   * 
   * *   `true`: yes.
   * *   `false`: no.
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

