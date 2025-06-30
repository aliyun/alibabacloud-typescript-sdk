// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop } from "./DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop";


export class DescribeRequestGraphResponseBodyRequestDetails extends $dara.Model {
  zoneRequestTop?: DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop[];
  static names(): { [key: string]: string } {
    return {
      zoneRequestTop: 'ZoneRequestTop',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zoneRequestTop: { 'type': 'array', 'itemType': DescribeRequestGraphResponseBodyRequestDetailsZoneRequestTop },
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

