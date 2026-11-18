// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyProject extends $dara.Model {
  /**
   * @remarks
   * The permissions of the current caller on the project. For example, Manage indicates management permissions.
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
   * The time when the project was created, in UTC and ISO 8601 format, ending with Z.
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
   * The description of the project.
   * 
   * @example
   * Product demo project
   */
  description?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * pd_061716****
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the project.
   * 
   * @example
   * Product Demo
   */
  title?: string;
  /**
   * @remarks
   * The ID of the workspace.
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

export class GetProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project details.
   */
  project?: GetProjectResponseBodyProject;
  /**
   * @remarks
   * The request ID used to locate and troubleshoot the request.
   * 
   * @example
   * ****63E8B7C7-4812-46AD-0FA56029AC86****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: GetProjectResponseBodyProject,
      requestId: 'string',
    };
  }

  validate() {
    if(this.project && typeof (this.project as any).validate === 'function') {
      (this.project as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

