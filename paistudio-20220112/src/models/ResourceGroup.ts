// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class ResourceGroup extends $dara.Model {
  creatorID?: string;
  gmtCreatedTime?: string;
  gmtModifiedTime?: string;
  /**
   * @example
   * RG1
   */
  name?: string;
  nodeCount?: number;
  /**
   * @example
   * rg17tmvwiokhzaxg
   */
  resourceGroupID?: string;
  userVpc?: UserVpc;
  version?: string;
  /**
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

