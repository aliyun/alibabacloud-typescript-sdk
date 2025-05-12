// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomGroupsResponseBodyCustomGroupsCustomGroup } from "./ListCustomGroupsResponseBodyCustomGroupsCustomGroup";


export class ListCustomGroupsResponseBodyCustomGroups extends $dara.Model {
  customGroup?: ListCustomGroupsResponseBodyCustomGroupsCustomGroup[];
  static names(): { [key: string]: string } {
    return {
      customGroup: 'CustomGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customGroup: { 'type': 'array', 'itemType': ListCustomGroupsResponseBodyCustomGroupsCustomGroup },
    };
  }

  validate() {
    if(Array.isArray(this.customGroup)) {
      $dara.Model.validateArray(this.customGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

