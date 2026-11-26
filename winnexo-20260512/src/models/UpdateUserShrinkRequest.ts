// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If specified, the operation is executed as the user identified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
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
   * - **true**: Activated.
   * - **false**: Not activated.
   * 
   * @example
   * true
   */
  isActive?: boolean;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The new list of system role codes. This list fully replaces the existing roles and must contain at least one role. Valid values: SUPER_ADMIN, SYSTEM_ADMIN, SEMANTIC_ADMIN, SKILL_ADMIN, KB_ADMIN, AGENT_ADMIN, and APPLICATION_USER.
   * 
   * @example
   * ["APPLICATION_USER"]
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
   * The new list of user group IDs. This list fully replaces the existing user groups. If this parameter is not specified, the user groups are not modified.
   * 
   * @example
   * ["string_value"]
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * The ID of the target user, which is the WINNEXO platform user ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  wnUserId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      displayName: 'displayName',
      isActive: 'isActive',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      roleCodesShrink: 'roleCodes',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      wnUserId: 'wnUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      displayName: 'string',
      isActive: 'boolean',
      opsUserCode: 'string',
      opsUserId: 'string',
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

