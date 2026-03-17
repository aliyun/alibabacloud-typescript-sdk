// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagVbrRelationsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region where the SAG instance is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the VBRs.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp15ihkk93ezxppkd****
   */
  vbrInstanceIds?: string[];
  /**
   * @remarks
   * The ID of the region where the VBR is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  vbrRegionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      vbrInstanceIds: 'VbrInstanceIds',
      vbrRegionId: 'VbrRegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      vbrInstanceIds: { 'type': 'array', 'itemType': 'string' },
      vbrRegionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.vbrInstanceIds)) {
      $dara.Model.validateArray(this.vbrInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

