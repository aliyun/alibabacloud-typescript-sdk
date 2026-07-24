// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineBuildResponseBody extends $dara.Model {
  /**
   * @remarks
   * The static resource directory.
   * 
   * @example
   * /root/user
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
   * The commit ID.
   * 
   * @example
   * 9bf55641a1a608b9e7297d3fe51e39baa4b68ba0
   */
  commitId?: string;
  /**
   * @remarks
   * The commit message.
   * 
   * @example
   * Add configuration file.
   */
  commitMessage?: string;
  /**
   * @remarks
   * The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-02-28T09:03:42Z
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
   * 4580717755793600
   */
  gitAccountId?: number;
  /**
   * @remarks
   * The ID of the ER build task.
   * 
   * @example
   * 164557372123356
   */
  id?: number;
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
   * The Node.js version. Valid values: `22.x`, `20.x`, `18.x`, `16.x`, `14.x`, `12.x`.
   * 
   * @example
   * 22.x
   */
  nodeVersion?: string;
  /**
   * @remarks
   * The pipeline ID in Yunxiao.
   * 
   * @example
   * 4371588
   */
  pipelineId?: number;
  /**
   * @remarks
   * The build task ID in Yunxiao.
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
   * example-test
   */
  repository?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8C3CC8AF-7C4C-5841-BDAE-B295FD9AE913
   */
  requestId?: string;
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
   * - int: init
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
   * The modification time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2026-07-20T09:59:28+08:00
   */
  updateTime?: string;
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
      id: 'Id',
      installCommand: 'InstallCommand',
      isPrivate: 'IsPrivate',
      nodeVersion: 'NodeVersion',
      pipelineId: 'PipelineId',
      pipelineRunId: 'PipelineRunId',
      productionBranch: 'ProductionBranch',
      repository: 'Repository',
      requestId: 'RequestId',
      rootDirectory: 'RootDirectory',
      routineEntry: 'RoutineEntry',
      routineName: 'RoutineName',
      status: 'Status',
      templateName: 'TemplateName',
      updateTime: 'UpdateTime',
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
      id: 'number',
      installCommand: 'string',
      isPrivate: 'boolean',
      nodeVersion: 'string',
      pipelineId: 'number',
      pipelineRunId: 'number',
      productionBranch: 'string',
      repository: 'string',
      requestId: 'string',
      rootDirectory: 'string',
      routineEntry: 'string',
      routineName: 'string',
      status: 'string',
      templateName: 'string',
      updateTime: 'string',
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

