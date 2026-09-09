// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Metric extends $dara.Model {
  /**
   * @remarks
   * The aggregation method of the metric (such as avg or sum). If the metric is already aggregated by the same dimensions (such as avg(rate(cpu_core_usage_seconds_total{}[1m]))), configuration is not required. Metrics based on log aggregation generally do not require configuration either.
   * 
   * @example
   * avg
   */
  aggregator?: string;
  /**
   * @remarks
   * The numeric or display formatting method, such as KMB (thousand/million/billion), percent, ms, or dthms (hours:minutes:seconds).
   * 
   * @example
   * KMB
   */
  dataFormat?: string;
  /**
   * @remarks
   * The business description of the metric.
   * 
   * @example
   * The number of requests processed by the service per second
   */
  description?: string;
  /**
   * @remarks
   * The display name for UI presentation, which can contain Chinese characters.
   * 
   * @example
   * Request Count
   */
  displayName?: string;
  /**
   * @remarks
   * The generation method of the metric. In PromQL mode, this is a PromQL expression (such as rate(request_count{}[1m]), which can be combined with aggregator to compute sum(...) by (label1, label2)). In SQL/SPL mode, this is an aggregation expression (such as count(1)) that is incorporated into the generated query statement.
   * 
   * @example
   * rate(request_count{}[1m])
   */
  generator?: string;
  /**
   * @remarks
   * Indicates whether the metric is a golden metric (core metrics such as latency, traffic, error count, and saturation).
   * 
   * @example
   * false
   */
  goldenMetric?: boolean;
  /**
   * @remarks
   * The collection interval of the metric in microseconds. Multiple values indicate that multiple collection interval precisions are supported.
   */
  intervalUs?: number[];
  /**
   * @remarks
   * The metric name, which is unique within the MetricSet.
   * 
   * @example
   * request_count
   */
  name?: string;
  /**
   * @remarks
   * The expected query mode of the metric: range (range query), instant (instant query), or both.
   * 
   * @example
   * instant
   */
  queryMode?: string;
  /**
   * @remarks
   * The metric type. Metrics that do not require secondary processing are fixed as gauge.
   * 
   * @example
   * gauge
   */
  type?: string;
  /**
   * @remarks
   * The metric unit, which is used for display only without automatic conversion. For example, ms is not automatically converted to s.
   * 
   * @example
   * ms
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      aggregator: 'aggregator',
      dataFormat: 'data_format',
      description: 'description',
      displayName: 'display_name',
      generator: 'generator',
      goldenMetric: 'golden_metric',
      intervalUs: 'interval_us',
      name: 'name',
      queryMode: 'query_mode',
      type: 'type',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregator: 'string',
      dataFormat: 'string',
      description: 'string',
      displayName: 'string',
      generator: 'string',
      goldenMetric: 'boolean',
      intervalUs: { 'type': 'array', 'itemType': 'number' },
      name: 'string',
      queryMode: 'string',
      type: 'string',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.intervalUs)) {
      $dara.Model.validateArray(this.intervalUs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

