// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metric } from "./Metric";


export class ResourceGroupMetric extends $dara.Model {
  gpuType?: string;
  /**
   * @example
   * 23000
   */
  metrics?: Metric[];
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupID?: string;
  static names(): { [key: string]: string } {
    return {
      gpuType: 'GpuType',
      metrics: 'Metrics',
      resourceGroupID: 'ResourceGroupID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gpuType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
      resourceGroupID: 'string',
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

