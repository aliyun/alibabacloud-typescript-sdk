// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The metric. This value is the same as the value of Metric in the request parameters.
   * 
   * @example
   * monitored_requests
   */
  metric?: string;
  /**
   * @remarks
   * The time points. Each point represents a time range.
   */
  timestamps?: string[];
  /**
   * @remarks
   * The data points. Each point represents a count for a time range.
   */
  values?: number[];
  static names(): { [key: string]: string } {
    return {
      metric: 'Metric',
      timestamps: 'Timestamps',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: 'string',
      timestamps: { 'type': 'array', 'itemType': 'string' },
      values: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.timestamps)) {
      $dara.Model.validateArray(this.timestamps);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange extends $dara.Model {
  /**
   * @remarks
   * The end of the time range to query. The value is a Unix timestamp. Unit: seconds. This value is the same as the value of EndDate in the request parameters.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a Unix timestamp. Unit: seconds. This value is the same as the value of StartDate in the request parameters.
   * 
   * @example
   * 1713888000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaData extends $dara.Model {
  /**
   * @remarks
   * The time granularity of data points in the time series data returned. For example, a value of 15m indicates that data points are collected at 15-minute intervals. For more information about time granularities, see the **Time granularities of data points in time series** section below.
   * 
   * @example
   * 1m
   */
  aggregateInterval?: string;
  /**
   * @remarks
   * The time range that is used for the query.
   */
  dateRange?: DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange;
  /**
   * @remarks
   * The unit of the statistics returned. It is fixed as requests.
   * 
   * @example
   * requests
   */
  units?: string;
  static names(): { [key: string]: string } {
    return {
      aggregateInterval: 'AggregateInterval',
      dateRange: 'DateRange',
      units: 'Units',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregateInterval: 'string',
      dateRange: DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange,
      units: 'string',
    };
  }

  validate() {
    if(this.dateRange && typeof (this.dateRange as any).validate === 'function') {
      (this.dateRange as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSecurityEventTimeSeriesMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-*****4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The time series data returned. This operation can return time series for multiple metrics.
   */
  securityEventTimeSeries?: DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries[];
  /**
   * @remarks
   * The metadata of the time series data returned.
   */
  timeSeriesMetaData?: DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaData;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityEventTimeSeries: 'SecurityEventTimeSeries',
      timeSeriesMetaData: 'TimeSeriesMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityEventTimeSeries: { 'type': 'array', 'itemType': DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries },
      timeSeriesMetaData: DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.securityEventTimeSeries)) {
      $dara.Model.validateArray(this.securityEventTimeSeries);
    }
    if(this.timeSeriesMetaData && typeof (this.timeSeriesMetaData as any).validate === 'function') {
      (this.timeSeriesMetaData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

