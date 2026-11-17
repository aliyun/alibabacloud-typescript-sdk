// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineBuildResponseBody extends $dara.Model {
  /**
   * @remarks
   * The static assets directory.
   * 
   * @example
   * /root/user
   */
  assetsDirectory?: string;
  /**
   * @remarks
   * The build branch.
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
   * 9bf55641a1a608b9e7297d3fe51e39baa4b68ba0
   */
  commitId?: string;
  /**
   * @remarks
   * The commit message.
   * 
   * @example
   * Add a configuration file
   */
  commitMessage?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-02-28T09:03:42Z
   */
  createTime?: string;
  /**
   * @remarks
   * The environment variables.
   * 
   * @example
   * {"NODE_ENV":"development"}
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The name of the file uploaded for the build task.
   * 
   * @example
   * index.html
   */
  fileName?: string;
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
   * Specifies whether the repository is private. Valid values:
   * - true: Yes.
   * - false: No.
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
   * The ID of the Yunxiao pipeline.
   * 
   * @example
   * 4371588
   */
  pipelineId?: number;
  /**
   * @remarks
   * The ID of the Yunxiao build task.
   * 
   * @example
   * 70
   */
  pipelineRunId?: number;
  /**
   * @remarks
   * The name of the production branch.
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
   * The path to the ER entry file.
   * 
   * @example
   * /home
   */
  routineEntry?: string;
  /**
   * @remarks
   * The name of the ER.
   * 
   * @example
   * test-routine
   */
  routineName?: string;
  /**
   * @remarks
   * The status of the build task. Valid values:
   * - int: Initialized.
   * - pending: Preparing.
   * - building: Building.
   * - succeed: Succeeded.
   * - failed: Failed.
   * - canceled: Canceled.
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
   * The update time. The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
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
      fileName: 'FileName',
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
      fileName: 'string',
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

