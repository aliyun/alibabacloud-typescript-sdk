// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineBuildConfigurationResponseBody extends $dara.Model {
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
   * The branches that trigger builds. A value of * indicates all branches. Multiple specific branches are separated by commas.
   * 
   * @example
   * int,abc
   */
  buildBranches?: string;
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
   * The creation time, in ISO 8601 format using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-03-11T01:23:21Z
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
   * 4695144764942144
   */
  gitAccountId?: number;
  /**
   * @remarks
   * The Git account type. Valid values:
   * - User: individual account.
   * - Organization: organization account.
   * 
   * @example
   * User
   */
  gitAccountType?: string;
  /**
   * @remarks
   * The Git platform.
   * 
   * @example
   * github
   */
  gitPlatform?: string;
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
   * The Node.js version.
   * 
   * @example
   * 22.x
   */
  nodeVersion?: string;
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
   * D1D7BBB5-9B5B-5A29-8848-398F3CA18A8A
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
   * The ER build configuration ID.
   * 
   * @example
   * 3472165674357056
   */
  routineBuildConfigurationId?: number;
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
   * The modification time, in ISO 8601 format using UTC time. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2026-04-19T11:15:20Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      assetsDirectory: 'AssetsDirectory',
      buildBranches: 'BuildBranches',
      buildCommand: 'BuildCommand',
      createTime: 'CreateTime',
      environmentVariables: 'EnvironmentVariables',
      gitAccountId: 'GitAccountId',
      gitAccountType: 'GitAccountType',
      gitPlatform: 'GitPlatform',
      installCommand: 'InstallCommand',
      isPrivate: 'IsPrivate',
      nodeVersion: 'NodeVersion',
      productionBranch: 'ProductionBranch',
      repository: 'Repository',
      requestId: 'RequestId',
      rootDirectory: 'RootDirectory',
      routineBuildConfigurationId: 'RoutineBuildConfigurationId',
      routineEntry: 'RoutineEntry',
      routineName: 'RoutineName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsDirectory: 'string',
      buildBranches: 'string',
      buildCommand: 'string',
      createTime: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gitAccountId: 'number',
      gitAccountType: 'string',
      gitPlatform: 'string',
      installCommand: 'string',
      isPrivate: 'boolean',
      nodeVersion: 'string',
      productionBranch: 'string',
      repository: 'string',
      requestId: 'string',
      rootDirectory: 'string',
      routineBuildConfigurationId: 'number',
      routineEntry: 'string',
      routineName: 'string',
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

