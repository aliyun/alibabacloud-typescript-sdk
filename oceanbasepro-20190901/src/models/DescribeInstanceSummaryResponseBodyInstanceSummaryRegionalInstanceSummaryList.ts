// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSummaryResponseBodyInstanceSummaryRegionalInstanceSummaryList extends $dara.Model {
  /**
   * @remarks
   * The number of expired instances.
   * 
   * @example
   * 1
   */
  expiredInstancesCount?: number;
  /**
   * @remarks
   * The number of instances about to expire.
   * 
   * @example
   * 1
   */
  immediatelyExpiredInstancesCount?: number;
  /**
   * @remarks
   * The number of recently created instances.
   * 
   * @example
   * 1
   */
  recentCreatedInstancesCount?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
  region?: string;
  /**
   * @remarks
   * The total number of running instances.
   * 
   * @example
   * 1
   */
  runningInstancesCount?: number;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 3
   */
  totalInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      expiredInstancesCount: 'ExpiredInstancesCount',
      immediatelyExpiredInstancesCount: 'ImmediatelyExpiredInstancesCount',
      recentCreatedInstancesCount: 'RecentCreatedInstancesCount',
      region: 'Region',
      runningInstancesCount: 'RunningInstancesCount',
      totalInstancesCount: 'TotalInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiredInstancesCount: 'number',
      immediatelyExpiredInstancesCount: 'number',
      recentCreatedInstancesCount: 'number',
      region: 'string',
      runningInstancesCount: 'number',
      totalInstancesCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

