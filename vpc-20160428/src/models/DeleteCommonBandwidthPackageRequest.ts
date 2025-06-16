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
   * Specifies whether to forcefully delete the Internet Shared Bandwidth instance. Valid values:
   * 
   * *   **false** (default): deletes the Internet Shared Bandwidth instance only when no EIPs are associated with the Internet Shared Bandwidth instance.
   * *   **true**: disassociates all EIPs from the Internet Shared Bandwidth instance and deletes the Internet Shared Bandwidth instance.
   * 
   * @example
   * false
   */
  force?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the Internet Shared Bandwidth instance is created.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
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

