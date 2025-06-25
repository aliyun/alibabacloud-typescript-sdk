// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetPolicyApprovalConfigRequestApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable O&M approval in the control policy. Valid values:
   * 
   * * **On**: enables O&M approval.
   * * **Off**: disables O&M approval.
   * 
   * This parameter is required.
   * 
   * @example
   * On
   */
  switchStatus?: string;
  static names(): { [key: string]: string } {
    return {
      switchStatus: 'SwitchStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

