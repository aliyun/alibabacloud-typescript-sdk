// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceMetricsResponseBodyPodMetricsMetrics } from "./GetInstanceMetricsResponseBodyPodMetricsMetrics";


export class GetInstanceMetricsResponseBodyPodMetrics extends $dara.Model {
  /**
   * @remarks
   * The metrics of the pod that corresponds to the instance.
   */
  metrics?: GetInstanceMetricsResponseBodyPodMetricsMetrics[];
  /**
   * @remarks
   * The ID of the pod that corresponds to the instance.
   * 
   * @example
   * dsw-15870-695f44c5bc-hd6xm
   */
  podId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      podId: 'PodId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': GetInstanceMetricsResponseBodyPodMetricsMetrics },
      podId: 'string',
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

