// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WhiteIpGroup extends $dara.Model {
  whiteIpType?: string;
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      whiteIpType: 'WhiteIpType',
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      whiteIpType: 'string',
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

