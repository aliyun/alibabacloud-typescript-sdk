// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddGlobalAccelerationInstanceIpRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Internet Shared Bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-Ldefrgbttnyyf****
   */
  globalAccelerationInstanceId?: string;
  /**
   * @remarks
   * The ID of the EIP. You can call the [DescribeEipAddresses](https://help.aliyun.com/document_detail/36018.html) operation to query the EIP ID. 
   * 
   * > Make sure that the billing method of the EIP is pay-as-you-go and that the EIP and the shared bandwidth instance are in the same region.
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
   * The region ID of the Internet Shared Bandwidth instance. 
   * 
   * You can call the **DescribeRegions** operation to query region IDs.
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

