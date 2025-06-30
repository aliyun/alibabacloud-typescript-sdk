// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomLinesResponseBodyCustomLinesCustomLineIpv4s extends $dara.Model {
  ipv4?: string[];
  static names(): { [key: string]: string } {
    return {
      ipv4: 'Ipv4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ipv4)) {
      $dara.Model.validateArray(this.ipv4);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

