// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeExcpetionCountResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of abnormal IP addresses (such as those in the Black Hole Activated state) among protected assets that are assigned public IP addresses (such as a cloud server ECS instance, a Server Load Balancer (SLB) instance, and an elastic IP address (EIP)).
   * 
   * @example
   * 0
   */
  exceptionIpCount?: number;
  /**
   * @remarks
   * The number of Anti-DDoS Origin instances that are about to expire (with a remaining validity period of less than 7 days).
   * 
   * @example
   * 1
   */
  expireTimeCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 4B45279A-B1BE-5EEE-87CA-58AF4183EA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exceptionIpCount: 'ExceptionIpCount',
      expireTimeCount: 'ExpireTimeCount',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exceptionIpCount: 'number',
      expireTimeCount: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

