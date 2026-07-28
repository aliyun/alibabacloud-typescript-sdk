// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCommonBandwidthPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet Shared Bandwidth instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cbwp-2ze2ic1xd2qeqk145pn4u
   */
  bandwidthPackageId?: string;
  /**
   * @remarks
   * Specifies whether to forcibly delete the Internet Shared Bandwidth instance. Valid values: 
   *           
   * - **false** (default): The Internet Shared Bandwidth instance is deleted only if it does not contain elastic IP addresses (EIPs).
   * 
   * - **true**: All EIPs are removed from the Internet Shared Bandwidth instance, and then the instance is deleted.
   * 
   * @example
   * false
   */
  force?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region where the Internet Shared Bandwidth instance resides. 
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the region ID.
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
      force: 'Force',
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
      force: 'string',
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

