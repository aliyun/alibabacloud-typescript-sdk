// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostsResponseBodyDedicatedHostsDedicatedHostSupportedCustomInstanceTypeFamilies extends $dara.Model {
  supportedCustomInstanceTypeFamily?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedCustomInstanceTypeFamily: 'SupportedCustomInstanceTypeFamily',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedCustomInstanceTypeFamily: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedCustomInstanceTypeFamily)) {
      $dara.Model.validateArray(this.supportedCustomInstanceTypeFamily);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

