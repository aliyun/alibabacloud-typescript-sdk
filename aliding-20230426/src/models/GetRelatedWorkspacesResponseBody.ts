// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRelatedWorkspacesResponseBodyWorkspacesRecentList extends $dara.Model {
  /**
   * @example
   * 1638256965936
   */
  lastEditTime?: number;
  /**
   * @example
   * 知识库
   */
  name?: string;
  /**
   * @example
   * nb9XxxxxxxmyAp
   */
  nodeId?: string;
  /**
   * @example
   * https://alidocs.xxxx/nb9XJKdxxxxmyAp
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      lastEditTime: 'LastEditTime',
      name: 'Name',
      nodeId: 'NodeId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastEditTime: 'number',
      name: 'string',
      nodeId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetRelatedWorkspacesResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  workspaces?: GetRelatedWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
      workspaces: { 'type': 'array', 'itemType': GetRelatedWorkspacesResponseBodyWorkspaces },
    };
  }

  validate() {
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

