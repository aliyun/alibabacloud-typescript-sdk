// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The content of the returned data. This is consistent with the \\`Metric\\` request parameter.
   * 
   * @example
   * monitored_requests
   */
  metric?: string;
  /**
   * @remarks
   * The time series. Each point represents the start time of a time range.
   */
  timestamps?: string[];
  /**
   * @remarks
   * The data series. Each point represents the statistical count within a specific time range.
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
   * The end time of the query. This is a UNIX timestamp. Unit: seconds. This value is the same as the \\`EndDate\\` request parameter.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start time of the query. This is a UNIX timestamp. Unit: seconds. This value is the same as the \\`StartDate\\` request parameter.
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
   * The time granularity of each data point in the returned time series data. For example, "15m" indicates that each returned data point represents statistics for a 15-minute interval. For more information about the time granularity of the returned data, see the Time granularity of time series data points section.
   * 
   * @example
   * 1m
   */
  aggregateInterval?: string;
  /**
   * @remarks
   * The time range used for the query.
   */
  dateRange?: DescribeSecurityEventTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange;
  /**
   * @remarks
   * The unit of the returned statistical data.
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
   * The returned time series data. The operation can return time series data for multiple values.
   */
  securityEventTimeSeries?: DescribeSecurityEventTimeSeriesMetricResponseBodySecurityEventTimeSeries[];
  /**
   * @remarks
   * The metadata of the returned data.
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

