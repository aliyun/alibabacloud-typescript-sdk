// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceVpcAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > When you call this operation, the ECS instance must be in the **Stopped** state. For other restrictions on the instance, carefully read the **operation description** section.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp1iudwa5b1tqag1****
   */
  instanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The new private IP address.
   * 
   * > The `PrivateIpAddress` parameter depends on `VSwitchId`. The specified IP address must be within the CIDR block of the vSwitch.
   * 
   * Default value: If this parameter is not specified, a private IP address is randomly assigned from the CIDR block of the vSwitch.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the security groups to which the instance is added after the VPC is changed. This parameter is required only when the `VpcId` parameter is specified.
   * 
   * - The security groups must belong to the destination VPC.
   * - You can specify one or more security groups. The number of security groups is subject to the limits on the number of security groups to which an instance can belong. For more information, see [Limits](~~25412#SecurityGroupQuota1~~).
   * - All security groups in the list must be of the same type.
   * - Switching between security group types is supported. When you switch an ECS instance between security group types, make sure that you understand the differences in security group rule configurations between the two types to avoid impacts on instance networking. For more information, see [Security group overview](https://help.aliyun.com/document_detail/25387.html).
   * 
   * @example
   * sg-o6w9l8bc8dgmkw87****
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * The vSwitch ID.
   * 
   * - If the specified ID is the current vSwitch of the instance, the vSwitch remains unchanged.
   * - If the specified ID is a new vSwitch and the `VpcId` parameter is empty, the new and old vSwitches must belong to the same zone and the same VPC.
   * - If the `VpcId` parameter is not empty, the vSwitch specified by this parameter must belong to the specified VPC and must be in the same zone as the original vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1s5fnvk4gn3tw12****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the destination VPC.
   * 
   * @example
   * vpc-bp1vwnn14rqpyiczj****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      privateIpAddress: 'PrivateIpAddress',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      privateIpAddress: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: { 'type': 'array', 'itemType': 'string' },
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.securityGroupId)) {
      $dara.Model.validateArray(this.securityGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

