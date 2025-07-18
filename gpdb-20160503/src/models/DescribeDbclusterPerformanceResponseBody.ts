// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The value of the performance metric and the time when the metric value was collected.
   */
  point?: string[];
  static names(): { [key: string]: string } {
    return {
      point: 'Point',
    };
  }

  static types(): { [key: string]: any } {
    return {
      point: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.point)) {
      $dara.Model.validateArray(this.point);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the compute node or compute group.
   * 
   * @example
   * standby-********-cpu
   */
  name?: string;
  /**
   * @remarks
   * The role of the node. Valid values:
   * 
   * *   **master**: primary coordinator node
   * *   **standby**: standby coordinator node
   * *   **segment**: compute node
   * 
   * @example
   * standby
   */
  role?: string;
  /**
   * @remarks
   * The value of the performance metric collected at a point in time.
   */
  values?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      role: 'Role',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      role: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues },
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

export class DescribeDBClusterPerformanceResponseBodyPerformanceKeys extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric. For more information, see [Performance parameters](https://help.aliyun.com/document_detail/86943.html).
   * 
   * @example
   * adbpg_group_cpu_used_percent
   */
  name?: string;
  /**
   * @remarks
   * Details of the performance metric of a node.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries[];
  /**
   * @remarks
   * The unit of the performance metric.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries },
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.series)) {
      $dara.Model.validateArray(this.series);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBClusterPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-bp12ga6v69h86****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. The time follows the ISO 8601 standard in the `YYYY-MM-DDTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the performance metric. For more information, see [Performance parameters](https://help.aliyun.com/document_detail/86943.html).
   */
  performanceKeys?: DescribeDBClusterPerformanceResponseBodyPerformanceKeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8E8990F0-C81E-4C94-8F51-5F**********
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time follows the ISO 8601 standard in the `YYYY-MM-DDTHH:mmZ` format. The time is displayed in UTC.
   * 
   * @example
   * 2021-11-03T15:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      endTime: 'string',
      performanceKeys: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformanceKeys },
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.performanceKeys)) {
      $dara.Model.validateArray(this.performanceKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

