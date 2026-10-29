// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenersRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the listener.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The frontend port used by the load balancing instance. Valid values: **1** to **65535**.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the load balancing instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5s7crik3yo3p5****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page during paging in a paged query.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      listenerPort: 'ListenerPort',
      loadBalancerId: 'LoadBalancerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      listenerPort: 'number',
      loadBalancerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

