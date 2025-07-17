// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutesResponseBodyPagingInfoRouteList extends $dara.Model {
  /**
   * @remarks
   * The creation time, which is a 64-bit timestamp.
   * 
   * @example
   * 1727055811000
   */
  createTime?: number;
  /**
   * @remarks
   * Route destination CIDR
   * 
   * @example
   * 192.168.0.0/16
   */
  destinationCidr?: string;
  /**
   * @remarks
   * Route ID
   * 
   * @example
   * 1000
   */
  id?: number;
  /**
   * @remarks
   * Network Resource ID
   * 
   * @example
   * 1000
   */
  networkId?: number;
  /**
   * @remarks
   * Unique identifier of the resource group to which it belongs
   * 
   * @example
   * Serverless_res_group_524257424564736_6831777003****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Unique identifier of network resource
   * 
   * @example
   * ns-679XXXXXX
   */
  resourceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      destinationCidr: 'DestinationCidr',
      id: 'Id',
      networkId: 'NetworkId',
      resourceGroupId: 'ResourceGroupId',
      resourceId: 'ResourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      destinationCidr: 'string',
      id: 'number',
      networkId: 'number',
      resourceGroupId: 'string',
      resourceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutesResponseBodyPagingInfo extends $dara.Model {
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
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of network resource routing information obtained.
   */
  routeList?: ListRoutesResponseBodyPagingInfoRouteList[];
  /**
   * @remarks
   * All data entries
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      routeList: 'RouteList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      routeList: { 'type': 'array', 'itemType': ListRoutesResponseBodyPagingInfoRouteList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.routeList)) {
      $dara.Model.validateArray(this.routeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListRoutesResponseBodyPagingInfo;
  /**
   * @remarks
   * The ID of the request. It is used to locate logs and troubleshoot problems.
   * 
   * @example
   * 6A6CBE87-9F91-1323-B680-E7A7065XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListRoutesResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

