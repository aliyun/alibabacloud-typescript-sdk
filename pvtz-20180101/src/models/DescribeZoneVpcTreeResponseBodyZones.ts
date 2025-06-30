// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZoneVpcTreeResponseBodyZonesZone } from "./DescribeZoneVpcTreeResponseBodyZonesZone";


export class DescribeZoneVpcTreeResponseBodyZones extends $dara.Model {
  zone?: DescribeZoneVpcTreeResponseBodyZonesZone[];
  static names(): { [key: string]: string } {
    return {
      zone: 'Zone',
    };
  }

  static types(): { [key: string]: any } {
    return {
      zone: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZone },
    };
  }

  validate() {
    if(Array.isArray(this.zone)) {
      $dara.Model.validateArray(this.zone);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

