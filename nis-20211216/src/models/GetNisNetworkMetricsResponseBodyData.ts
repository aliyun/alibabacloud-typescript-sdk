// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNisNetworkMetricsResponseBodyDataMetrics } from "./GetNisNetworkMetricsResponseBodyDataMetrics";


export class GetNisNetworkMetricsResponseBodyData extends $dara.Model {
  metrics?: GetNisNetworkMetricsResponseBodyDataMetrics[];
  /**
   * @example
   * Bits/Second
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetNisNetworkMetricsResponseBodyDataMetrics },
      unit: 'string',
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

