// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class ResourceGroup extends $dara.Model {
  /**
   * @remarks
   * CreatorID
   * 
   * @example
   * 1612285282502324
   */
  creatorID?: string;
  /**
   * @remarks
   * pai resource created time
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * GmtModified
   * 
   * @example
   * 2023-06-22T00:00:00Z
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * pai resource group name
   * 
   * @example
   * RG1
   */
  name?: string;
  /**
   * @remarks
   * NodeCount
   * 
   * @example
   * 3
   */
  nodeCount?: number;
  /**
   * @remarks
   * pai resource group id
   * 
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupID?: string;
  /**
   * @remarks
   * UserVpc
   */
  userVpc?: UserVpc;
  version?: string;
  /**
   * @remarks
   * pworkspace id
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

