// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerListenersRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the image.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The listener port.
   * 
   * @example
   * 80
   */
  listenerPort?: number;
  /**
   * @remarks
   * The ID of the ELB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * lb-5s7crik3yo3p5****
   */
  loadBalancerId?: string;
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

