// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class ResourceGroup extends $dara.Model {
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 161228528250****
   */
  creatorID?: string;
  /**
   * @remarks
   * The time when the PAI resource group was created.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the PAI resource group was updated.
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The name of the PAI resource group.
   * 
   * @example
   * RG1
   */
  name?: string;
  /**
   * @remarks
   * The number of nodes.
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * The ID of the PAI resource group.
   * 
   * @example
   * rg17tmvwiokh****
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * The type of compute resources in the resource group.
   * 
   * @example
   * Ecs
   */
  resourceType?: string;
  /**
   * @remarks
   * The status of the resource group.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The VPC configuration.
   */
  userVpc?: UserVpc;
  /**
   * @remarks
   * The version of the resource group.
   * 
   * @example
   * 1.0
   */
  version?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * @example
   * 23000
   */
  workspaceID?: string;
  static names(): { [key: string]: string } {
    return {
      creatorID: 'CreatorID',
      gmtCreatedTime: 'GmtCreatedTime',
      gmtModifiedTime: 'GmtModifiedTime',
      name: 'Name',
      nodeCount: 'NodeCount',
      resourceGroupID: 'ResourceGroupID',
      resourceType: 'ResourceType',
      status: 'Status',
      userVpc: 'UserVpc',
      version: 'Version',
      workspaceID: 'WorkspaceID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorID: 'string',
      gmtCreatedTime: 'string',
      gmtModifiedTime: 'string',
      name: 'string',
      nodeCount: 'number',
      resourceGroupID: 'string',
      resourceType: 'string',
      status: 'string',
      userVpc: UserVpc,
      version: 'string',
      workspaceID: 'string',
    };
  }

  validate() {
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

