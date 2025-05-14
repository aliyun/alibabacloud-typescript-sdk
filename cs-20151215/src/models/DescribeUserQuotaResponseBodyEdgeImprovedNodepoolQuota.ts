// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserQuotaResponseBodyEdgeImprovedNodepoolQuota extends $dara.Model {
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The maximum bandwidth of each enhanced edge node pool. Unit: Mbit/s.
   * 
   * @example
   * 10
   */
  bandwidth?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The maximum number of enhanced edge node pools that you can create within an Alibaba Cloud account.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * This parameter is discontinued.
   * 
   * The maximum subscription duration of an enhanced edge node pool. Unit: months.
   * 
   * >  You are charged for enhanced edge node pools based on the pay-as-you-go billing method. Therefore, you can ignore this parameter.
   * 
   * @example
   * 3
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'bandwidth',
      count: 'count',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      count: 'number',
      period: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

