// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterfaceSecurityGroupIds } from "./DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterfaceSecurityGroupIds";


export class DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterface extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to retain the ENI when the associated instance is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the secondary ENI.
   * 
   * @example
   * testNetworkInterfacesDescription
   */
  description?: string;
  /**
   * @remarks
   * The instance type of the instance.
   * 
   * @example
   * ecs.s2.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the secondary ENI.
   * 
   * @example
   * testNetworkInterfaceName
   */
  networkInterfaceName?: string;
  /**
   * @remarks
   * The communication mode of the primary ENI. Valid values:
   * 
   * *   Standard: uses the TCP communication mode.
   * *   HighPerformance: uses the remote direct memory access (RDMA) communication mode with Elastic RDMA Interface (ERI) enabled.
   * 
   * @example
   * Standard
   */
  networkInterfaceTrafficMode?: string;
  /**
   * @remarks
   * The primary private IP address of the secondary ENI.
   * 
   * @example
   * 203.0.*.*
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The ID of the security group to which to assign the secondary ENI. The security group and the ENI must belong to the same VPC.
   * 
   * >  SecurityGroupId and SecurityGroupIds are mutually exclusive in the response.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which to assign the secondary ENI.
   * 
   * >  SecurityGroupId and SecurityGroupIds are mutually exclusive in the response.
   */
  securityGroupIds?: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterfaceSecurityGroupIds;
  /**
   * @remarks
   * The ID of the vSwitch to which to connect the ENI.
   * 
   * @example
   * vsw-bp67acfmxazb4p****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      deleteOnRelease: 'DeleteOnRelease',
      description: 'Description',
      instanceType: 'InstanceType',
      networkInterfaceName: 'NetworkInterfaceName',
      networkInterfaceTrafficMode: 'NetworkInterfaceTrafficMode',
      primaryIpAddress: 'PrimaryIpAddress',
      securityGroupId: 'SecurityGroupId',
      securityGroupIds: 'SecurityGroupIds',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleteOnRelease: 'boolean',
      description: 'string',
      instanceType: 'string',
      networkInterfaceName: 'string',
      networkInterfaceTrafficMode: 'string',
      primaryIpAddress: 'string',
      securityGroupId: 'string',
      securityGroupIds: DescribeLaunchTemplateVersionsResponseBodyLaunchTemplateVersionSetsLaunchTemplateVersionSetLaunchTemplateDataNetworkInterfacesNetworkInterfaceSecurityGroupIds,
      vSwitchId: 'string',
    };
  }

  validate() {
    if(this.securityGroupIds && typeof (this.securityGroupIds as any).validate === 'function') {
      (this.securityGroupIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

