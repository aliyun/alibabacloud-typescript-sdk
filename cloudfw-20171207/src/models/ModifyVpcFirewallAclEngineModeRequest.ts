// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallAclEngineModeRequest extends $dara.Model {
  /**
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @example
   * 0
   */
  strictMode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      memberUid: 'MemberUid',
      strictMode: 'StrictMode',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberUid: 'string',
      strictMode: 'string',
      vpcFirewallId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

