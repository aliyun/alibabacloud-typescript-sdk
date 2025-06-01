// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPopTrafficStatisticsResponseBodyTrafficData } from "./ListPopTrafficStatisticsResponseBodyTrafficData";


export class ListPopTrafficStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  trafficData?: ListPopTrafficStatisticsResponseBodyTrafficData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficData: 'TrafficData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficData: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficData },
    };
  }

  validate() {
    if(Array.isArray(this.trafficData)) {
      $dara.Model.validateArray(this.trafficData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

