// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspaces extends $dara.Model {
  /**
   * @remarks
   * The names of the administrator accounts.
   */
  adminNames?: string[];
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 122424353535
   */
  creator?: string;
  /**
   * @remarks
   * The description of the workspace.
   * 
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @remarks
   * The environment types of the workspace.
   */
  envTypes?: string[];
  /**
   * @remarks
   * the additional information. Only contains TenantId.
   * 
   * @example
   * {"TenantId": "4286******98"}
   */
  extraInfos?: { [key: string]: any };
  /**
   * @remarks
   * The time when the workspace was created. The time (UTC+0) follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ss.SSSZ format.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace was modified. The time (UTC+0) follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ss.SSSZ format.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the workspace is the default workspace.
   * 
   * @example
   * false
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The status of the workspace.
   * 
   * @example
   * ENABLED
   */
  status?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 123
   */
  workspaceId?: string;
  /**
   * @remarks
   * The name of the workspace.
   * 
   * @example
   * workspace-example
   */
  workspaceName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfmwp7rky****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      adminNames: 'AdminNames',
      creator: 'Creator',
      description: 'Description',
      envTypes: 'EnvTypes',
      extraInfos: 'ExtraInfos',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isDefault: 'IsDefault',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
      resourceGroupId: 'resourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adminNames: { 'type': 'array', 'itemType': 'string' },
      creator: 'string',
      description: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      extraInfos: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isDefault: 'boolean',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.adminNames)) {
      $dara.Model.validateArray(this.adminNames);
    }
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(this.extraInfos) {
      $dara.Model.validateMap(this.extraInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

