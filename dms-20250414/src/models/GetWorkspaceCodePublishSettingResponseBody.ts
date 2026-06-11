// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkspaceCodePublishSettingResponseBodyDataRepos extends $dara.Model {
  /**
   * @remarks
   * The name of the branch.
   * 
   * @example
   * main
   */
  branch?: string;
  /**
   * @remarks
   * The path to the notebook file.
   * 
   * @example
   * /luna-public/
   */
  path?: string;
  /**
   * @remarks
   * The name of the repository.
   * 
   * @example
   * analyticscomputing/dide
   */
  repo?: string;
  static names(): { [key: string]: string } {
    return {
      branch: 'Branch',
      path: 'Path',
      repo: 'Repo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branch: 'string',
      path: 'string',
      repo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceCodePublishSettingResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The files and directories to exclude from the deployment.
   */
  exclude?: string[];
  /**
   * @remarks
   * Indicates whether the deployment branch is locked. If `true`, configurations submitted via the `workspaceCodePublish` API are ignored. If `false`, configurations submitted via the `workspaceCodePublish` API update the settings.
   * 
   * @example
   * false
   */
  lockRepoBranch?: boolean;
  /**
   * @remarks
   * The Git repositories in the workspace.
   */
  repos?: GetWorkspaceCodePublishSettingResponseBodyDataRepos[];
  static names(): { [key: string]: string } {
    return {
      exclude: 'Exclude',
      lockRepoBranch: 'LockRepoBranch',
      repos: 'Repos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exclude: { 'type': 'array', 'itemType': 'string' },
      lockRepoBranch: 'boolean',
      repos: { 'type': 'array', 'itemType': GetWorkspaceCodePublishSettingResponseBodyDataRepos },
    };
  }

  validate() {
    if(Array.isArray(this.exclude)) {
      $dara.Model.validateArray(this.exclude);
    }
    if(Array.isArray(this.repos)) {
      $dara.Model.validateArray(this.repos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetWorkspaceCodePublishSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code that indicates the result of the request. A value of `200` indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: GetWorkspaceCodePublishSettingResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * This record is being collected, please wait for a moment.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetWorkspaceCodePublishSettingResponseBodyData,
      errorCode: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

