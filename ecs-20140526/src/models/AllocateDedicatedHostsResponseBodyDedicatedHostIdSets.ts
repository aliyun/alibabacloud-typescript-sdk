// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateDedicatedHostsResponseBodyDedicatedHostIdSets extends $dara.Model {
  dedicatedHostId?: string[];
  static names(): { [key: string]: string } {
    return {
      dedicatedHostId: 'DedicatedHostId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dedicatedHostId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dedicatedHostId)) {
      $dara.Model.validateArray(this.dedicatedHostId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

