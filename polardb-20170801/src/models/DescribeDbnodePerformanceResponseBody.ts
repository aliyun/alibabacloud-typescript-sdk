// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
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

export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
  performanceItemValue?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
  static names(): { [key: string]: string } {
    return {
      performanceItemValue: 'PerformanceItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItemValue: { 'type': 'array', 'itemType': DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
    };
  }

  validate() {
    if(Array.isArray(this.performanceItemValue)) {
      $dara.Model.validateArray(this.performanceItemValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
  measurement?: string;
  metricName?: string;
  points?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measurement: 'string',
      metricName: 'string',
      points: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
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

export class DescribeDBNodePerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceItem?: DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem[];
  static names(): { [key: string]: string } {
    return {
      performanceItem: 'PerformanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItem: { 'type': 'array', 'itemType': DescribeDBNodePerformanceResponseBodyPerformanceKeysPerformanceItem },
    };
  }

  validate() {
    if(Array.isArray(this.performanceItem)) {
      $dara.Model.validateArray(this.performanceItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBNodePerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the node in the PolarDB cluster.
   * 
   * @example
   * pi-*****************
   */
  DBNodeId?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * The end of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is in UTC.
   * 
   * @example
   * 2020-09-23T01:01:00Z
   */
  endTime?: string;
  performanceKeys?: DescribeDBNodePerformanceResponseBodyPerformanceKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E2FDB684-751D-424D-98B9-704BEA******
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format. The time is in UTC.
   * 
   * @example
   * 2020-09-23T01:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBNodeId: 'DBNodeId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBNodeId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      endTime: 'string',
      performanceKeys: DescribeDBNodePerformanceResponseBodyPerformanceKeys,
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

