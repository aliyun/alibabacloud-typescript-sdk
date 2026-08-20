// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantAgentUsersShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization expiration timestamp in milliseconds. If this parameter is not specified, the authorization never expires.
   * 
   * @example
   * 1
   */
  expireDate?: number;
  /**
   * @remarks
   * The name of the digital human.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The permission items.
   * 
   * @example
   * string_value
   */
  permissionsShrink?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 676577544219585
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of user group IDs.
   * 
   * @example
   * string_value
   */
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * The list of user IDs to be authorized.
   * 
   * @example
   * 1
   */
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      expireDate: 'expireDate',
      operatingObjectName: 'operatingObjectName',
      permissionsShrink: 'permissions',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      userIdsShrink: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'number',
      operatingObjectName: 'string',
      permissionsShrink: 'string',
      tenantId: 'string',
      userGroupIdsShrink: 'string',
      userIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

