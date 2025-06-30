// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeZoneInfoResponseBodyBindVpcsVpc } from "./DescribeZoneInfoResponseBodyBindVpcsVpc";


export class DescribeZoneInfoResponseBodyBindVpcs extends $dara.Model {
  vpc?: DescribeZoneInfoResponseBodyBindVpcsVpc[];
  static names(): { [key: string]: string } {
    return {
      vpc: 'Vpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpc: { 'type': 'array', 'itemType': DescribeZoneInfoResponseBodyBindVpcsVpc },
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

