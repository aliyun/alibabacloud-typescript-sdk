// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy } from "./DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy";
import { DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy } from "./DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy";
import { DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy } from "./DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy";
import { DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig } from "./DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig";


export class DescribeClusterNodePoolDetailResponseBodyManagement extends $dara.Model {
  /**
   * @remarks
   * Indicates whether auto repair is enabled. This parameter takes effect only when `enable=true` is specified. Valid values:
   * 
   * *   `true`: Auto repair is enabled.
   * *   `false`: Auto repair is disabled.
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * Automatic repair node policy.
   */
  autoRepairPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy;
  /**
   * @remarks
   * Whether to automatically upgrade.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * Automatic upgrade policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Whether to automatically fix CVEs.
   * 
   * @example
   * true
   */
  autoVulFix?: boolean;
  /**
   * @remarks
   * Automatically repair CVE policies.
   */
  autoVulFixPolicy?: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Indicates whether the managed node pool feature is enabled. Valid values:
   * 
   * *   `true`: The managed node pool feature is enabled.
   * *   `false`: The managed node pool feature is disabled. Other parameters in this section take effect only when `enable=true` is specified.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The configuration of auto update. The configuration takes effect only when `enable=true` is specified.
   */
  upgradeConfig?: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig;
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
      autoRepairPolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: DescribeClusterNodePoolDetailResponseBodyManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolDetailResponseBodyManagementUpgradeConfig,
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

