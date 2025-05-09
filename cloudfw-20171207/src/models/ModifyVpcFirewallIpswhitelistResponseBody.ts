// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallIPSWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F2E8D49A-E5AA-5FF8-8822-25282DCF4BE8
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

