// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkspacesResponseBodyWorkspaces extends $dara.Model {
  /**
   * @remarks
   * API Host。
   * 
   * @example
   * llm-34o9ts1dai60z5sf.cn-beijing.maas.aliyuncs.com
   */
  apiHost?: string;
  /**
   * @example
   * 1742785623772
   */
  gmtCreate?: number;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * global
   */
  serviceSite?: string;
  /**
   * @example
   * ws-0759e7b7ea7f585b
   */
  workspaceId?: string;
  /**
   * @example
   * default
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      apiHost: 'apiHost',
      gmtCreate: 'gmtCreate',
      region: 'region',
      serviceSite: 'serviceSite',
      workspaceId: 'workspaceId',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiHost: 'string',
      gmtCreate: 'number',
      region: 'string',
      serviceSite: 'string',
      workspaceId: 'string',
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

export class ListWorkspacesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * success
   */
  message?: string;
  /**
   * @example
   * TbB1IsZUSR4iE
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 75DD3695-77E0-5784-B8A6-C213A01781FE
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 149
   */
  totalCount?: number;
  workspaces?: ListWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      httpStatusCode: 'httpStatusCode',
      maxResults: 'maxResults',
      message: 'message',
      nextToken: 'nextToken',
      requestId: 'requestId',
      success: 'success',
      totalCount: 'totalCount',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      workspaces: { 'type': 'array', 'itemType': ListWorkspacesResponseBodyWorkspaces },
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

