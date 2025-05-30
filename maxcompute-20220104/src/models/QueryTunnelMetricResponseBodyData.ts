// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTunnelMetricResponseBodyDataMetrics } from "./QueryTunnelMetricResponseBodyDataMetrics";


export class QueryTunnelMetricResponseBodyData extends $dara.Model {
  /**
   * @example
   * tunnel
   */
  category?: string;
  metrics?: QueryTunnelMetricResponseBodyDataMetrics[];
  /**
   * @example
   * slot_usage
   */
  name?: string;
  /**
   * @example
   * 60
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
      metrics: { 'type': 'array', 'itemType': QueryTunnelMetricResponseBodyDataMetrics },
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

