// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLaunchTemplateVersionRequestNetworkInterface extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to release ENI N when the instance is released. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: true.
   * 
   * >  This parameter takes effect only for secondary ENIs.
   * 
   * @example
   * true
   */
  deleteOnRelease?: boolean;
  /**
   * @remarks
   * The description of the secondary ENI. The description must be 2 to 256 characters in length and cannot start with `http://` or `https://`. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * testNetworkInterfaceDescription
   */
  description?: string;
  /**
   * @remarks
   * The type of ENI N. Valid values of N: 1 and 2. If the value of N is 1, you can configure a primary or secondary ENI. If the value of N is 2, you must configure a primary ENI and a secondary ENI.
   * 
   * Valid values:
   * 
   * *   Primary
   * *   Secondary
   * 
   * Default value: Secondary.
   * 
   * @example
   * ecs.g5.large
   */
  instanceType?: string;
  /**
   * @remarks
   * The name of the secondary ENI. The value of N in `NetworkInterface.N` cannot be greater than 1.
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
   * The primary private IP address of the secondary ENI. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * ``192.168.**.**``
   */
  primaryIpAddress?: string;
  /**
   * @remarks
   * The ID of the security group to which to assign the secondary ENI. The security groups of the secondary ENI and of the instance must belong to the same VPC. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * >  You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp15ed6xe1yxeycg****
   */
  securityGroupId?: string;
  /**
   * @remarks
   * The IDs of the security groups to which to assign the secondary ENI. The security groups and the secondary ENI must reside in the same VPC. The valid values of N in `SecurityGroupIds.N` vary based on the maximum number of security groups to which a secondary ENI can belong. For more information, see the "Security group limits" section in [Limits](https://help.aliyun.com/document_detail/25412.html). The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * >  You cannot specify both `NetworkInterface.N.SecurityGroupId` and `NetworkInterface.N.SecurityGroupIds.N`.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupIds?: string[];
  /**
   * @remarks
   * The ID of the vSwitch to which to connect the secondary ENI. The instance and the secondary ENI must reside in the same zone of the same VPC, but they can be connected to different vSwitches. The value of N in `NetworkInterface.N` cannot be greater than 1.
   * 
   * @example
   * vsw-bp1s5fnvk4gn2tws0****
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
      securityGroupIds: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupIds)) {
      $dara.Model.validateArray(this.securityGroupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

