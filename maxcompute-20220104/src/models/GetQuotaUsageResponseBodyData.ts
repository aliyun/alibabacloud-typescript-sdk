// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetQuotaUsageResponseBodyDataPlot } from "./GetQuotaUsageResponseBodyDataPlot";


export class GetQuotaUsageResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The metric results.
   */
  metrics?: { [key: string]: any };
  /**
   * @remarks
   * The information about the chart.
   */
  plot?: GetQuotaUsageResponseBodyDataPlot[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'metrics',
      plot: 'plot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      plot: { 'type': 'array', 'itemType': GetQuotaUsageResponseBodyDataPlot },
    };
  }

  validate() {
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    if(Array.isArray(this.plot)) {
      $dara.Model.validateArray(this.plot);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

