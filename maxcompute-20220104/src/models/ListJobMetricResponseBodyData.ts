// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobMetricResponseBodyDataMetrics } from "./ListJobMetricResponseBodyDataMetrics";


export class ListJobMetricResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The category of the metrics.
   * 
   * @example
   * job
   */
  category?: string;
  /**
   * @remarks
   * Metric details.
   */
  metrics?: ListJobMetricResponseBodyDataMetrics[];
  /**
   * @remarks
   * The name of observation metric.
   * 
   * @example
   * num
   */
  name?: string;
  /**
   * @remarks
   * The monitoring statistical period.Unit:Second(s).
   * 
   * @example
   * 3600
   */
  period?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'category',
      metrics: 'metrics',
      name: 'name',
      period: 'period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      metrics: { 'type': 'array', 'itemType': ListJobMetricResponseBodyDataMetrics },
      name: 'string',
      period: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metrics)) {
      $dara.Model.validateArray(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

