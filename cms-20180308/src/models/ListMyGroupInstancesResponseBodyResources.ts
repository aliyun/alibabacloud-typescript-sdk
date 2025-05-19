// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMyGroupInstancesResponseBodyResourcesResource } from "./ListMyGroupInstancesResponseBodyResourcesResource";


export class ListMyGroupInstancesResponseBodyResources extends $dara.Model {
  resource?: ListMyGroupInstancesResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListMyGroupInstancesResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

