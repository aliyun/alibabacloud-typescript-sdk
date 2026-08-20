// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeAgentUsersRequest extends $dara.Model {
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
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The list of user group IDs to be revoked (16-character hex strings).
   * 
   * @example
   * string_value
   */
  userGroupIds?: string[];
  /**
   * @remarks
   * The list of user IDs to be revoked.
   * 
   * @example
   * 1
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
      userGroupIds: 'userGroupIds',
      userIds: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingObjectName: 'string',
      tenantId: 'string',
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

