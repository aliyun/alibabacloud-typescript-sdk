// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchCloudGtmInstancesResponseBodyInstancesInstance } from "./SearchCloudGtmInstancesResponseBodyInstancesInstance";


export class SearchCloudGtmInstancesResponseBodyInstances extends $dara.Model {
  instance?: SearchCloudGtmInstancesResponseBodyInstancesInstance[];
  static names(): { [key: string]: string } {
    return {
      instance: 'Instance',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: { 'type': 'array', 'itemType': SearchCloudGtmInstancesResponseBodyInstancesInstance },
    };
  }

  validate() {
    if(Array.isArray(this.instance)) {
      $dara.Model.validateArray(this.instance);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

