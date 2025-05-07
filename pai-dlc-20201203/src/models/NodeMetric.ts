// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Metric } from "./Metric";


export class NodeMetric extends $dara.Model {
  metrics?: Metric[];
  /**
   * @example
   * asi_xxx
   */
  nodeName?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      nodeName: 'NodeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: { 'type': 'array', 'itemType': Metric },
      nodeName: 'string',
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

