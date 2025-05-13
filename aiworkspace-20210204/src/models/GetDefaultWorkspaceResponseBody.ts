// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDefaultWorkspaceResponseBodyConditions } from "./GetDefaultWorkspaceResponseBodyConditions";
import { GetDefaultWorkspaceResponseBodyOwner } from "./GetDefaultWorkspaceResponseBodyOwner";


export class GetDefaultWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The conditions of the default workspace in the creation process.
   */
  conditions?: GetDefaultWorkspaceResponseBodyConditions[];
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 17915******4216
   */
  creator?: string;
  /**
   * @remarks
   * The workspace description.
   * 
   * @example
   * workspace description example
   */
  description?: string;
  /**
   * @remarks
   * The display name of the workspace.
   * 
   * @example
   * workspace-example
   */
  displayName?: string;
  /**
   * @remarks
   * The environments of the workspace. Valid values:
   * 
   * *   Workspaces in basic mode can run only in the production environment.
   * *   Workspaces in standard mode can run in both the development and production environments.
   */
  envTypes?: string[];
  /**
   * @remarks
   * The time when the workspace was created, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the workspace was modified, in UTC. The time follows the ISO 8601 standard.
   * 
   * @example
   * 2021-01-21T17:12:35.232Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   */
  owner?: GetDefaultWorkspaceResponseBodyOwner;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A14FA81-DD4E-******-6343FE44B941
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace status. Valid values:
   * 
   * *   ENABLED
   * *   INITIALIZING
   * *   FAILURE
   * *   DISABLED
   * *   FROZEN
   * *   UPDATING
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
   * 1234
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name, which is unique in a region.
   * 
   * @example
   * workspace-example
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      conditions: 'Conditions',
      creator: 'Creator',
      description: 'Description',
      displayName: 'DisplayName',
      envTypes: 'EnvTypes',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      owner: 'Owner',
      requestId: 'RequestId',
      status: 'Status',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conditions: { 'type': 'array', 'itemType': GetDefaultWorkspaceResponseBodyConditions },
      creator: 'string',
      description: 'string',
      displayName: 'string',
      envTypes: { 'type': 'array', 'itemType': 'string' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      owner: GetDefaultWorkspaceResponseBodyOwner,
      requestId: 'string',
      status: 'string',
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.conditions)) {
      $dara.Model.validateArray(this.conditions);
    }
    if(Array.isArray(this.envTypes)) {
      $dara.Model.validateArray(this.envTypes);
    }
    if(this.owner && typeof (this.owner as any).validate === 'function') {
      (this.owner as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

