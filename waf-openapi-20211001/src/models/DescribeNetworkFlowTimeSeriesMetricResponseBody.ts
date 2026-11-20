// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries extends $dara.Model {
  /**
   * @remarks
   * The returned data content. The meaning is consistent with the Metric parameter in the request parameters.
   * 
   * @example
   * total_requests
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
   * 
   * @example
   * []
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
   * The end time used for the query, represented as a UNIX timestamp in seconds. This value is the same as the EndDate parameter in the request.
   * 
   * @example
   * 1713888600
   */
  endDate?: number;
  /**
   * @remarks
   * The start time used for the query, represented as a UNIX timestamp in seconds. This value is the same as the StartDate parameter in the request.
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
   * The statistical time granularity of each data point in the returned time sequence data. For example, "15m" indicates that each returned data point is the statistical data for every 15 minutes. For the time granularity of the returned data, see **Description of the time granularity of time sequence data points**.
   * 
   * @example
   * 1m
   */
  aggregateInterval?: string;
  /**
   * @remarks
   * The time range used for the query.
   */
  dateRange?: DescribeNetworkFlowTimeSeriesMetricResponseBodyTimeSeriesMetaDataDateRange;
  /**
   * @remarks
   * The unit of the returned statistical data. Default value: requests.
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
   * The returned time sequence data. Time sequence data of multiple values can be returned.
   */
  networkFlowTimeSeries?: DescribeNetworkFlowTimeSeriesMetricResponseBodyNetworkFlowTimeSeries[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D827FCFE-90A7-4330-9326-D33C8B4*****
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

