// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterNodePoolRequestManagementAutoRepairPolicy } from "./CreateClusterNodePoolRequestManagementAutoRepairPolicy";
import { CreateClusterNodePoolRequestManagementAutoUpgradePolicy } from "./CreateClusterNodePoolRequestManagementAutoUpgradePolicy";
import { CreateClusterNodePoolRequestManagementAutoVulFixPolicy } from "./CreateClusterNodePoolRequestManagementAutoVulFixPolicy";
import { CreateClusterNodePoolRequestManagementUpgradeConfig } from "./CreateClusterNodePoolRequestManagementUpgradeConfig";


export class CreateClusterNodePoolRequestManagement extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto node repair. This parameter takes effect only when `enable` is set to true.
   * 
   * *   `true`: enables auto node repair.
   * *   `false`: disables auto node repair.
   * 
   * If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * false
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto node repair policy.
   */
  autoRepairPolicy?: CreateClusterNodePoolRequestManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto node upgrade. This parameter takes effect only when `enable` is set to true.
   * 
   * *   `true`: enables auto node upgrade.
   * *   `false`: disables auto node upgrade.
   * 
   * If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto node upgrade policy.
   */
  autoUpgradePolicy?: CreateClusterNodePoolRequestManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Specifies whether to enable auto Common Vulnerabilities and Exposures (CVE) patching. This parameter takes effect only when `enable` is set to true.
   * 
   * *   `true`: enables auto CVE patching.
   * *   `false`: disables auto CVE patching.
   * 
   * If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * The auto CVE patching policy.
   */
  autoVulFixPolicy?: CreateClusterNodePoolRequestManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * *   `true`: enables the managed node pool feature.
   * *   `false`: disables the managed node pool feature. Other parameters in this section take effect only when enable is set to true.
   * 
   * Default value: false.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The configurations of auto upgrade. The configurations take effect only when `enable` is set to true.
   * 
   * @deprecated
   */
  upgradeConfig?: CreateClusterNodePoolRequestManagementUpgradeConfig;
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
      autoRepairPolicy: CreateClusterNodePoolRequestManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: CreateClusterNodePoolRequestManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: CreateClusterNodePoolRequestManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: CreateClusterNodePoolRequestManagementUpgradeConfig,
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

