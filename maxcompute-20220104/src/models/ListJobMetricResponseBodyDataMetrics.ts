// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobMetricResponseBodyDataMetrics extends $dara.Model {
  /**
   * @remarks
   * Metric related information.
   */
  metric?: { [key: string]: string };
  /**
   * @remarks
   * Metric values information.
   */
  values?: number[][];
  static names(): { [key: string]: string } {
    return {
      metric: 'metric',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      values: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'number' } },
    };
  }

  validate() {
    if(this.metric) {
      $dara.Model.validateMap(this.metric);
    }
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

