// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMyGroupsResponseBodyResourcesResource } from "./ListMyGroupsResponseBodyResourcesResource";


export class ListMyGroupsResponseBodyResources extends $dara.Model {
  resource?: ListMyGroupsResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': ListMyGroupsResponseBodyResourcesResource },
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

