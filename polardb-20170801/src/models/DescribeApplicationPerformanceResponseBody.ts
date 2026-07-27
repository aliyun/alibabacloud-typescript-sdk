// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue extends $dara.Model {
  step?: number;
  timestamp?: number;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      step: 'Step',
      timestamp: 'Timestamp',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      step: 'number',
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

export class DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPoints extends $dara.Model {
  performanceItemValue?: DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue[];
  static names(): { [key: string]: string } {
    return {
      performanceItemValue: 'PerformanceItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItemValue: { 'type': 'array', 'itemType': DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPointsPerformanceItemValue },
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

export class DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItem extends $dara.Model {
  componentId?: string;
  componentType?: string;
  measurement?: string;
  metricName?: string;
  points?: DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPoints;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      componentType: 'ComponentType',
      measurement: 'Measurement',
      metricName: 'MetricName',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
      componentType: 'string',
      measurement: 'string',
      metricName: 'string',
      points: DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItemPoints,
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

export class DescribeApplicationPerformanceResponseBodyPerformanceKeys extends $dara.Model {
  performanceItem?: DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItem[];
  static names(): { [key: string]: string } {
    return {
      performanceItem: 'PerformanceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      performanceItem: { 'type': 'array', 'itemType': DescribeApplicationPerformanceResponseBodyPerformanceKeysPerformanceItem },
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

export class DescribeApplicationPerformanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application cluster ID.
   * 
   * @example
   * pa-**************
   */
  applicationId?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * supabase
   */
  applicationType?: string;
  /**
   * @remarks
   * The end of the time range to query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * @example
   * 2025-05-23T02:21:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The data granularity.
   * 
   * @example
   * 60
   */
  interval?: string;
  performanceKeys?: DescribeApplicationPerformanceResponseBodyPerformanceKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CDB3258F-B5DE-43C4-8935-CBA0CA******
   */
  requestId?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The time is in the `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * @example
   * 2022-11-15T16:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      applicationType: 'ApplicationType',
      endTime: 'EndTime',
      interval: 'Interval',
      performanceKeys: 'PerformanceKeys',
      requestId: 'RequestId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      applicationType: 'string',
      endTime: 'string',
      interval: 'string',
      performanceKeys: DescribeApplicationPerformanceResponseBodyPerformanceKeys,
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

