// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LeaveSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If you specify this parameter, leave NetworkInterfaceId empty.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The Elastic Network Interface (ENI) ID.
   * 
   * > If you specify this parameter, leave InstanceId empty.
   * 
   * @example
   * eni-bp13kd656hxambfe****
   */
  networkInterfaceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID. You can invoke [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * - You do not need to specify the region ID when removing an instance from a security group.
   * - You must specify the region ID of the Elastic Network Interface (ENI) when removing an ENI from a security group.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * sg-bp67acfmxazb4p****
   */
  securityGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      networkInterfaceId: 'NetworkInterfaceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      securityGroupId: 'SecurityGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      networkInterfaceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      securityGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

