// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The metric name, consistent with the Metric request parameter.
   * 
   * @example
   * total_requests
   */
  metric?: string;
  /**
   * @remarks
   * The array of timestamps (seconds) marking the start of each time interval.
   */
  timestamps?: string[];
  /**
   * @remarks
   * The array of counts, each representing the count for the corresponding time interval.
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

export class DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange extends $dara.Model {
  /**
   * @remarks
   * The end time of the query range (Unix timestamp, seconds). Same as the EndDate request parameter.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start time of the query range (Unix timestamp, seconds). Same as the StartDate request parameter.
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

export class DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaData extends $dara.Model {
  /**
   * @remarks
   * The time granularity. For example, 15m indicates that each data point is counted every 15 minutes. For details, see the **Time granularity of time series data points** section below.
   * 
   * @example
   * 1m
   */
  aggregateInterval?: string;
  /**
   * @remarks
   * The query time range.
   */
  dateRange?: DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange;
  /**
   * @remarks
   * The unit of the returned data. It is fixed as requests.
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
      dateRange: DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange,
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

export class DescribeNetworkFlowTimeSeriesMetricResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of time-series data. Supports returning data with multiple values.
   */
  networkFlowTimeSeries?: DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4C7726
   */
  requestId?: string;
  /**
   * @remarks
   * The metadata of the returned data.
   */
  timeSeriesMetaData?: DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaData;
  static names(): { [key: string]: string } {
    return {
      networkFlowTimeSeries: 'NetworkFlowTimeSeries',
      requestId: 'RequestId',
      timeSeriesMetaData: 'TimeSeriesMetaData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkFlowTimeSeries: { 'type': 'array', 'itemType': DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries },
      requestId: 'string',
      timeSeriesMetaData: DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaData,
    };
  }

  validate() {
    if(Array.isArray(this.networkFlowTimeSeries)) {
      $dara.Model.validateArray(this.networkFlowTimeSeries);
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

