// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metric } from "./Metric";


export class PodMetric extends $dara.Model {
  metrics?: Metric[];
  /**
   * @example
   * dlc-20210329110128-746bf7cl47pr8-worker-0
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
      metrics: { 'type': 'array', 'itemType': Metric },
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

