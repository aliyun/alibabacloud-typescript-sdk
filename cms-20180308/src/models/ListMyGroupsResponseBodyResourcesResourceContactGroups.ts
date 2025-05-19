// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMyGroupsResponseBodyResourcesResourceContactGroupsContactGroup } from "./ListMyGroupsResponseBodyResourcesResourceContactGroupsContactGroup";


export class ListMyGroupsResponseBodyResourcesResourceContactGroups extends $dara.Model {
  contactGroup?: ListMyGroupsResponseBodyResourcesResourceContactGroupsContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': ListMyGroupsResponseBodyResourcesResourceContactGroupsContactGroup },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroup)) {
      $dara.Model.validateArray(this.contactGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

