// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListYikeWorkspacesResponseBodyWorkspaceList extends $dara.Model {
  /**
   * @example
   * ABCD12
   */
  code?: string;
  /**
   * @example
   * 2026-04-29T10:22:44Z
   */
  createTime?: string;
  /**
   * @example
   * pd_1234***
   */
  defaultProductionId?: string;
  /**
   * @example
   * Online
   */
  status?: string;
  /**
   * @example
   * workspace title
   */
  title?: string;
  /**
   * @example
   * 1
   */
  userCount?: string;
  /**
   * @example
   * ws_1243****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      createTime: 'CreateTime',
      defaultProductionId: 'DefaultProductionId',
      status: 'Status',
      title: 'Title',
      userCount: 'UserCount',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      createTime: 'string',
      defaultProductionId: 'string',
      status: 'string',
      title: 'string',
      userCount: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListYikeWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 4E84BE44-58A7-****-****-FBEBEA16EF94
   */
  requestId?: string;
  /**
   * @example
   * 54
   */
  totalCount?: number;
  workspaceList?: ListYikeWorkspacesResponseBodyWorkspaceList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workspaceList: 'WorkspaceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      workspaceList: { 'type': 'array', 'itemType': ListYikeWorkspacesResponseBodyWorkspaceList },
    };
  }

  validate() {
    if(Array.isArray(this.workspaceList)) {
      $dara.Model.validateArray(this.workspaceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

