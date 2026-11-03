// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVpcFirewallCenManualConfigureRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cen-37nddhri7jf0d2****
   */
  cenId?: string;
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * - **zh** (default): Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member accounts.
   * 
   * @example
   * 258039427902****
   */
  memberUid?: string;
  /**
   * @remarks
   * The ID of the vSwitch to which the Cloud Firewall interface belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-qzeaol304m***
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The border instance name of the virtual private cloud (VPC) firewalls.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-firewall-test
   */
  vpcFirewallName?: string;
  /**
   * @remarks
   * The VPC-connected instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-8vbwbo90rq0anm6t****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      lang: 'Lang',
      memberUid: 'MemberUid',
      vSwitchId: 'VSwitchId',
      vpcFirewallName: 'VpcFirewallName',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      lang: 'string',
      memberUid: 'string',
      vSwitchId: 'string',
      vpcFirewallName: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

