// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoadBalancerSpecResponseBodyLoadBalancerSpecs extends $dara.Model {
  /**
   * @remarks
   * The display name of the instance type.
   * 
   * @example
   * elb.s1.small
   */
  displayName?: string;
  /**
   * @remarks
   * The specifications of the ELB instance.
   * 
   * @example
   * elb.s1.small
   */
  loadBalancerSpec?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      loadBalancerSpec: 'LoadBalancerSpec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      loadBalancerSpec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoadBalancerSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The specifications. Valid values:
   */
  loadBalancerSpecs?: DescribeLoadBalancerSpecResponseBodyLoadBalancerSpecs[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 10
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 100. Default value: 10.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 7
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSpecs: 'LoadBalancerSpecs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSpecs: { 'type': 'array', 'itemType': DescribeLoadBalancerSpecResponseBodyLoadBalancerSpecs },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.loadBalancerSpecs)) {
      $dara.Model.validateArray(this.loadBalancerSpecs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

