// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterPrefixListAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop connection.
   * 
   * > If you want to query information about the prefix list that is used to generate blackhole routes, set this parameter to **BlackHole**.
   * 
   * @example
   * tr-attach-flbq507rg2ckrj****
   */
  nextHop?: string;
  /**
   * @remarks
   * The ID of the network instance that is associated with the next hop connection.
   * 
   * @example
   * vpc-6eh7fp9hdqa2wv85t****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The next hop type. Valid values:
   * 
   * - **BlackHole**: queries the prefix lists that generate blackhole routes.
   * 
   * - **VPC**: queries the prefix lists whose next hop is a Virtual Private Cloud (VPC) connection.
   * 
   * - **VBR**: queries the prefix lists whose next hop is a virtual border router (VBR) connection.
   * 
   * - **TR**: queries the prefix lists whose next hop is an inter-region connection.
   * 
   * @example
   * VPC
   */
  nextHopType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the prefix list belongs.
   * 
   * @example
   * 1210123456123456
   */
  ownerUid?: number;
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: **100**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the prefix list.
   * 
   * @example
   * pl-6ehtn5kqxgeyy08fi****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The region ID of the transit router.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to obtain the region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The status of the prefix list.
   * 
   * - **Active**: The prefix list is active.
   * 
   * - **Updating**: The prefix list is being updated.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * This parameter is required.
   * 
   * @example
   * tr-6ehx7q2jze8ch5ji0****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The ID of the route table of the transit router.
   * 
   * @example
   * vtb-6ehgc262hr170qgyc****
   */
  transitRouterTableId?: string;
  static names(): { [key: string]: string } {
    return {
      nextHop: 'NextHop',
      nextHopInstanceId: 'NextHopInstanceId',
      nextHopType: 'NextHopType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      ownerUid: 'OwnerUid',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefixListId: 'PrefixListId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      status: 'Status',
      transitRouterId: 'TransitRouterId',
      transitRouterTableId: 'TransitRouterTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextHop: 'string',
      nextHopInstanceId: 'string',
      nextHopType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      ownerUid: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      prefixListId: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      status: 'string',
      transitRouterId: 'string',
      transitRouterTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

