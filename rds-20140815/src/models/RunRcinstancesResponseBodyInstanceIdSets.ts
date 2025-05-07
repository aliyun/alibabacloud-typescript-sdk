// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunRCInstancesResponseBodyInstanceIdSets extends $dara.Model {
  instanceIdSet?: string[];
  static names(): { [key: string]: string } {
    return {
      instanceIdSet: 'InstanceIdSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIdSet: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIdSet)) {
      $dara.Model.validateArray(this.instanceIdSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

