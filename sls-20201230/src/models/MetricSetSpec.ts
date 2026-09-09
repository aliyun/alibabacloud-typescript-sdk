// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metric } from "./Metric";


export class MetricSetSpecLabels extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically extract (dynamically generate) labels based on data. Set this parameter to true in most cases.
   * 
   * @example
   * true
   */
  dynamic?: boolean;
  /**
   * @remarks
   * The static label key list. This parameter takes effect when dynamic is set to false.
   */
  keys?: string[];
  static names(): { [key: string]: string } {
    return {
      dynamic: 'dynamic',
      keys: 'keys',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamic: 'boolean',
      keys: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MetricSetSpec extends $dara.Model {
  /**
   * @remarks
   * The label definitions for the metric set. Labels are recommended to be automatically generated using the dynamic method. MetricSet defines only common labels. Defining additional labels under individual Metrics is not recommended.
   */
  labels?: MetricSetSpecLabels;
  /**
   * @remarks
   * The list of metrics included in the metric set.
   */
  metrics?: Metric[];
  /**
   * @remarks
   * Specifies whether the metric requires secondary processing before use. For example, Prometheus counter/summary/histogram metrics require calculations such as rate before they can be used directly.
   * 
   * @example
   * false
   */
  needsProcessing?: boolean;
  /**
   * @remarks
   * The query syntax for the metrics. Valid values: prom (PromQL), spl, and cms (CloudMonitor).
   * 
   * @example
   * prom
   */
  queryType?: string;
  static names(): { [key: string]: string } {
    return {
      labels: 'labels',
      metrics: 'metrics',
      needsProcessing: 'needs_processing',
      queryType: 'query_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labels: MetricSetSpecLabels,
      metrics: { 'type': 'array', 'itemType': Metric },
      needsProcessing: 'boolean',
      queryType: 'string',
    };
  }

  validate() {
    if(this.labels && typeof (this.labels as any).validate === 'function') {
      (this.labels as any).validate();
    }
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

