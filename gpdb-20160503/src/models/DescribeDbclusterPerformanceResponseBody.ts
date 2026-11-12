// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The performance metric value.
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
   * - **master**: Master node.
   * - **standby**: Standby node.
   * - **segment**: Compute node.
   * 
   * @example
   * standby
   */
  role?: string;
  /**
   * @remarks
   * The performance metric values. Each value corresponds to a collection time point.
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
   * The name of the performance metric. For more information, see [Performance metric table](https://help.aliyun.com/document_detail/86943.html).
   * 
   * @example
   * adbpg_group_cpu_used_percent
   */
  name?: string;
  /**
   * @remarks
   * The collection of performance metrics.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformanceKeysSeries[];
  /**
   * @remarks
   * The unit of the monitoring metrics.
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
   * The end time of the query in UTC. Specify the time in the `YYYY-MM-DDTHH:mmZ` format.
   * 
   * @example
   * 2021-11-03T15:10Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of performance metric values for the instance.
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
   * The start time of the query in UTC. Specify the time in the `YYYY-MM-DDTHH:mmZ` format.
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

