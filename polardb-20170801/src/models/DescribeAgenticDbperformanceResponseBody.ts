// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeysPointsPoints extends $dara.Model {
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'number',
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

export class DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeysPoints extends $dara.Model {
  points?: DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeysPointsPoints[];
  static names(): { [key: string]: string } {
    return {
      points: 'points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      points: { 'type': 'array', 'itemType': DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeysPointsPoints },
    };
  }

  validate() {
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeys extends $dara.Model {
  branchId?: string;
  measurement?: string;
  metricName?: string;
  points?: DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeysPoints;
  static names(): { [key: string]: string } {
    return {
      branchId: 'BranchId',
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchId: 'string',
      measurement: 'string',
      metricName: 'string',
      points: DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeysPoints,
    };
  }

  validate() {
    if(this.points && typeof (this.points as any).validate === 'function') {
      (this.points as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAgenticDBPerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceKeys?: DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeys[];
  static names(): { [key: string]: string } {
    return {
      performanceKeys: 'performanceKeys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKeys: { 'type': 'array', 'itemType': DescribeAgenticDBPerformanceResponseBodyPerformanceKeysPerformanceKeys },
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

export class DescribeAgenticDBPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The AgenticDB cluster ID.
   * 
   * @example
   * pc-**************
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The end time of the query. Specify the time in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.
   * 
   * @example
   * 2020-09-23T01:01:00Z
   */
  endTime?: string;
  performanceKeys?: DescribeAgenticDBPerformanceResponseBodyPerformanceKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2F029645-FED9-4FE8-A6D3-488954******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format and in UTC.
   * 
   * @example
   * 2020-09-23T01:00Z
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
      performanceKeys: DescribeAgenticDBPerformanceResponseBodyPerformanceKeys,
      requestId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.performanceKeys && typeof (this.performanceKeys as any).validate === 'function') {
      (this.performanceKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

