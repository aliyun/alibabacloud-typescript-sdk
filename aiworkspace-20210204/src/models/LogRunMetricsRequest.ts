// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunMetric } from "./RunMetric";


export class LogRunMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The metrics.
   */
  metrics?: RunMetric[];
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': RunMetric },
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

