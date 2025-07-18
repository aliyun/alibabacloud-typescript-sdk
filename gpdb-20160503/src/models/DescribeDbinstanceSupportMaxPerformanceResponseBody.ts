// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance extends $dara.Model {
  /**
   * @remarks
   * The performance bottleneck type.
   * 
   * @example
   * ecs or disk
   */
  bottleneck?: string;
  /**
   * @remarks
   * The name of the performance metric.
   * 
   * @example
   * adbpg_status,adbpg_disk_status,adbpg_connection_status,adbgp_segment_disk_usage_percent_max,adbpg_master_disk_usage_percent_max,adbpg_disk_usage_percent
   */
  key?: string;
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
  unit?: string;
  /**
   * @remarks
   * The value of the performance metric.
   * 
   * @example
   * 90
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      bottleneck: 'Bottleneck',
      key: 'Key',
      unit: 'Unit',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bottleneck: 'string',
      key: 'string',
      unit: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances extends $dara.Model {
  performance?: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance[];
  static names(): { [key: string]: string } {
    return {
      performance: 'Performance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performance: { 'type': 'array', 'itemType': DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformancesPerformance },
    };
  }

  validate() {
    if(Array.isArray(this.performance)) {
      $dara.Model.validateArray(this.performance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceSupportMaxPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp***************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The queried performance metric.
   */
  performances?: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      performances: 'Performances',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      performances: DescribeDBInstanceSupportMaxPerformanceResponseBodyPerformances,
      requestId: 'string',
    };
  }

  validate() {
    if(this.performances && typeof (this.performances as any).validate === 'function') {
      (this.performances as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

