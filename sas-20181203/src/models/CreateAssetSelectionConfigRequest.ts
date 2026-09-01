// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetSelectionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the asset selection. Valid values:
   * 
   * - **VIRUS_SCAN_CYCLE_CONFIG**: trojan scan configuration.
   * - **VIRUS_SCAN_ONCE_TASK**: trojan scan one-time scan.
   * - **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**: agentless detection alert whitelisting rule.
   * - **AGENTLESS_VUL_WHITE_LIST_[ID]**: agentless detection vulnerability whitelisting rule.
   * - **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**: core file protection.
   * 
   * This parameter is required.
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests must use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The operating system of the target asset. Valid values:
   * 
   * - **all**: all operating systems.
   * - **windows**: Windows operating system.
   * - **linux**: Linux operating system.
   * > If this parameter is left empty, the default value is determined based on the **BusinessType** value.
   * >- **VIRUS_SCAN_CYCLE_CONFIG**: the value is **all**.
   * >- **VIRUS_SCAN_ONCE_TASK**: the value is **all**.
   * >- **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**: the value is **all**.
   * >- **AGENTLESS_VUL_WHITE_LIST_[ID]**: the value is **all**.
   * >- **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**: the value is **linux**.
   * 
   * @example
   * linux
   */
  platform?: string;
  /**
   * @remarks
   * The target asset type. Valid values:
   * 
   * - **all_instance**: all servers.
   * - **instance**: select by server.
   * - **group**: select by group.
   * - **vpc**: select by VPC.
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
      clientToken: 'ClientToken',
      platform: 'Platform',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      clientToken: 'string',
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

