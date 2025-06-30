// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc } from "./DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc";


export class DescribeZoneVpcTreeResponseBodyZonesZoneVpcs extends $dara.Model {
  vpc?: DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneVpcTreeResponseBodyZonesZoneVpcsVpc },
    };
  }

  validate() {
    if(Array.isArray(this.vpc)) {
      $dara.Model.validateArray(this.vpc);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

