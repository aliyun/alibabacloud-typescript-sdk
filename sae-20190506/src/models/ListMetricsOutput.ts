// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetricInfo } from "./MetricInfo";


export class ListMetricsOutput extends $dara.Model {
  requestId?: string;
  metrics?: { [key: string]: MetricInfo[] };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      metrics: 'metrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      metrics: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': MetricInfo } },
    };
  }

  validate() {
    if(this.metrics) {
      $dara.Model.validateMap(this.metrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

