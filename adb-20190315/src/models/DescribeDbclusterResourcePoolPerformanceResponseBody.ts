// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * cpu
   */
  name?: string;
  /**
   * @remarks
   * The value of the metric.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances extends $dara.Model {
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * test_pool
   */
  resourcePoolName?: string;
  /**
   * @remarks
   * The sequential monitoring information about the resource groups.
   */
  resourcePoolSeries?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries[];
  static names(): { [key: string]: string } {
    return {
      resourcePoolName: 'ResourcePoolName',
      resourcePoolSeries: 'ResourcePoolSeries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourcePoolName: 'string',
      resourcePoolSeries: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformancesResourcePoolSeries },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePoolSeries)) {
      $dara.Model.validateArray(this.resourcePoolSeries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The metric of the resource group.
   * 
   * @example
   * AnalyticDB_RP_CPU
   */
  key?: string;
  /**
   * @remarks
   * The queried monitoring information about the resource groups.
   */
  resourcePoolPerformances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances[];
  /**
   * @remarks
   * The unit of the metric value.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      resourcePoolPerformances: 'ResourcePoolPerformances',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      resourcePoolPerformances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformancesResourcePoolPerformances },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourcePoolPerformances)) {
      $dara.Model.validateArray(this.resourcePoolPerformances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterResourcePoolPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * am-****************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end of the time range for monitoring the resource group. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-10T07:01:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The queried monitoring information about the metrics.
   */
  performances?: DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C7EDB8E4-9769-4233-88C7-DCA4C9******
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range for monitoring the resource group. The time follows the ISO 8601 standard in the *yyyy-MM-ddTHH:mm:ssZ* format. The time is displayed in UTC.
   * 
   * @example
   * 2021-06-10T07:00:00
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performances: 'Performances',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performances: { 'type': 'array', 'itemType': DescribeDBClusterResourcePoolPerformanceResponseBodyPerformances },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performances)) {
      $dara.Model.validateArray(this.performances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

