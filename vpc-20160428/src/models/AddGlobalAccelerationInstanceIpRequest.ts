// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGlobalAccelerationInstanceIpRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the shared-bandwidth GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-Ldefrgbttnyyf****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The EIP ID. You can call the [DescribeEipAddresses](https://help.aliyun.com/document_detail/36018.html) operation to query EIP IDs.
   * 
   * >  Make sure that the billing method of the EIP is pay-as-you-go, and the EIP and the shared-bandwidth GA instance belong to the same region.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-rw434rwfdeaf****
   */
  ipInstanceId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region of the shared-bandwidth GA instance.
   * 
   * You can call the **DescribeRegions** operation to query the most recent region list.
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

