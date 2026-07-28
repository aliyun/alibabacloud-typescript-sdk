// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCommonBandwidthPackageIpBandwidthRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the Internet Shared Bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-bp13d0m4e2qv8xxxxxxxx
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * The instance ID of the EIP that has been added to the Internet Shared Bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * eip-2zewysoansu0sxxxxxxxx
   */
  eipId?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Internet Shared Bandwidth instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
      bandwidthPackageId: 'BandwidthPackageId',
      eipId: 'EipId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidthPackageId: 'string',
      eipId: 'string',
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

