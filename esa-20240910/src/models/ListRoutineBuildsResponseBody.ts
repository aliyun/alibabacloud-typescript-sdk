// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRoutineBuildsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The static assets directory.
   * 
   * @example
   * /root/usr
   */
  assetsDirectory?: string;
  /**
   * @remarks
   * The branch used for the build.
   * 
   * @example
   * dev
   */
  branch?: string;
  /**
   * @remarks
   * The build command.
   * 
   * @example
   * npm run build
   */
  buildCommand?: string;
  /**
   * @remarks
   * The ID of the commit.
   * 
   * @example
   * c08057f590f8d5be56fcae1e082128254a708f94
   */
  commitId?: string;
  /**
   * @remarks
   * The commit message.
   * 
   * @example
   * Add static files.
   */
  commitMessage?: string;
  /**
   * @remarks
   * The creation time, in ISO 8601 format using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-03-26T02:19:34Z
   */
  createTime?: string;
  /**
   * @remarks
   * The environment variables.
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The Git account ID.
   * 
   * @example
   * 162124764031208
   */
  gitAccountId?: number;
  /**
   * @remarks
   * The Git account name.
   * 
   * @example
   * rwa
   */
  gitAccountName?: string;
  /**
   * @remarks
   * The install command.
   * 
   * @example
   * npm install
   */
  installCommand?: string;
  /**
   * @remarks
   * Indicates whether the repository is private. Valid values:
   * 
   * - true: The repository is private.
   * - false: The repository is not private.
   * 
   * @example
   * false
   */
  isPrivate?: boolean;
  /**
   * @remarks
   * The Node.js version. Valid values: `22.x`, `20.x`, `18.x`, `16.x`, `14.x`, and `12.x`.
   * 
   * @example
   * 22.x
   */
  nodeVersion?: string;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * 3850166
   */
  pipelineId?: number;
  /**
   * @remarks
   * The pipeline execution ID.
   * 
   * @example
   * 70
   */
  pipelineRunId?: number;
  /**
   * @remarks
   * The production branch name.
   * 
   * @example
   * main
   */
  productionBranch?: string;
  /**
   * @remarks
   * The repository name.
   * 
   * @example
   * rwa-test
   */
  repository?: string;
  /**
   * @remarks
   * The root directory.
   * 
   * @example
   * /root/admin
   */
  rootDirectory?: string;
  /**
   * @remarks
   * The ER build task ID.
   * 
   * @example
   * 4133325046294912
   */
  routineBuildId?: number;
  /**
   * @remarks
   * The ER entry file path.
   * 
   * @example
   * /home
   */
  routineEntry?: string;
  /**
   * @remarks
   * The ER name.
   * 
   * @example
   * test-routine
   */
  routineName?: string;
  /**
   * @remarks
   * The status of the build task. Valid values:
   * 
   * - int: initialization
   * - pending: preparing
   * - building: building
   * - succeed: build succeeded
   * - failed: build failed
   * - canceled: canceled
   * 
   * @example
   * succeed
   */
  status?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * test
   */
  templateName?: string;
  /**
   * @remarks
   * The modification time, in ISO 8601 format using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-06-20T00:44:23Z
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1427812834792318
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      assetsDirectory: 'AssetsDirectory',
      branch: 'Branch',
      buildCommand: 'BuildCommand',
      commitId: 'CommitId',
      commitMessage: 'CommitMessage',
      createTime: 'CreateTime',
      environmentVariables: 'EnvironmentVariables',
      gitAccountId: 'GitAccountId',
      gitAccountName: 'GitAccountName',
      installCommand: 'InstallCommand',
      isPrivate: 'IsPrivate',
      nodeVersion: 'NodeVersion',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      productionBranch: 'ProductionBranch',
      repository: 'Repository',
      rootDirectory: 'RootDirectory',
      routineBuildId: 'RoutineBuildId',
      routineEntry: 'RoutineEntry',
      routineName: 'RoutineName',
      status: 'Status',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsDirectory: 'string',
      branch: 'string',
      buildCommand: 'string',
      commitId: 'string',
      commitMessage: 'string',
      createTime: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gitAccountId: 'number',
      gitAccountName: 'string',
      installCommand: 'string',
      isPrivate: 'boolean',
      nodeVersion: 'string',
      pipelineId: 'number',
      pipelineRunId: 'number',
      productionBranch: 'string',
      repository: 'string',
      rootDirectory: 'string',
      routineBuildId: 'number',
      routineEntry: 'string',
      routineName: 'string',
      status: 'string',
      templateName: 'string',
      updateTime: 'string',
      userId: 'number',
    };
  }

  validate() {
    if(this.environmentVariables) {
      $dara.Model.validateMap(this.environmentVariables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRoutineBuildsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of ER build tasks.
   */
  data?: ListRoutineBuildsResponseBodyData[];
  /**
   * @remarks
   * The page number, same as the PageIndex request parameter.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ET5BF670-09D5-4D0B-BEBY-D96A2A528000
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
   * 
   * @example
   * 10
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListRoutineBuildsResponseBodyData },
      pageIndex: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

