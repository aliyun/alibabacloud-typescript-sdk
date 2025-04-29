// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute } from "./DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute";


export class DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributes extends $dara.Model {
  dedicatedHostRenewAttribute?: DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostRenewAttribute: 'DedicatedHostRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostRenewAttribute: { 'type': 'array', 'itemType': DescribeDedicatedHostAutoRenewResponseBodyDedicatedHostRenewAttributesDedicatedHostRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostRenewAttribute)) {
      $dara.Model.validateArray(this.dedicatedHostRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

