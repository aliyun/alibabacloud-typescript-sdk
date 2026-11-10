// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster to which the workspace belongs. This parameter is optional.
   * - If you do not specify this parameter, the cluster selection logic that prioritizes account-exclusive storage is used.
   * - `default`: The shared cluster is used.
   * - Cluster IDs starting with `acc-`: The associated dedicated cluster is used.
   * 
   * @example
   * default
   */
  clusterId?: string;
  /**
   * @remarks
   * Specifies whether to generate an initial API key. This parameter is optional. Default value: `true`.
   * - `true`: Generates the first API key and returns the key name and plaintext key.
   * - `false`: Does not generate an initial API key. The ApiKeyName and ApiKey fields in the response are empty.
   * 
   * @example
   * true
   */
  generateInitialKey?: boolean;
  /**
   * @remarks
   * The name of the first member when the workspace is created. This parameter is optional.
   * 
   * @example
   * my-member
   */
  memberName?: string;
  /**
   * @remarks
   * The permission mode selected when the workspace is created. Valid values:
   * - `compatibility`: The compatibility mode. This mode is used if you do not specify this parameter.
   * - `advanced`: The advanced permission mode. Only the Alibaba Cloud account can select this mode. It takes effect immediately after the workspace is created and cannot be disabled.
   * 
   * This parameter is a string, not a Boolean switch. Valid values are case-insensitive and ignore leading and trailing whitespace. If you explicitly pass an empty string, pure whitespace, or other values, `InvalidParameter` (HTTP 400) is returned. If a RAM user selects `advanced`, `NoPermission` (HTTP 403) is returned.
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
      clusterId: 'ClusterId',
      generateInitialKey: 'GenerateInitialKey',
      memberName: 'MemberName',
      permissionMode: 'PermissionMode',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      generateInitialKey: 'boolean',
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

