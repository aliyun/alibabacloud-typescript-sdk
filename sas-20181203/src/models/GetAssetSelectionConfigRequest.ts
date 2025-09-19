// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAssetSelectionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The feature that is selected for the asset. Valid values:
   * 
   * *   **VIRUS_SCAN_CYCLE_CONFIG**: virus detection and removal
   * *   **VIRUS_SCAN_ONCE_TASK**: one-time scan for viruses
   * *   **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**: a whitelist rule for alerts that are detected by using the agentless detection feature
   * *   **AGENTLESS_VUL_WHITE_LIST_[ID]**: a whitelist rule for vulnerabilities that are detected by using the agentless detection feature
   * *   **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**: core file protectioion
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

