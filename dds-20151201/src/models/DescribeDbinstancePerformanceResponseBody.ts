// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue extends $dara.Model {
  /**
   * @remarks
   * The date and time when the metric value was generated.
   * 
   * @example
   * 2022-06-13T10:58:00Z
   */
  date?: string;
  /**
   * @remarks
   * The value of the performance metric.
   * 
   * @example
   * 0.23
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
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

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues extends $dara.Model {
  performanceValue?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue[];
  static names(): { [key: string]: string } {
    return {
      performanceValue: 'PerformanceValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceValue: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValuesPerformanceValue },
    };
  }

  validate() {
    if(Array.isArray(this.performanceValue)) {
      $dara.Model.validateArray(this.performanceValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey extends $dara.Model {
  /**
   * @remarks
   * The performance metrics that are returned.
   * 
   * @example
   * CpuUsage
   */
  key?: string;
  /**
   * @remarks
   * The details of the performance metric values.
   */
  performanceValues?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues;
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
   * The format of the performance metric value. If the performance metric contains multiple fields, the fields are separated with ampersands ( &).
   * 
   * For example, if you query disk space usage, the returned value of the **ValueFormat** parameter is **ins_size\\&data_size\\&log_size**.
   * 
   * @example
   * cpu_usage
   */
  valueFormat?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      performanceValues: 'PerformanceValues',
      unit: 'Unit',
      valueFormat: 'ValueFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      performanceValues: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKeyPerformanceValues,
      unit: 'string',
      valueFormat: 'string',
    };
  }

  validate() {
    if(this.performanceValues && typeof (this.performanceValues as any).validate === 'function') {
      (this.performanceValues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstancePerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceKey?: DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey[];
  static names(): { [key: string]: string } {
    return {
      performanceKey: 'PerformanceKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceKey: { 'type': 'array', 'itemType': DescribeDBInstancePerformanceResponseBodyPerformanceKeysPerformanceKey },
    };
  }

  validate() {
    if(Array.isArray(this.performanceKey)) {
      $dara.Model.validateArray(this.performanceKey);
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
   * The end of the queried time range. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-13T11:58Z
   */
  endTime?: string;
  /**
   * @remarks
   * The details of performance metrics.
   */
  performanceKeys?: DescribeDBInstancePerformanceResponseBodyPerformanceKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A300BC7-6D8F-527F-A2DB-A7768D26E9AC
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the queried time range. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2022-06-13T10:58Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
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

