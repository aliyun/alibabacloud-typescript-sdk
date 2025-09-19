// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetSelectionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The feature that you want to select for the asset. Valid values:
   * 
   * *   **VIRUS_SCAN_CYCLE_CONFIG**: virus detection and removal
   * *   **VIRUS_SCAN_ONCE_TASK**: one-time scan for viruses
   * *   **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**: a whitelist rule for alerts that are detected by using the agentless detection feature
   * *   **AGENTLESS_VUL_WHITE_LIST_[ID]**: a whitelist rule for vulnerabilities that are detected by using the agentless detection feature
   * *   **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**: core file protection
   * 
   * This parameter is required.
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @remarks
   * The operating system of the asset. Valid values:
   * 
   * *   **all**: all operating systems
   * *   **windows**: the Windows operating system
   * *   **linux**: the Linux operating system
   * 
   * >  If you leave this parameter empty, the system automatically selects a value for the parameter based on the value of the **BusinessType** parameter.
   * 
   * *   If the BusinessType parameter is set to **VIRUS_SCAN_CYCLE_CONFIG**, the value of the Platform parameter is **all**.
   * 
   * *   If the BusinessType parameter is set to **VIRUS_SCAN_ONCE_TASK**, the value of the Platform parameter is **all**.
   * 
   * *   If the BusinessType parameter is set to **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**, the value of the Platform parameter is **all**.
   * 
   * *   If the BusinessType parameter is set to **AGENTLESS_VUL_WHITE_LIST_[ID]** the value of the Platform parameter is **all**.
   * 
   * *   If the BusinessType parameter is set to **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**, the value of the Platform parameter is **linux**.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The dimension based on which you want to select the asset. Valid values:
   * 
   * *   **instance**: selects the asset by server.
   * *   **group**: selects the asset by group.
   * *   **vpc**: selects the asset by virtual private cloud (VPC).
   * 
   * This parameter is required.
   * 
   * @example
   * vpc
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      platform: 'Platform',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      platform: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

