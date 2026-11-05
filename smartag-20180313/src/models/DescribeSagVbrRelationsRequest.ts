// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagVbrRelationsRequest extends $dara.Model {
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the regions supported by Smart Access Gateway and their corresponding region IDs.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The instance IDs of the virtual border routers (VBRs) used for routing. You can query multiple VBR instance IDs at a time. The maximum value of N is **20**.
   * 
   * This parameter is required.
   * 
   * @example
   * vbr-bp15ihkk93ezxppkd****
   */
  vbrInstanceIds?: string[];
  /**
   * @remarks
   * The region ID of the virtual border router (VBR) instance. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
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

