// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop } from "./DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop";


export class DescribeStatisticSummaryResponseBodyZoneRequestTops extends $dara.Model {
  zoneRequestTop?: DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeStatisticSummaryResponseBodyZoneRequestTopsZoneRequestTop },
    };
  }

  validate() {
    if(Array.isArray(this.zoneRequestTop)) {
      $dara.Model.validateArray(this.zoneRequestTop);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

