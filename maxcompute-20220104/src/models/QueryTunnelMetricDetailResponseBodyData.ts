// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTunnelMetricDetailResponseBodyDataMetrics } from "./QueryTunnelMetricDetailResponseBodyDataMetrics";


export class QueryTunnelMetricDetailResponseBodyData extends $dara.Model {
  metrics?: QueryTunnelMetricDetailResponseBodyDataMetrics[];
  /**
   * @example
   * tableA
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'metrics',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': QueryTunnelMetricDetailResponseBodyDataMetrics },
      name: 'string',
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

