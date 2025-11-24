// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReusableSlbResponseBodyReusableSlbList extends $dara.Model {
  /**
   * @remarks
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp17xygzsxth0bwlz****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The name of the SLB instance.
   * 
   * @example
   * ad6044b015ac54484a20c47241175bb3
   */
  loadBalancerName?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      loadBalancerName: 'LoadBalancerName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      loadBalancerName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeReusableSlbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDDC0D86-2FC3-56FB-9213-96EB0A3523F1
   */
  requestId?: string;
  /**
   * @remarks
   * The list of SLB instances that can be reused.
   */
  reusableSlbList?: DescribeReusableSlbResponseBodyReusableSlbList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      reusableSlbList: 'ReusableSlbList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      reusableSlbList: { 'type': 'array', 'itemType': DescribeReusableSlbResponseBodyReusableSlbList },
    };
  }

  validate() {
    if(Array.isArray(this.reusableSlbList)) {
      $dara.Model.validateArray(this.reusableSlbList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

