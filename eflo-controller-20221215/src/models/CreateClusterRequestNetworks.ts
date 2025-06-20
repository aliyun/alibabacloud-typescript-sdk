// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateClusterRequestNetworksIpAllocationPolicy } from "./CreateClusterRequestNetworksIpAllocationPolicy";
import { CreateClusterRequestNetworksNewVpdInfo } from "./CreateClusterRequestNetworksNewVpdInfo";
import { CreateClusterRequestNetworksVpdInfo } from "./CreateClusterRequestNetworksVpdInfo";


export class CreateClusterRequestNetworks extends $dara.Model {
  /**
   * @remarks
   * The IP allocation policy.
   */
  ipAllocationPolicy?: CreateClusterRequestNetworksIpAllocationPolicy[];
  /**
   * @remarks
   * The virtual private domain (VPD) configuration information.
   */
  newVpdInfo?: CreateClusterRequestNetworksNewVpdInfo;
  /**
   * @remarks
   * The security group ID.
   * 
   * @example
   * sg-bp1d3dvbh9by7j5rujax
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IP version.
   * 
   * @example
   * IPv4
   */
  tailIpVersion?: string;
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * @example
   * vsw-asjdfklj
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the zone to which the vSwitch belongs.
   * 
   * @example
   * cn-shanghai-b
   */
  vSwitchZoneId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-0jl36lqzmc06qogy0t5ll
   */
  vpcId?: string;
  /**
   * @remarks
   * The VPD information.
   */
  vpdInfo?: CreateClusterRequestNetworksVpdInfo;
  static names(): { [key: string]: string } {
    return {
      ipAllocationPolicy: 'IpAllocationPolicy',
      newVpdInfo: 'NewVpdInfo',
      securityGroupId: 'SecurityGroupId',
      tailIpVersion: 'TailIpVersion',
      vSwitchId: 'VSwitchId',
      vSwitchZoneId: 'VSwitchZoneId',
      vpcId: 'VpcId',
      vpdInfo: 'VpdInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipAllocationPolicy: { 'type': 'array', 'itemType': CreateClusterRequestNetworksIpAllocationPolicy },
      newVpdInfo: CreateClusterRequestNetworksNewVpdInfo,
      securityGroupId: 'string',
      tailIpVersion: 'string',
      vSwitchId: 'string',
      vSwitchZoneId: 'string',
      vpcId: 'string',
      vpdInfo: CreateClusterRequestNetworksVpdInfo,
    };
  }

  validate() {
    if(Array.isArray(this.ipAllocationPolicy)) {
      $dara.Model.validateArray(this.ipAllocationPolicy);
    }
    if(this.newVpdInfo && typeof (this.newVpdInfo as any).validate === 'function') {
      (this.newVpdInfo as any).validate();
    }
    if(this.vpdInfo && typeof (this.vpdInfo as any).validate === 'function') {
      (this.vpdInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

