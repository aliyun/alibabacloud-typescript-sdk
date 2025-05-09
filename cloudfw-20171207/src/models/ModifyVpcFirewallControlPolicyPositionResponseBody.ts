// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallControlPolicyPositionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 850A84D6-0DE4-4797-A1E8-00090125EEB1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

