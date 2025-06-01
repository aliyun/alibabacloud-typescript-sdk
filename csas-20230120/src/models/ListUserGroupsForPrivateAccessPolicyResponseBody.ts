// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserGroupsForPrivateAccessPolicyResponseBodyPolices } from "./ListUserGroupsForPrivateAccessPolicyResponseBodyPolices";


export class ListUserGroupsForPrivateAccessPolicyResponseBody extends $dara.Model {
  polices?: ListUserGroupsForPrivateAccessPolicyResponseBodyPolices[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      polices: 'Polices',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      polices: { 'type': 'array', 'itemType': ListUserGroupsForPrivateAccessPolicyResponseBodyPolices },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.polices)) {
      $dara.Model.validateArray(this.polices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

