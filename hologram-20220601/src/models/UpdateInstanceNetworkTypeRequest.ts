// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to convert AnyTunnel to SingleTunnel. This parameter is invalid for new instances. Set it to null by default.
   * 
   * @example
   * true
   */
  anyTunnelToSingleTunnel?: string;
  /**
   * @remarks
   * The list of network types to enable. Specify a combination of existing network types. The order does not matter. For example, if the Internet, internal network, and VPCSingleTunnel network types are enabled and you want to disable the Internet network type, remove the Internet type and pass "Intranet, VPCSingleTunnel".
   * 
   * @example
   * Internet,VPCSingleTunnel
   */
  networkTypes?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-2vccsiymtqr9aavew0vo3
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-t4netc3y5etlondfb5ra7
   */
  vpcId?: string;
  /**
   * @remarks
   * The owner ID of the VPC, which is the Alibaba Cloud account ID.
   * 
   * @example
   * 1999365732646672
   */
  vpcOwnerId?: string;
  /**
   * @remarks
   * The region ID of the VPC.
   * 
   * @example
   * cn-hangzhou
   */
  vpcRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      anyTunnelToSingleTunnel: 'anyTunnelToSingleTunnel',
      networkTypes: 'networkTypes',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
      vpcOwnerId: 'vpcOwnerId',
      vpcRegionId: 'vpcRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      anyTunnelToSingleTunnel: 'string',
      networkTypes: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      vpcOwnerId: 'string',
      vpcRegionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

