// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGroupsResponseBodyDataAppGroups } from "./ListGroupsResponseBodyDataAppGroups";


export class ListGroupsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The applications and their details.
   */
  appGroups?: ListGroupsResponseBodyDataAppGroups[];
  static names(): { [key: string]: string } {
    return {
      appGroups: 'AppGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroups: { 'type': 'array', 'itemType': ListGroupsResponseBodyDataAppGroups },
    };
  }

  validate() {
    if(Array.isArray(this.appGroups)) {
      $dara.Model.validateArray(this.appGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

