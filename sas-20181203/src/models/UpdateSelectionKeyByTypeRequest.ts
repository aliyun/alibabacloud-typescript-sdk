// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSelectionKeyByTypeRequest extends $dara.Model {
  /**
   * @remarks
   * The business type of the asset selection. Valid values:
   * 
   * - **VIRUS_SCAN_CYCLE_CONFIG**: virus scan cycle configuration
   * - **VIRUS_SCAN_ONCE_TASK**: one-time virus scan task
   * - **AGENTLESS_MALICIOUS_WHITE_LIST_[ID]**: agentless detection alert whitelist rule
   * - **AGENTLESS_VUL_WHITE_LIST_[ID]**: agentless detection vulnerability whitelist rule
   * - **FILE_PROTECT_RULE_SWITCH_TYPE_[ID]**: core file protection
   * 
   * @example
   * VIRUS_SCAN_CYCLE_CONFIG
   */
  businessType?: string;
  /**
   * @remarks
   * The client token used to ensure the idempotence of the request. Use a different token for different requests. Only ASCII characters are supported. The token can be up to 64 characters in length.
   * 
   * @example
   * 02fb3da4-130e-11e9-8e44-0016e04115b
   */
  clientToken?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run for this request. Valid values:
   * - true: performs only a dry run without executing the actual operation.
   * - false: executes the request normally.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
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
      dryRun: 'DryRun',
      selectionKey: 'SelectionKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
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

