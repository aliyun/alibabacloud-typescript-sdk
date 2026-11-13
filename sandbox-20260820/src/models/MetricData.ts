// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetricDataResultsSeriesPoints extends $dara.Model {
  /**
   * @remarks
   * The time corresponding to the metric value, in UTC seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  timestamp?: string;
  /**
   * @remarks
   * The metric value at this time. The unit is specified in unit.
   * 
   * This parameter is required.
   * 
   * @example
   * 0.25
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      timestamp: 'timestamp',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      timestamp: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricDataResultsSeries extends $dara.Model {
  /**
   * @remarks
   * The team, template, or other grouping values for this series.
   * 
   * This parameter is required.
   * 
   * @example
   * {"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"}
   */
  dimensions?: { [key: string]: string };
  /**
   * @remarks
   * The data points in chronological order. Only times with metric values are listed.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"timestamp":"2026-11-05T00:00:00Z","value":0.25},{"timestamp":"2026-11-05T00:01:00Z","value":0.5}]
   */
  points?: MetricDataResultsSeriesPoints[];
  static names(): { [key: string]: string } {
    return {
      dimensions: 'dimensions',
      points: 'points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dimensions: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      points: { 'type': 'array', 'itemType': MetricDataResultsSeriesPoints },
    };
  }

  validate() {
    if(this.dimensions) {
      $dara.Model.validateMap(this.dimensions);
    }
    if(Array.isArray(this.points)) {
      $dara.Model.validateArray(this.points);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricDataResults extends $dara.Model {
  /**
   * @remarks
   * The name of the metric in the request.
   * 
   * This parameter is required.
   * 
   * @example
   * cpuUsedCores
   */
  metricName?: string;
  /**
   * @remarks
   * The time series for the metric. An empty array is returned if no data points exist.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"dimensions":{"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"},"points":[{"timestamp":"2026-11-05T00:00:00Z","value":0.25},{"timestamp":"2026-11-05T00:01:00Z","value":0.5}]}]
   */
  series?: MetricDataResultsSeries[];
  /**
   * @remarks
   * The unit of the metric value, such as Core for CPU cores.
   * 
   * This parameter is required.
   * 
   * @example
   * Core
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      metricName: 'metricName',
      series: 'series',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      series: { 'type': 'array', 'itemType': MetricDataResultsSeries },
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

export class MetricData extends $dara.Model {
  /**
   * @remarks
   * The end time of the time series query, exclusive.
   * 
   * @example
   * 2026-11-05T00:02:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The grouping keys used for this query. An empty array is returned if no grouping is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * ["teamID"]
   */
  groupBy?: string[];
  /**
   * @remarks
   * The data point interval used for this query, in seconds.
   * 
   * This parameter is required.
   * 
   * @example
   * 60
   */
  period?: number;
  /**
   * @remarks
   * The result for each requested metric.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"metricName":"cpuUsedCores","unit":"Core","series":[{"dimensions":{"teamID":"70d1c834-0333-58d8-97ac-5336eb9179eb"},"points":[{"timestamp":"2026-11-05T00:00:00Z","value":0.25},{"timestamp":"2026-11-05T00:01:00Z","value":0.5}]}]}]
   */
  results?: MetricDataResults[];
  /**
   * @remarks
   * The start time of the time series query, inclusive.
   * 
   * @example
   * 2026-11-05T00:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The time of the query. Returned only for single-point queries.
   * 
   * @example
   * 2026-11-05T00:01:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      groupBy: 'groupBy',
      period: 'period',
      results: 'results',
      startTime: 'startTime',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      groupBy: { 'type': 'array', 'itemType': 'string' },
      period: 'number',
      results: { 'type': 'array', 'itemType': MetricDataResults },
      startTime: 'string',
      time: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupBy)) {
      $dara.Model.validateArray(this.groupBy);
    }
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

