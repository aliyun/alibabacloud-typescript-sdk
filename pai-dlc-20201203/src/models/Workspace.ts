// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Member } from "./Member";
import { Quota } from "./Quota";
import { Resources } from "./Resources";


export class Workspace extends $dara.Model {
  /**
   * @example
   * ken
   */
  creator?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-12T14:36:01Z
   */
  gmtModifyTime?: string;
  members?: Member[];
  quotas?: Quota[];
  totalResources?: Resources;
  workspaceAdmins?: Member[];
  /**
   * @example
   * ws-20210126170216-mtl37ge7gkvdz
   */
  workspaceId?: string;
  /**
   * @example
   * dlc-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifyTime: 'GmtModifyTime',
      members: 'Members',
      quotas: 'Quotas',
      totalResources: 'TotalResources',
      workspaceAdmins: 'WorkspaceAdmins',
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      gmtCreateTime: 'string',
      gmtModifyTime: 'string',
      members: { 'type': 'array', 'itemType': Member },
      quotas: { 'type': 'array', 'itemType': Quota },
      totalResources: Resources,
      workspaceAdmins: { 'type': 'array', 'itemType': Member },
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.members)) {
      $dara.Model.validateArray(this.members);
    }
    if(Array.isArray(this.quotas)) {
      $dara.Model.validateArray(this.quotas);
    }
    if(this.totalResources && typeof (this.totalResources as any).validate === 'function') {
      (this.totalResources as any).validate();
    }
    if(Array.isArray(this.workspaceAdmins)) {
      $dara.Model.validateArray(this.workspaceAdmins);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

