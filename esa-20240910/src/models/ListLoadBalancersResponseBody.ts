// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLoadBalancersResponseBodyLoadBalancers } from "./ListLoadBalancersResponseBodyLoadBalancers";


export class ListLoadBalancersResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array format that returns the list of load balancers.
   */
  loadBalancers?: ListLoadBalancersResponseBodyLoadBalancers[];
  /**
   * @remarks
   * Page number, same as the PageNumber in the request parameters.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Number of items per page.
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
   * CB1A380B-09F0-41BB-A198-72F8FD6DA2FE
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of items.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancers: 'LoadBalancers',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancers: { 'type': 'array', 'itemType': ListLoadBalancersResponseBodyLoadBalancers },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancers)) {
      $dara.Model.validateArray(this.loadBalancers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

