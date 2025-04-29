// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType } from "./DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType";


export class DescribeDedicatedHostTypesResponseBodyDedicatedHostTypes extends $dara.Model {
  dedicatedHostType?: DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostType: 'DedicatedHostType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostType: { 'type': 'array', 'itemType': DescribeDedicatedHostTypesResponseBodyDedicatedHostTypesDedicatedHostType },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostType)) {
      $dara.Model.validateArray(this.dedicatedHostType);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

