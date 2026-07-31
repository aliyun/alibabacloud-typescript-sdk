// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class JoinSecurityGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * > If this parameter is specified, NetworkInterfaceId must be left empty.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The Elastic Network Interface (ENI) ID.
   * 
   * > If this parameter is specified, InstanceId must be left empty.
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
   * - The region ID is optional when adding an instance to a security group.
   * - The region ID is required when adding an Elastic Network Interface (ENI) to a security group. Specify the region where the network interface controller (NIC) resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The security group ID. You can call [DescribeSecurityGroups](https://help.aliyun.com/document_detail/25556.html) to query available security groups.
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

