// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRouterPrefixListAssociationResponseBodyPrefixLists extends $dara.Model {
  /**
   * @remarks
   * The ID of the next hop.
   * 
   * > A value of **BlackHole** indicates that all the CIDR blocks in the prefix list are blackhole routes. Packets destined for the CIDR blocks are dropped.
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
   * *   **BlackHole**: All the CIDR blocks in the prefix list are blackhole routes. Packets destined for the CIDR blocks are dropped.
   * *   **VPC**: The next hop of the CIDR blocks in the prefix list is a VPC connection.
   * *   **VBR**: The next hop of the CIDR blocks in the prefix list is a VBR connection.
   * *   **TR**: The next hop of the CIDR blocks in the prefix list is an inter-region connection.
   * 
   * @example
   * VPC
   */
  nextHopType?: string;
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
   * The ID of the prefix list.
   * 
   * @example
   * pl-6ehtn5kqxgeyy08fi****
   */
  prefixListId?: string;
  /**
   * @remarks
   * The status of the prefix list. Valid values:
   * 
   * *   **Active**: The prefix list is effective.
   * *   **Updating**: The prefix list is being updated.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The ID of the transit router.
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
      ownerUid: 'OwnerUid',
      prefixListId: 'PrefixListId',
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
      ownerUid: 'number',
      prefixListId: 'string',
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

export class ListTransitRouterPrefixListAssociationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of prefix lists.
   */
  prefixLists?: ListTransitRouterPrefixListAssociationResponseBodyPrefixLists[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6005CA94-676E-1FEE-985E-7602EFAADD6A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefixLists: 'PrefixLists',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      prefixLists: { 'type': 'array', 'itemType': ListTransitRouterPrefixListAssociationResponseBodyPrefixLists },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prefixLists)) {
      $dara.Model.validateArray(this.prefixLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

