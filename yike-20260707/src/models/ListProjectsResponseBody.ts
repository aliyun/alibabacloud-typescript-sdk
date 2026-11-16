// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectsResponseBodyProjectList extends $dara.Model {
  /**
   * @remarks
   * The permissions of the current caller in the project, such as Manage for management permissions.
   * 
   * @example
   * Manage
   */
  auth?: string;
  /**
   * @remarks
   * The URL of the cover image.
   * 
   * @example
   * https://example.com/cover.png
   */
  coverUrl?: string;
  /**
   * @remarks
   * The creation time in UTC format following the ISO 8601 standard, ending with Z.
   * 
   * @example
   * 2026-01-07T02:21:36Z
   */
  createTime?: string;
  /**
   * @remarks
   * The username of the user who created the project.
   * 
   * @example
   * aliyun_183320****
   */
  createUserName?: string;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * Product demo project
   */
  description?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * pd_061716****
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * Product Demo
   */
  title?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws_zna577pdximv***
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      auth: 'Auth',
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      createUserName: 'CreateUserName',
      description: 'Description',
      projectId: 'ProjectId',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auth: 'string',
      coverUrl: 'string',
      createTime: 'string',
      createUserName: 'string',
      description: 'string',
      projectId: 'string',
      title: 'string',
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

export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A response field retained for compatibility. It is not used for current pagination and can be ignored.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A response field retained for compatibility. It is not used for current pagination and can be ignored.
   * 
   * @example
   * Token
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of projects on the current page.
   */
  projectList?: ListProjectsResponseBodyProjectList[];
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      projectList: 'ProjectList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      projectList: { 'type': 'array', 'itemType': ListProjectsResponseBodyProjectList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.projectList)) {
      $dara.Model.validateArray(this.projectList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

