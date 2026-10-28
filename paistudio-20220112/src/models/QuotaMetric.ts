// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metric } from "./Metric";


export class QuotaMetric extends $dara.Model {
  /**
   * @remarks
   * The GPU type.
   * 
   * @example
   * GU108
   */
  GPUType?: string;
  /**
   * @remarks
   * The performance metrics.
   * 
   * @example
   * 23000
   */
  metrics?: Metric[];
  static names(): { [key: string]: string } {
    return {
      GPUType: 'GPUType',
      metrics: 'Metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
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

