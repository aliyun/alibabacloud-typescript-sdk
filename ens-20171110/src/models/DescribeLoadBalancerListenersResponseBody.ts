// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLoadBalancerListenersResponseBodyListeners } from "./DescribeLoadBalancerListenersResponseBodyListeners";


export class DescribeLoadBalancerListenersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The listeners of the ELB instance.
   */
  listeners?: DescribeLoadBalancerListenersResponseBodyListeners;
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F3B261DD-3858-4D3C-877D-303ADF374600
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 49
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      listeners: 'Listeners',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listeners: DescribeLoadBalancerListenersResponseBodyListeners,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.listeners && typeof (this.listeners as any).validate === 'function') {
      (this.listeners as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

