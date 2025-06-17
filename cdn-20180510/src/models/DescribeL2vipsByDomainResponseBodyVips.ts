// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeL2VipsByDomainResponseBodyVips extends $dara.Model {
  vip?: string[];
  static names(): { [key: string]: string } {
    return {
      vip: 'Vip',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vip: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vip)) {
      $dara.Model.validateArray(this.vip);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

