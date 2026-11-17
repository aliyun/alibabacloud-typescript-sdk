// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableConversationShareShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the function session.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSessionId
   */
  sessionId?: string;
  /**
   * @remarks
   * The sharing scope. Valid values:
   * - PUBLIC: accessible to all users
   * - SPECIFIED: accessible to specified users or user groups
   * 
   * @example
   * PUBLIC
   */
  shareAccessType?: string;
  /**
   * @remarks
   * The list of user group IDs for the specified scope. When shareAccessType is set to SPECIFIED, at least one of this list or the user list must not be empty.
   * 
   * @example
   * ["group-1"]
   */
  shareUserGroupIdsShrink?: string;
  /**
   * @remarks
   * The list of platform user IDs for the specified scope. When shareAccessType is set to SPECIFIED, at least one of this list or the user group list must not be empty.
   * 
   * @example
   * [10001]
   */
  shareUserIdsShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      sessionId: 'sessionId',
      shareAccessType: 'shareAccessType',
      shareUserGroupIdsShrink: 'shareUserGroupIds',
      shareUserIdsShrink: 'shareUserIds',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sessionId: 'string',
      shareAccessType: 'string',
      shareUserGroupIdsShrink: 'string',
      shareUserIdsShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

