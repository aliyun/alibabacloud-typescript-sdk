// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestNetworksNewVpdInfoVpdSubnets } from "./CreateClusterRequestNetworksNewVpdInfoVpdSubnets";


export class CreateClusterRequestNetworksNewVpdInfo extends $dara.Model {
  /**
   * @remarks
   * The ID of the Cloud Enterprise Network (CEN) instance.
   * 
   * @example
   * cen-1gb1eftc5qp2ao75fo
   */
  cenId?: string;
  /**
   * @remarks
   * The CIDR block for Cloud Link.
   * 
   * @example
   * 172.16.0.0/24
   */
  cloudLinkCidr?: string;
  /**
   * @remarks
   * The Cloud Link ID.
   * 
   * @example
   * vcc-cn-c4dtycm5i08
   */
  cloudLinkId?: string;
  /**
   * @remarks
   * The VPC.
   * 
   * @example
   * vpc-0jl2x45apm6odc2c10h25
   */
  monitorVpcId?: string;
  /**
   * @remarks
   * The vSwitch.
   * 
   * @example
   * vsw-0jl2w3ffbghkss0x2foff
   */
  monitorVswitchId?: string;
  /**
   * @remarks
   * The CIDR block for the cluster.
   * 
   * @example
   * 192.168.0.0/16
   */
  vpdCidr?: string;
  /**
   * @remarks
   * The cluster subnet.
   */
  vpdSubnets?: CreateClusterRequestNetworksNewVpdInfoVpdSubnets[];
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      cloudLinkCidr: 'CloudLinkCidr',
      cloudLinkId: 'CloudLinkId',
      monitorVpcId: 'MonitorVpcId',
      monitorVswitchId: 'MonitorVswitchId',
      vpdCidr: 'VpdCidr',
      vpdSubnets: 'VpdSubnets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      cloudLinkCidr: 'string',
      cloudLinkId: 'string',
      monitorVpcId: 'string',
      monitorVswitchId: 'string',
      vpdCidr: 'string',
      vpdSubnets: { 'type': 'array', 'itemType': CreateClusterRequestNetworksNewVpdInfoVpdSubnets },
    };
  }

  validate() {
    if(Array.isArray(this.vpdSubnets)) {
      $dara.Model.validateArray(this.vpdSubnets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

