// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTunnelMetricDetailResponseBodyDataMetrics extends $dara.Model {
  metric?: { [key: string]: string };
  /**
   * @example
   * "avgValue":"11.5"
   */
  value?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      metric: 'metric',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metric: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      value: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.metric) {
      $dara.Model.validateMap(this.metric);
    }
    if(this.value) {
      $dara.Model.validateMap(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

