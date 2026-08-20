// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeAgentUsersShrinkRequest extends $dara.Model {
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
  userGroupIdsShrink?: string;
  /**
   * @remarks
   * The list of user IDs to be revoked.
   * 
   * @example
   * 1
   */
  userIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      operatingObjectName: 'operatingObjectName',
      tenantId: 'tenantId',
      userGroupIdsShrink: 'userGroupIds',
      userIdsShrink: 'userIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operatingObjectName: 'string',
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

