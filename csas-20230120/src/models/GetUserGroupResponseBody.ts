// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUserGroupResponseBodyUserGroup } from "./GetUserGroupResponseBodyUserGroup";


export class GetUserGroupResponseBody extends $dara.Model {
  /**
   * @example
   * 1310DBC7-7E1F-55D3-B4B4-E4BE912517FB
   */
  requestId?: string;
  userGroup?: GetUserGroupResponseBodyUserGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userGroup: 'UserGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userGroup: GetUserGroupResponseBodyUserGroup,
    };
  }

  validate() {
    if(this.userGroup && typeof (this.userGroup as any).validate === 'function') {
      (this.userGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

