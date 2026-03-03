// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateInstanceNetworkTypeRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to change the network type from AnyTunnel to SingleTunnel. This parameter is invalid for new instances. For new instances, this parameter is set to null by default.
   * 
   * Valid values:
   * 
   * *   others/null: The network type is not changed from AnyTunnel to SingleTunnel.
   * *   true: The network type is changed from AnyTunnel to SingleTunnel.
   * 
   * @example
   * true
   */
  anyTunnelToSingleTunnel?: string;
  /**
   * @remarks
   * A list of network types that you want to enable. The network types are randomly ordered in the list. For example, the Internet, Intranet, and VPCSingleTunnel network types are enabled. If you want to disable the Internet type, set this parameter to Intranet,VPCSingleTunnel.
   * 
   * Valid values:
   * 
   * *   VPCSingleTunnel: virtual private cloud (VPC).
   * *   Intranet: internal network.
   * *   VPCAnyTunnel: compatibility requirements. This value is not supported by new instances.
   * *   Internet: Internet.
   * 
   * @example
   * Internet,VPCSingleTunnel
   */
  networkTypes?: string;
  /**
   * @remarks
   * The ID of the vSwitch.
   * 
   * @example
   * vsw-2vccsiymtqr9aavew0vo3
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the VPC.
   * 
   * @example
   * vpc-t4netc3y5etlondfb5ra7
   */
  vpcId?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the VPC belongs.
   * 
   * @example
   * 1999365732646672
   */
  vpcOwnerId?: string;
  /**
   * @remarks
   * The region in which the VPC resides.
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

