// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyVpcFirewallAclEngineModeRequest extends $dara.Model {
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * Specifies whether to enable strict mode.
   * 
   * - 1: strict mode
   * 
   * - 0: loose mode
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  strictMode?: string;
  /**
   * @remarks
   * The instance ID of the VPC border firewall.
   * 
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

