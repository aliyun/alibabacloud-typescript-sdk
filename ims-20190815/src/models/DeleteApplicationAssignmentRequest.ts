// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteApplicationAssignmentRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 472457090344041****
   */
  appId?: string;
  /**
   * @remarks
   * The user principal name or role name.
   * 
   * + User principal name: The format is `<username>@<account-id>.onaliyun.com`. You can query it by calling the `GetUser` or `ListUsers` API operation.
   * + Role name: You can query it by calling the `ListRoles` API operation of RAM.
   * 
   * This parameter is required.
   * 
   * @example
   * user@example.onaliyun.com
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the target principal for the application assignment. Valid values:
   * - user: The principal is a RAM user. In this case, PrincipalName must be a user principal name.
   * - role: The principal is a RAM role. In this case, PrincipalName must be a role name.
   * 
   * This parameter is required.
   * 
   * @example
   * user
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

