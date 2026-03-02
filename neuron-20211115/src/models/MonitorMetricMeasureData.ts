// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorMetricMeasurePointData } from "./MonitorMetricMeasurePointData";


export class MonitorMetricMeasureData extends $dara.Model {
  /**
   * @example
   * youngGcCount
   */
  measure?: string;
  measurePointData?: MonitorMetricMeasurePointData[];
  static names(): { [key: string]: string } {
    return {
      measure: 'measure',
      measurePointData: 'measurePointData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measure: 'string',
      measurePointData: { 'type': 'array', 'itemType': MonitorMetricMeasurePointData },
    };
  }

  validate() {
    if(Array.isArray(this.measurePointData)) {
      $dara.Model.validateArray(this.measurePointData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

