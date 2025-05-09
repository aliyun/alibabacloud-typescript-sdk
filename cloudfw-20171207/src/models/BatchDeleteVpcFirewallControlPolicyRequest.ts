// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteVpcFirewallControlPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The UUIDs of access control policies.
   * 
   * This parameter is required.
   */
  aclUuidList?: string[];
  /**
   * @remarks
   * The instance ID of the VPC firewall.
   * 
   * This parameter is required.
   * 
   * @example
   * vfw-m5e7dbc4y****
   */
  vpcFirewallId?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuidList: 'AclUuidList',
      vpcFirewallId: 'VpcFirewallId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuidList: { 'type': 'array', 'itemType': 'string' },
      vpcFirewallId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aclUuidList)) {
      $dara.Model.validateArray(this.aclUuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

