// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachClassicLinkVpcRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance that resides in the classic network.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * RAM用户的虚拟账号ID。
   * 
   * @example
   * 155780923770
   */
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 资源主账号的账号名称。
   * 
   * @example
   * ECSforCloud
   */
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * 资源主账号的ID，亦即UID。
   * 
   * @example
   * 155780923770
   */
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the VPC to which the instance is connected.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc-bp67acfmxazb4p****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

