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
   * The CIDR block of the transit router.
   * 
   * @example
   * 192.168.1.0/24
   */
  cidr?: string;
  /**
   * @remarks
   * The description of the CIDR block.
   * 
   * @example
   * CIDRdesc
   */
  description?: string;
  /**
   * @remarks
   * The name of the CIDR block.
   * 
   * @example
   * CIDRname
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the system is allowed to automatically add a route to the route table of the transit router. Valid values:
   * 
   * - **true**: yes
   * 
   *   A value of **true** indicates that after you create a private VPN connection and create a route learning correlation for the private VPC connection, the system automatically adds the following route to the route table of the transit router that is in route learning correlation with the private VPN connection: A blackhole route whose destination CIDR block is the CIDR block of the transit router. The CIDR block of the transit router refers to the CIDR block from which gateway IP addresses are allocated to IPsec-VPN connections. 
   *          
   *   The blackhole route is advertised only to the route tables of virtual border routers (VBRs) that are connected to the transit router. 
   * 
   * - **false**: no
   * 
   * @example
   * true
   */
  publishCidrRoute?: boolean;
  /**
   * @remarks
   * The ID of the CIDR block.
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
   * The ID of the CEN instance.
   * 
   * @example
   * cen-j3jzhw1zpau2km****
   */
  cenId?: string;
  /**
   * @remarks
   * The time when the transit router was created.
   * 
   * The time follows the ISO8601 standard in the `YYYY-MM-DDThh:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-03-15T09:39Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the region where the transit router is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The status of the transit router. Valid values:
   * 
   * *   **Creating**: The transit router is being created.
   * *   **Active**: The transit router is available.
   * *   **Modifying**: The transit router is being modified
   * *   **Deleting**: The transit router is being deleted.
   * *   **Upgrading**: The transit router is being upgraded.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * Indicates whether multicast is enabled for the transit router. Valid values:
   * 
   * *   **true**: enabled
   * *   **false**: disabled
   * 
   * @example
   * false
   */
  supportMulticast?: boolean;
  /**
   * @remarks
   * A list of tags.
   */
  tags?: ListTransitRoutersResponseBodyTransitRoutersTags[];
  /**
   * @remarks
   * The CIDR blocks of the transit router.
   */
  transitRouterCidrList?: ListTransitRoutersResponseBodyTransitRoutersTransitRouterCidrList[];
  /**
   * @remarks
   * The description of the transit router.
   * 
   * @example
   * testdesc
   */
  transitRouterDescription?: string;
  /**
   * @remarks
   * The ID of the transit router.
   * 
   * @example
   * tr-bp1su1ytdxtataupl****
   */
  transitRouterId?: string;
  /**
   * @remarks
   * The name of the transit router.
   * 
   * @example
   * testname
   */
  transitRouterName?: string;
  /**
   * @remarks
   * The edition of the transit router. Valid values:
   * 
   * *   **Enterprise**: Enhance Edition
   * *   **Basic**: Basic Edition
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
   * The ID of the request.
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
   * A list of transit routers.
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

