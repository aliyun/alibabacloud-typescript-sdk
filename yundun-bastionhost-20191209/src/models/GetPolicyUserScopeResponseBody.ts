// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetPolicyUserScopeResponseBodyUserScope extends $dara.Model {
  /**
   * @remarks
   * The scope of users to whom the control policy applies.
   * *   If **All** is returned for this parameter, the control policy applies to all users.
   * 
   * *   If no value is returned for this parameter, the control policy applies to the assets specified in the return values of UserGroupIds and UserIds.
   * 
   * @example
   * All
   */
  scopeType?: string;
  /**
   * @remarks
   * The user groups to which the control policy applies.
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The users to whom the control policy applies.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      scopeType: 'ScopeType',
      userGroupIds: 'UserGroupIds',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scopeType: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupIds)) {
      $dara.Model.validateArray(this.userGroupIds);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

