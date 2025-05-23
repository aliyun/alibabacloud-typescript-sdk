// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy } from "./DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy";
import { DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy } from "./DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy";
import { DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy } from "./DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy";
import { DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig } from "./DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig";


export class DescribeClusterNodePoolsResponseBodyNodepoolsManagement extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable auto repair. This parameter takes effect only if `enable` is set to true. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  autoRepair?: boolean;
  /**
   * @remarks
   * The auto node repair policy.
   */
  autoRepairPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy;
  /**
   * @remarks
   * Specifies whether to enable auto node upgrade. This parameter takes effect only if `enable` is set to true.
   * 
   * *   `true`: Auto update is enabled.
   * *   `false`: Auto update is disabled.
   * 
   * @example
   * true
   */
  autoUpgrade?: boolean;
  /**
   * @remarks
   * The auto update policy.
   */
  autoUpgradePolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy;
  /**
   * @remarks
   * Indicates whether auto Common Vulnerabilities and Exposures (CVE) patching is enabled. This parameter takes effect only when `enable=true` is specified.
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
  autoVulFixPolicy?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy;
  /**
   * @remarks
   * Specifies whether to enable the managed node pool feature. Valid values:
   * 
   * *   `true`
   * *   `false`: If you set this parameter to false, other parameters of `management` do not take effect.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The configurations of auto update. The configurations take effect only if `enable` is set to true.
   */
  upgradeConfig?: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig;
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
      autoRepairPolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoRepairPolicy,
      autoUpgrade: 'boolean',
      autoUpgradePolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoUpgradePolicy,
      autoVulFix: 'boolean',
      autoVulFixPolicy: DescribeClusterNodePoolsResponseBodyNodepoolsManagementAutoVulFixPolicy,
      enable: 'boolean',
      upgradeConfig: DescribeClusterNodePoolsResponseBodyNodepoolsManagementUpgradeConfig,
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

