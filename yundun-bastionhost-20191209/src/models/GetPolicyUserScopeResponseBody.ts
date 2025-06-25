// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPolicyUserScopeResponseBodyUserScope } from "./GetPolicyUserScopeResponseBodyUserScope";


export class GetPolicyUserScopeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EC9BF0F4-8983-491A-BC8C-1B4DD94976DE
   */
  requestId?: string;
  /**
   * @remarks
   * The users to whom the control policy applies.
   */
  userScope?: GetPolicyUserScopeResponseBodyUserScope;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      userScope: 'UserScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      userScope: GetPolicyUserScopeResponseBodyUserScope,
    };
  }

  validate() {
    if(this.userScope && typeof (this.userScope as any).validate === 'function') {
      (this.userScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

