// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetSelectionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the asset selection. Valid values:
   * 
   * - **VIRUS_SCAN_CYCLE_CONFIG**: trojan scan configuration
   * - **VIRUS_SCAN_ONCE_TASK**: trojan scan one-time scan
   * - **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**: agentless detection alert whitelisting rule
   * - **AGENTLESS_VUL_WHITE_LIST_[ID]**: agentless detection vulnerability whitelisting rule
   * - **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**: core file protection.
   * 
   * This parameter is required.
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

