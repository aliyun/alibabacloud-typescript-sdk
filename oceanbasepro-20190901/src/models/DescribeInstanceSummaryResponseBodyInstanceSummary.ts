// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeInstanceSummaryResponseBodyInstanceSummaryRegionalInstanceSummaryList } from "./DescribeInstanceSummaryResponseBodyInstanceSummaryRegionalInstanceSummaryList";


export class DescribeInstanceSummaryResponseBodyInstanceSummary extends $dara.Model {
  /**
   * @remarks
   * The total number of alerts during the query period.
   * 
   * @example
   * 1
   */
  alarmSummaryCount?: number;
  /**
   * @remarks
   * The total number of abnormal SQL statements.
   * 
   * @example
   * 1
   */
  anomalySQLCount?: number;
  /**
   * @remarks
   * The number of cluster instances.
   * 
   * @example
   * 1
   */
  clusterInstancesCount?: number;
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
   * The total number of expired instances to be released.
   * 
   * @example
   * 1
   */
  immediatelyExpiredInstancesCount?: number;
  /**
   * @remarks
   * The total number of clusters with capacity risks.
   * 
   * @example
   * 2
   */
  insufficientDiskInstancesCount?: number;
  /**
   * @remarks
   * The number of overloaded instances.
   * 
   * @example
   * 1
   */
  overLoadInstancesCount?: number;
  /**
   * @remarks
   * A list of regional instances.
   */
  regionalInstanceSummaryList?: DescribeInstanceSummaryResponseBodyInstanceSummaryRegionalInstanceSummaryList[];
  /**
   * @remarks
   * The number of running instances.
   * 
   * @example
   * 1
   */
  runningInstancesCount?: number;
  /**
   * @remarks
   * The number of tenant instances.
   * 
   * @example
   * 1
   */
  tenantInstancesCount?: number;
  /**
   * @remarks
   * The total number of instances.
   * 
   * @example
   * 3
   */
  totalInstancesCount?: number;
  /**
   * @remarks
   * The number of data transmission instances.
   * 
   * @example
   * 1
   */
  totalOmsInstancesCount?: number;
  static names(): { [key: string]: string } {
    return {
      alarmSummaryCount: 'AlarmSummaryCount',
      anomalySQLCount: 'AnomalySQLCount',
      clusterInstancesCount: 'ClusterInstancesCount',
      expiredInstancesCount: 'ExpiredInstancesCount',
      immediatelyExpiredInstancesCount: 'ImmediatelyExpiredInstancesCount',
      insufficientDiskInstancesCount: 'InsufficientDiskInstancesCount',
      overLoadInstancesCount: 'OverLoadInstancesCount',
      regionalInstanceSummaryList: 'RegionalInstanceSummaryList',
      runningInstancesCount: 'RunningInstancesCount',
      tenantInstancesCount: 'TenantInstancesCount',
      totalInstancesCount: 'TotalInstancesCount',
      totalOmsInstancesCount: 'TotalOmsInstancesCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmSummaryCount: 'number',
      anomalySQLCount: 'number',
      clusterInstancesCount: 'number',
      expiredInstancesCount: 'number',
      immediatelyExpiredInstancesCount: 'number',
      insufficientDiskInstancesCount: 'number',
      overLoadInstancesCount: 'number',
      regionalInstanceSummaryList: { 'type': 'array', 'itemType': DescribeInstanceSummaryResponseBodyInstanceSummaryRegionalInstanceSummaryList },
      runningInstancesCount: 'number',
      tenantInstancesCount: 'number',
      totalInstancesCount: 'number',
      totalOmsInstancesCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.regionalInstanceSummaryList)) {
      $dara.Model.validateArray(this.regionalInstanceSummaryList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

