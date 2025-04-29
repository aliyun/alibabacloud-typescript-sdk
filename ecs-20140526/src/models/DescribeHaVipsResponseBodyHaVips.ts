// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeHaVipsResponseBodyHaVipsHaVip } from "./DescribeHaVipsResponseBodyHaVipsHaVip";


export class DescribeHaVipsResponseBodyHaVips extends $dara.Model {
  haVip?: DescribeHaVipsResponseBodyHaVipsHaVip[];
  static names(): { [key: string]: string } {
    return {
      haVip: 'HaVip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVip: { 'type': 'array', 'itemType': DescribeHaVipsResponseBodyHaVipsHaVip },
    };
  }

  validate() {
    if(Array.isArray(this.haVip)) {
      $dara.Model.validateArray(this.haVip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

