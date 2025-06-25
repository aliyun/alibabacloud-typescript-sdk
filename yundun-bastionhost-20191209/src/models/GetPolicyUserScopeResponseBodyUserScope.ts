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

