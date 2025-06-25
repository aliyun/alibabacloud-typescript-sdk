// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyResponseBodyPolicyApprovalConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether O\\&M approval is enabled in the control policy. Valid values:
   * 
   * *   **On**: O\\&M approval is enabled.
   * *   **Off**: O\\&M approval is disabled.
   * 
   * @example
   * Off
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

