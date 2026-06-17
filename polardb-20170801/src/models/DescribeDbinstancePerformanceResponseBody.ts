// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
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

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
  performanceItemValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
  static names(): { [key: string]: string } {
    return {
      performanceItemValue: 'PerformanceItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItemValue: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
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

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
  measurement?: string;
  metricName?: string;
  points?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
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
      points: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
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

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceItem?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItem[];
  static names(): { [key: string]: string } {
    return {
      performanceItem: 'PerformanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItem: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceItem },
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

export class DescribeDBInstancePerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * pi-*************
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The database engine type. Valid values:
   * 
   * - **MySQL**
   * 
   * - **PostgreSQL**
   * 
   * - **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The MySQL version number. Valid values:
   * 
   * - **5.6**
   * 
   * - **5.7**
   * 
   * - **8.0**
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The end time of the query. The time is in the `yyyy-MM-ddTHH:mmZ` format in UTC.
   * 
   * @example
   * 2020-09-23T01:01Z
   */
  endTime?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  performanceKeys?: DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F2A9EFA7-915F-4572-8299-85A307******
   */
  requestId?: string;
  /**
   * @remarks
   * The start time of the query. The time is in the `yyyy-MM-ddTHH:mmZ` format in UTC.
   * 
   * @example
   * 2020-09-23T01:01Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      endTime: 'EndTime',
      engine: 'Engine',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      endTime: 'string',
      engine: 'string',
      performanceKeys: DescribeDBInstancePerformanceResponseBodyPerformanceKeys,
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

