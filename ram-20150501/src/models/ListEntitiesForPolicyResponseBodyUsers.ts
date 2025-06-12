// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEntitiesForPolicyResponseBodyUsersUser } from "./ListEntitiesForPolicyResponseBodyUsersUser";


export class ListEntitiesForPolicyResponseBodyUsers extends $dara.Model {
  user?: ListEntitiesForPolicyResponseBodyUsersUser[];
  static names(): { [key: string]: string } {
    return {
      user: 'User',
    };
  }

  static types(): { [key: string]: any } {
    return {
      user: { 'type': 'array', 'itemType': ListEntitiesForPolicyResponseBodyUsersUser },
    };
  }

  validate() {
    if(Array.isArray(this.user)) {
      $dara.Model.validateArray(this.user);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

