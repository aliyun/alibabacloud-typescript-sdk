// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyClusterNodePoolRequestManagementAutoRepairPolicy } from "./ModifyClusterNodePoolRequestManagementAutoRepairPolicy";
import { ModifyClusterNodePoolRequestManagementAutoUpgradePolicy } from "./ModifyClusterNodePoolRequestManagementAutoUpgradePolicy";
import { ModifyClusterNodePoolRequestManagementAutoVulFixPolicy } from "./ModifyClusterNodePoolRequestManagementAutoVulFixPolicy";
import { ModifyClusterNodePoolRequestManagementUpgradeConfig } from "./ModifyClusterNodePoolRequestManagementUpgradeConfig";


export class ModifyClusterNodePoolRequestManagement extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto node repair. This parameter takes effect only if `enable` is set to true. Valid values:
   * 
   * *   `true`: enables auto repair.
   * *   `false`: disables auto repair.
   * 
   * Default value: `true`.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto node repair policy.
   */
  autoRepairPolicy?: ModifyClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto upgrade. Valid values:
   * 
   * *   `true`: enables auto upgrade.
   * *   `false`: disables auto upgrade.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto upgrade policy.
   */
  autoUpgradePolicy?: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether ACK is allowed to automatically patch CVE vulnerabilities. Valid values:
   * 
   * *   `true`: enables auto CVE patching.
   * *   `true`: disables auto CVE patching.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE patching policy.
   */
  autoVulFixPolicy?: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * *   `true`: enables the managed node pool feature.
   * *   `false`: disables the managed node pool feature. Other parameters in this section take effect only when `enable=true` is specified.
   * 
   * Default value: `false`.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * This parameter is deprecated. Use the preceding `auto_upgrade` parameter instead.
   * 
   * The configurations of auto upgrade. The configurations take effect only when `enable` is set to true.
   * 
   * @deprecated
   */
  upgradeConfig?: ModifyClusterNodePoolRequestManagementUpgradeConfig;
  static names(): { [key: string]: string } {
    return {
      autoRepair: 'auto_repair',
      autoRepairPolicy: 'auto_repair_policy',
      autoUpgrade: 'auto_upgrade',
      autoUpgradePolicy: 'auto_upgrade_policy',
      autoVulFix: 'auto_vul_fix',
      autoVulFixPolicy: 'auto_vul_fix_policy',
      enable: 'enable',
      upgradeConfig: 'upgrade_config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoRepair: 'boolean',
      autoRepairPolicy: ModifyClusterNodePoolRequestManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: ModifyClusterNodePoolRequestManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: ModifyClusterNodePoolRequestManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: ModifyClusterNodePoolRequestManagementUpgradeConfig,
    };
  }

  validate() {
    if(this.autoRepairPolicy && typeof (this.autoRepairPolicy as any).validate === 'function') {
      (this.autoRepairPolicy as any).validate();
    }
    if(this.autoUpgradePolicy && typeof (this.autoUpgradePolicy as any).validate === 'function') {
      (this.autoUpgradePolicy as any).validate();
    }
    if(this.autoVulFixPolicy && typeof (this.autoVulFixPolicy as any).validate === 'function') {
      (this.autoVulFixPolicy as any).validate();
    }
    if(this.upgradeConfig && typeof (this.upgradeConfig as any).validate === 'function') {
      (this.upgradeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

