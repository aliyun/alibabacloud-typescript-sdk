// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * string_value
   */
  displayName?: string;
  /**
   * @remarks
   * Specifies whether the account is activated. Valid values:
   *  - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The new list of system role codes (full replacement, must contain at least one role). Valid values: SUPER_ADMIN / SYSTEM_ADMIN / SEMANTIC_ADMIN / SKILL_ADMIN / KB_ADMIN / AGENT_ADMIN / APPLICATION_USER.
   * 
   * @example
   * string_value
   */
  roleCodesShrink?: string;
  /**
   * @remarks
   * The ID of the effective tenant.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The new list of user group IDs (full replacement. If not specified, the value is not modified).
   * 
   * @example
   * string_value
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * The ID of the target user (WINNEXO platform user ID).
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'displayName',
      isActive: 'isActive',
      roleCodesShrink: 'roleCodes',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      isActive: 'boolean',
      roleCodesShrink: 'string',
      tenantId: 'string',
      userGroupIdsShrink: 'string',
      wnUserId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

