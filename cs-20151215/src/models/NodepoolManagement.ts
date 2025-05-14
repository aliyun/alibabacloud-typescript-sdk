// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { NodepoolManagementAutoRepairPolicy } from "./NodepoolManagementAutoRepairPolicy";
import { NodepoolManagementAutoUpgradePolicy } from "./NodepoolManagementAutoUpgradePolicy";
import { NodepoolManagementAutoVulFixPolicy } from "./NodepoolManagementAutoVulFixPolicy";
import { NodepoolManagementUpgradeConfig } from "./NodepoolManagementUpgradeConfig";


export class NodepoolManagement extends $dara.Model {
  /**
   * @example
   * true
   */
  autoRepair?: boolean;
  autoRepairPolicy?: NodepoolManagementAutoRepairPolicy;
  /**
   * @example
   * true
   */
  autoUpgrade?: boolean;
  autoUpgradePolicy?: NodepoolManagementAutoUpgradePolicy;
  /**
   * @example
   * true
   */
  autoVulFix?: boolean;
  autoVulFixPolicy?: NodepoolManagementAutoVulFixPolicy;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @deprecated
   */
  upgradeConfig?: NodepoolManagementUpgradeConfig;
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
      autoRepairPolicy: NodepoolManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: NodepoolManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: NodepoolManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: NodepoolManagementUpgradeConfig,
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

