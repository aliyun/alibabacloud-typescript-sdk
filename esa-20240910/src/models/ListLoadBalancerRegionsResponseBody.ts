// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancerRegionsResponseBodyRegions } from "./ListLoadBalancerRegionsResponseBodyRegions";


export class ListLoadBalancerRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of records per page
   * 
   * @example
   * 1024
   */
  pageSize?: number;
  /**
   * @remarks
   * List of region information
   */
  regions?: ListLoadBalancerRegionsResponseBodyRegions[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 81A5E222-24BF-17EF-9E80-A68D9B8F363D
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of records
   * 
   * @example
   * 12
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regions: 'Regions',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regions: { 'type': 'array', 'itemType': ListLoadBalancerRegionsResponseBodyRegions },
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regions)) {
      $dara.Model.validateArray(this.regions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

