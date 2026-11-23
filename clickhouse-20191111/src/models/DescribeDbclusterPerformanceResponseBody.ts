// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues extends $dara.Model {
  /**
   * @remarks
   * The performance value.
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

export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance data list.
   * 
   * @example
   * cc-bp125e3uu94wo1s0k16****
   */
  name?: string;
  /**
   * @remarks
   * The performance metric values. Each value corresponds to a collection time point.
   */
  values?: DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeriesValues },
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

export class DescribeDBClusterPerformanceResponseBodyPerformances extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metrics.
   * 
   * @example
   * MEM_USAGE
   */
  key?: string;
  /**
   * @remarks
   * The name of the performance value.
   * 
   * @example
   * mem_usage
   */
  name?: string;
  /**
   * @remarks
   * The collection of performance metrics.
   */
  series?: DescribeDBClusterPerformanceResponseBodyPerformancesSeries[];
  /**
   * @remarks
   * The data unit.
   * 
   * @example
   * %
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      name: 'Name',
      series: 'Series',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      name: 'string',
      series: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformancesSeries },
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
   * The cluster ID.
   * 
   * @example
   * cc-bp125e3uu94wo****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Format: yyyy-MM-ddTHH:mmZ (UTC time).
   * 
   * @example
   * 2021-11-27T16:38Z
   */
  endTime?: string;
  /**
   * @remarks
   * The list of cluster performance metric values.
   */
  performances?: DescribeDBClusterPerformanceResponseBodyPerformances[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FE242962-6DA3-5FC8-9691-37B62A3210F7
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. Format: yyyy-MM-ddTHH:mmZ (UTC time).
   * 
   * @example
   * 2021-11-27T16:37Z
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
      performances: { 'type': 'array', 'itemType': DescribeDBClusterPerformanceResponseBodyPerformances },
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

