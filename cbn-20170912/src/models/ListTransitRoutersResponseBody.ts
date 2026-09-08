// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransitRoutersResponseBodyTransitRoutersTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * TagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TagValue
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList extends $dara.Model {
  /**
   * @remarks
   * The transit router CIDR block.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the transit router CIDR block.
   * 
   * @example
   * CIDRdesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the transit router CIDR block.
   * 
   * @example
   * CIDRname
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the system is allowed to automatically add a route for the transit router CIDR block to the transit router route table. Valid values:
   * 
   * - **true**: allowed.
   * 
   *      If the value is **true**, after you create a VPN connection of the private gateway type and create a route learning relationship for the VPN connection, the system automatically adds the following route entry to the transit router route table that has a route learning relationship with the VPN connection:
   * 
   *   A blackhole route whose destination CIDR block is the transit router CIDR block from which a gateway IP address is allocated to the IPsec connection.
   *       
   *   The blackhole route is propagated only to the route tables of VBR instances under the transit router.
   * - **false**: not allowed.
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  /**
   * @remarks
   * The ID of the transit router CIDR block.
   * 
   * @example
   * cidr-46p5ceg21e8152****
   */
  transitRouterCidrId?: string;
  static names(): { [key: string]: string } {
    return {
      cidr: 'Cidr',
      description: 'Description',
      name: 'Name',
      publishCidrRoute: 'PublishCidrRoute',
      transitRouterCidrId: 'TransitRouterCidrId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidr: 'string',
      description: 'string',
      name: 'string',
      publishCidrRoute: 'boolean',
      transitRouterCidrId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersResponseBodyTransitRouters extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the CEN instance belongs.
   * 
   * @example
   * 1210123456123456
   */
  aliUid?: number;
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the transit router instance was created.
   * 
   * The time is displayed in UTC in the `YYYY-MM-DDThh:mmZ` format.
   * 
   * @example
   * 2021-03-15T09:39Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The region ID of the transit router instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the transit router instance. Valid values:
   * 
   * - **Creating**: being created.
   * - **Active**: active.
   * - **Modifying**: being modified.
   * - **Deleting**: being deleted.
   * - **Upgrading**: being upgraded.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether the multicast feature is enabled for the transit router instance. Valid values:
   * 
   * - **true**: enabled.
   * - **false**: disabled.
   * 
   * @example
   * false
   */
  supportMulticast?: boolean;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListTransitRoutersResponseBodyTransitRoutersTags[];
  /**
   * @remarks
   * The list of transit router CIDR blocks.
   */
  transitRouterCidrList?: ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList[];
  /**
   * @remarks
   * The description of the transit router instance.
   * 
   * @example
   * testdesc
   */
  transitRouterDescription?: string;
  /**
   * @remarks
   * The transit router instance ID.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router instance.
   * 
   * @example
   * testname
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The type of the transit router instance. Valid values:
   * 
   * - **Enterprise**: Enterprise Edition transit router.
   * - **Basic**: Basic Edition transit router.
   * 
   * @example
   * Enterprise
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      cenId: 'CenId',
      creationTime: 'CreationTime',
      regionId: 'RegionId',
      status: 'Status',
      supportMulticast: 'SupportMulticast',
      tags: 'Tags',
      transitRouterCidrList: 'TransitRouterCidrList',
      transitRouterDescription: 'TransitRouterDescription',
      transitRouterId: 'TransitRouterId',
      transitRouterName: 'TransitRouterName',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'number',
      cenId: 'string',
      creationTime: 'string',
      regionId: 'string',
      status: 'string',
      supportMulticast: 'boolean',
      tags: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRoutersTags },
      transitRouterCidrList: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList },
      transitRouterDescription: 'string',
      transitRouterId: 'string',
      transitRouterName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    if(Array.isArray(this.transitRouterCidrList)) {
      $dara.Model.validateArray(this.transitRouterCidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransitRoutersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. For more information about paging, see the related parameter descriptions.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 68521297-5FA6-46CB-B4EB-658F1C68C8CC
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
  /**
   * @remarks
   * The list of transit router instances.
   */
  transitRouters?: ListTransitRoutersResponseBodyTransitRouters[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      transitRouters: 'TransitRouters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      transitRouters: { 'type': 'array', 'itemType': ListTransitRoutersResponseBodyTransitRouters },
    };
  }

  validate() {
    if(Array.isArray(this.transitRouters)) {
      $dara.Model.validateArray(this.transitRouters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

