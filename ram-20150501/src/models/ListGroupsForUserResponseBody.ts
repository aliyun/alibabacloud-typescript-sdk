// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGroupsForUserResponseBodyGroups } from "./ListGroupsForUserResponseBodyGroups";


export class ListGroupsForUserResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the RAM user groups.
   */
  groups?: ListGroupsForUserResponseBodyGroups;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DA772B52-BF9F-54CA-AC77-AA7A2DA89D46
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groups: 'Groups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groups: ListGroupsForUserResponseBodyGroups,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groups && typeof (this.groups as any).validate === 'function') {
      (this.groups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

