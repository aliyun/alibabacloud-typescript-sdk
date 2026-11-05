// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the first member.
   * 
   * This parameter is required.
   * 
   * @example
   * my-member
   */
  memberName?: string;
  /**
   * @remarks
   * The permission mode selected when creating the workspace. Valid values:
   * - `compatibility`: Compatibility mode. This mode is used if this parameter is not specified.
   * - `advanced`: Advanced permission mode. Only the Alibaba Cloud account can select this mode. It takes effect immediately after the workspace is created and cannot be disabled after creation.
   * 
   * This parameter is a string, not a Boolean switch. Valid values are case-insensitive and ignore leading and trailing whitespace. If an empty string, a string with only whitespace, or an invalid value is explicitly specified, `InvalidParameter` (HTTP 400) is returned. If a RAM user selects `advanced`, `NoPermission` (HTTP 403) is returned.
   * 
   * @example
   * advanced
   */
  permissionMode?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * my-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      permissionMode: 'PermissionMode',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
      permissionMode: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

