// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineBuildConfigurationRequest extends $dara.Model {
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
   * The branches that trigger a build. Set this parameter to * for all branches. To specify multiple branches, separate branch names with commas.
   * 
   * @example
   * feature/test,hotfix/test
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
   * The environment variables.
   */
  environmentVariables?: { [key: string]: string };
  /**
   * @remarks
   * The Git account ID.
   * 
   * @example
   * 3472021274759488
   */
  gitAccountId?: number;
  /**
   * @remarks
   * The Git platform. Valid values: github, gitee, and upload.
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
   * Specifies whether the repository is private. Valid values:
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
   * This parameter is required.
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
   * webdeck
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
   * This parameter is required.
   * 
   * @example
   * rwa-test
   */
  routineName?: string;
  /**
   * @remarks
   * The build template name.
   * 
   * @example
   * react-router
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      assetsDirectory: 'AssetsDirectory',
      buildBranches: 'BuildBranches',
      buildCommand: 'BuildCommand',
      environmentVariables: 'EnvironmentVariables',
      gitAccountId: 'GitAccountId',
      gitPlatform: 'GitPlatform',
      installCommand: 'InstallCommand',
      isPrivate: 'IsPrivate',
      nodeVersion: 'NodeVersion',
      productionBranch: 'ProductionBranch',
      repository: 'Repository',
      rootDirectory: 'RootDirectory',
      routineEntry: 'RoutineEntry',
      routineName: 'RoutineName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsDirectory: 'string',
      buildBranches: 'string',
      buildCommand: 'string',
      environmentVariables: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      gitAccountId: 'number',
      gitPlatform: 'string',
      installCommand: 'string',
      isPrivate: 'boolean',
      nodeVersion: 'string',
      productionBranch: 'string',
      repository: 'string',
      rootDirectory: 'string',
      routineEntry: 'string',
      routineName: 'string',
      templateName: 'string',
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

