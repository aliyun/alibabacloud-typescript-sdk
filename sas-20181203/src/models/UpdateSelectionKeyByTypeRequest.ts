// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSelectionKeyByTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the asset selection. Valid values:
   * 
   * - **VIRUS_SCAN_CYCLE_CONFIG**: virus scan configuration.
   * - **VIRUS_SCAN_ONCE_TASK**: one-time virus scan task.
   * - **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**: agentless detection alert whitelisting rule.
   * - **AGENTLESS_VUL_WHITE_LIST_[ID]**: agentless detection vulnerability whitelisting rule.
   * - **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**: core file protection.
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. Different requests should use different tokens. The token supports only ASCII characters and cannot exceed 64 characters in length.
   */
  clientToken?: string;
  /**
   * @remarks
   * The unique identifier of the asset selection.
   * 
   * @example
   * 614d179e-4776-4939-a04a-d842ce64****
   */
  selectionKey?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      clientToken: 'ClientToken',
      selectionKey: 'SelectionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      clientToken: 'string',
      selectionKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

