// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups } from "./DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups";


export class DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroups extends $dara.Model {
  dedicatedHostGroups?: DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostGroups: 'DedicatedHostGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostGroups: { 'type': 'array', 'itemType': DescribeDedicatedHostGroupsResponseBodyDedicatedHostGroupsDedicatedHostGroups },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostGroups)) {
      $dara.Model.validateArray(this.dedicatedHostGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

