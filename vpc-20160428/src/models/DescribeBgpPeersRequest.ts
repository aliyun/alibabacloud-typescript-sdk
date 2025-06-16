// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeBgpPeersRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the BGP group to which the BGP peer that you want to query belongs.
   * 
   * @example
   * bgpg-2zev8h2wo414sfh****
   */
  bgpGroupId?: string;
  /**
   * @remarks
   * The ID of the BGP peer that you want to query.
   * 
   * @example
   * bgp-2ze3un0ft1jd1xd****
   */
  bgpPeerId?: string;
  /**
   * @remarks
   * Specifies whether the BGP group is the default group. Valid values:
   * 
   * *   **true**
   * *   **false**
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
   * The number of entries per page. Valid values: **1 to 50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the BGP group to which the BGP peer that you want to query belongs.
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
   * The ID of the virtual border router (VBR) that is associated with the BGP peer that you want to query.
   * 
   * @example
   * vbr-2zecmmvg5gvu8i4te****
   */
  routerId?: string;
  static names(): { [key: string]: string } {
    return {
      bgpGroupId: 'BgpGroupId',
      bgpPeerId: 'BgpPeerId',
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
      bgpPeerId: 'string',
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

