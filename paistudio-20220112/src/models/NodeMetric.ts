// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metric } from "./Metric";


export class NodeMetric extends $dara.Model {
  /**
   * @remarks
   * The type of GPU.
   * 
   * @example
   * GU108
   */
  GPUType?: string;
  /**
   * @remarks
   * Performance Metrics.
   * 
   * @example
   * 23000
   */
  metrics?: Metric[];
  /**
   * @remarks
   * Edge zone ID.
   * 
   * @example
   * -i12****node
   */
  nodeID?: string;
  static names(): { [key: string]: string } {
    return {
      GPUType: 'GPUType',
      metrics: 'Metrics',
      nodeID: 'NodeID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GPUType: 'string',
      metrics: { 'type': 'array', 'itemType': Metric },
      nodeID: 'string',
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

