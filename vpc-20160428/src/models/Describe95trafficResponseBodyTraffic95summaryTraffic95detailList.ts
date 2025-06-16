// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailListTraffic95Detail } from "./Describe95trafficResponseBodyTraffic95summaryTraffic95detailListTraffic95detail";


export class Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailList extends $dara.Model {
  traffic95Detail?: Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailListTraffic95Detail[];
  static names(): { [key: string]: string } {
    return {
      traffic95Detail: 'Traffic95Detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traffic95Detail: { 'type': 'array', 'itemType': Describe95TrafficResponseBodyTraffic95SummaryTraffic95DetailListTraffic95Detail },
    };
  }

  validate() {
    if(Array.isArray(this.traffic95Detail)) {
      $dara.Model.validateArray(this.traffic95Detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

