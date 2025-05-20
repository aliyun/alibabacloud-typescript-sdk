// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Group } from "./Group";
import { User } from "./User";


export class ListGroupMemberResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the groups.
   */
  groupItems?: Group[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. If next_marker is empty, no next page exists.
   * 
   * @example
   * NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhM1
   */
  nextMarker?: string;
  /**
   * @remarks
   * The information about the users.
   */
  userItems?: User[];
  static names(): { [key: string]: string } {
    return {
      groupItems: 'group_items',
      nextMarker: 'next_marker',
      userItems: 'user_items',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupItems: { 'type': 'array', 'itemType': Group },
      nextMarker: 'string',
      userItems: { 'type': 'array', 'itemType': User },
    };
  }

  validate() {
    if(Array.isArray(this.groupItems)) {
      $dara.Model.validateArray(this.groupItems);
    }
    if(Array.isArray(this.userItems)) {
      $dara.Model.validateArray(this.userItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

