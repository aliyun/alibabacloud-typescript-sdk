// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveGlobalAccelerationInstanceIpRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Internet Shared Bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-m5ex47zwya1sejyni****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The ID of the EIP instance. 
   * 
   * You can call the [DescribeEipAddresses](https://help.aliyun.com/document_detail/36018.html) operation to query the EIP instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-bp13e9i2qst4g6jzi****
   */
  ipInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Internet Shared Bandwidth instance is located. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      globalAccelerationInstanceId: 'GlobalAccelerationInstanceId',
      ipInstanceId: 'IpInstanceId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      globalAccelerationInstanceId: 'string',
      ipInstanceId: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

