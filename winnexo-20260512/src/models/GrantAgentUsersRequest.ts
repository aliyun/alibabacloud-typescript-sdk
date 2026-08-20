// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantAgentUsersRequest extends $dara.Model {
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
  permissions?: string[];
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
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of user IDs to be authorized.
   * 
   * @example
   * 1
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      expireDate: 'expireDate',
      operatingObjectName: 'operatingObjectName',
      permissions: 'permissions',
      tenantId: 'tenantId',
      userGroupIds: 'userGroupIds',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expireDate: 'number',
      operatingObjectName: 'string',
      permissions: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
      userGroupIds: { 'type': 'array', 'itemType': 'string' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissions)) {
      $dara.Model.validateArray(this.permissions);
    }
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

