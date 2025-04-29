// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceVpcAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the ECS instance.
   * 
   * >  When you call this operation, the ECS instance must be in the **Stopped** (`Stopped`) state. For other limits on the ECS instance, see the **Usage notes** section of this topic.
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
   * The new private IP address of the ECS instance.
   * 
   * >  The value of `PrivateIpAddress` depends on the value of `VSwitchId`. The specified IP address must be within the CIDR block of the specified vSwitch.
   * 
   * By default, if this parameter is empty, a private IP address is randomly assigned from the CIDR block of the specified vSwitch.
   * 
   * @example
   * ``172.17.**.**``
   */
  privateIpAddress?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of new security groups to which the ECS instance belongs after the VPC is changed. This parameter is required only if `VpcId` is specified.
   * 
   * *   The security groups that you specify must belong to the new VPC.
   * *   You can specify one or more security groups. The valid values of N vary based on the maximum number of security groups to which an ECS instance can belong. For more information, see [Limits](~~25412#SecurityGroupQuota1~~).
   * *   The specified security groups must be of the same type.
   * *   You can switch the ECS instance to security groups of a different type. To ensure network connectivity, we recommend that you understand the differences in rule configurations of the two security group types before you switch the ECS instance to security groups of a different type. For more information, see [Overview of security groups](https://help.aliyun.com/document_detail/25387.html).
   * 
   * @example
   * sg-o6w9l8bc8dgmkw87****
   */
  securityGroupId?: string[];
  /**
   * @remarks
   * The ID of the new vSwitch.
   * 
   * *   If you set this parameter to the ID of the current vSwitch, the vSwitch of the ECS instance remains unchanged.
   * *   If you set this parameter to the ID of a different vSwitch and leave `VpcId` empty, the new vSwitch must belong to the same zone and VPC as the current vSwitch.
   * *   If you specify `VpcId`, the vSwitch specified by this parameter must belong to the specified VPC and the same zone as the current vSwitch.
   * 
   * This parameter is required.
   * 
   * @example
   * vsw-bp1s5fnvk4gn3tw12****
   */
  vSwitchId?: string;
  /**
   * @remarks
   * The ID of the new VPC.
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

