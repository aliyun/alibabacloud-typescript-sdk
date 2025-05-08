// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAttributeResponseBodyHaVipIds extends $dara.Model {
  haVipId?: string[];
  static names(): { [key: string]: string } {
    return {
      haVipId: 'HaVipId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      haVipId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.haVipId)) {
      $dara.Model.validateArray(this.haVipId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

