// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints } from "./ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints";


export class ListPopTrafficStatisticsResponseBodyTrafficData extends $dara.Model {
  datapoints?: ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints[];
  /**
   * @example
   * InternetTx
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints },
      metricName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datapoints)) {
      $dara.Model.validateArray(this.datapoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

