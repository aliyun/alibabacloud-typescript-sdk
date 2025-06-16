// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BGP group.
   * 
   * @example
   * bgpg-bp1k25cyp26cllath****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * Specifies whether the BGP group is the default one. Valid values:
   * 
   * *   **false**
   * *   **true**
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The maximum value is **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region in which the VBR is deployed.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/36063.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The ID of the virtual border router (VBR) that is associated with the BGP group.
   * 
   * @example
   * vbr-bp1ctxy813985gkuk****
   */
  routerId?: string;
  static names(): { [key: string]: string } {
    return {
      bgpGroupId: 'BgpGroupId',
      isDefault: 'IsDefault',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      routerId: 'RouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bgpGroupId: 'string',
      isDefault: 'boolean',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      routerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

