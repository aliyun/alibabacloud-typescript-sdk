// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MonitorMetricMeasureData } from "./MonitorMetricMeasureData";


export class MonitorMetricResult extends $dara.Model {
  measureData?: MonitorMetricMeasureData[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      measureData: 'measureData',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      measureData: { 'type': 'array', 'itemType': MonitorMetricMeasureData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.measureData)) {
      $dara.Model.validateArray(this.measureData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

