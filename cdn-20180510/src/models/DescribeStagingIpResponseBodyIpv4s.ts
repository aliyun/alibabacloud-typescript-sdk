// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeStagingIpResponseBodyIPV4s extends $dara.Model {
  IPV4?: string[];
  static names(): { [key: string]: string } {
    return {
      IPV4: 'IPV4',
    };
  }

  static types(): { [key: string]: any } {
    return {
      IPV4: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.IPV4)) {
      $dara.Model.validateArray(this.IPV4);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

