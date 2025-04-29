// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostTypeSupportedInstanceTypesList extends $dara.Model {
  supportedInstanceTypesList?: string[];
  static names(): { [key: string]: string } {
    return {
      supportedInstanceTypesList: 'SupportedInstanceTypesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedInstanceTypesList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportedInstanceTypesList)) {
      $dara.Model.validateArray(this.supportedInstanceTypesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

