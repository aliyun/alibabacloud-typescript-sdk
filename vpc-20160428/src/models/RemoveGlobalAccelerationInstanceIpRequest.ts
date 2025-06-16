// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveGlobalAccelerationInstanceIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared-bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-m5ex47zwya1sejyni****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The ID of the EIP.
   * 
   * To query the EIP ID, call DescribeEipAddresses.
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
   * The ID of the region where the shared-bandwidth instance is located.
   * 
   * To query the region ID, call DescribeRegions.
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

