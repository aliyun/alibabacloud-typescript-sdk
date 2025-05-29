// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterPrefixListAssociationRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * > Set the value to **BlackHole** if you want to query the prefix list that generates blackhole routes.
   * 
   * @example
   * tr-attach-flbq507rg2ckrj****
   */
  nextHop?: string;
  /**
   * @remarks
   * The ID of the network instance associated with the next hop connection.
   * 
   * @example
   * vpc-6eh7fp9hdqa2wv85t****
   */
  nextHopInstanceId?: string;
  /**
   * @remarks
   * The type of the next hop. Valid values:
   * 
   * *   **BlackHole**: The prefix list that generates blackhole routes.
   * *   **VPC**: The prefix list whose next hop is a virtual private cloud (VPC) connection.
   * *   **VBR**: The prefix list whose next hop is a virtual border router (VBR) connection.
   * *   **TR**: The prefix list whose next hop is an inter-region connection on the transit router.
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
   * The ID of the region where the transit router is deployed.
   * 
   * You can call the [DescribeChildInstanceRegions](https://help.aliyun.com/document_detail/132080.html) operation to query the most recent region list.
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
   * The status of the prefix list. Valid values:
   * 
   * *   **Active**
   * *   **Updating**
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

