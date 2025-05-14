// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRelatedWorkspacesResponseBodyWorkspacesRecentList } from "./GetRelatedWorkspacesResponseBodyWorkspacesRecentList";


export class GetRelatedWorkspacesResponseBodyWorkspaces extends $dara.Model {
  /**
   * @example
   * 1638256965936
   */
  createTime?: number;
  /**
   * @example
   * false
   */
  deleted?: boolean;
  /**
   * @example
   * 知识库
   */
  name?: string;
  /**
   * @example
   * Q2xwPOKiSLxxxx
   */
  owner?: string;
  recentList?: GetRelatedWorkspacesResponseBodyWorkspacesRecentList[];
  /**
   * @example
   * OWNER
   */
  role?: string;
  /**
   * @example
   * https://alidocs.xxxx/nb9XJKdxxxxmyAp/docs/nb9XxxxxxxmyAp
   */
  url?: string;
  /**
   * @example
   * nb9XJKdxxxxmyAp
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      deleted: 'Deleted',
      name: 'Name',
      owner: 'Owner',
      recentList: 'RecentList',
      role: 'Role',
      url: 'Url',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      deleted: 'boolean',
      name: 'string',
      owner: 'string',
      recentList: { 'type': 'array', 'itemType': GetRelatedWorkspacesResponseBodyWorkspacesRecentList },
      role: 'string',
      url: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.recentList)) {
      $dara.Model.validateArray(this.recentList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

