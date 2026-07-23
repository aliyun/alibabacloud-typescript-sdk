// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRoutineBuildConfigurationShrinkRequest extends $dara.Model {
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
   * The branches that trigger a build. Set this to * for all branches. To specify multiple branches, separate branch names with commas.
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
   * The environment variables.
   * 
   * @example
   * 100
   */
  environmentVariablesShrink?: string;
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
   * - `true`: The repository is private.
   * - `false`: The repository is not private.
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
   * test-routine
   */
  routineName?: string;
  static names(): { [key: string]: string } {
    return {
      assetsDirectory: 'AssetsDirectory',
      buildBranches: 'BuildBranches',
      buildCommand: 'BuildCommand',
      environmentVariablesShrink: 'EnvironmentVariables',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetsDirectory: 'string',
      buildBranches: 'string',
      buildCommand: 'string',
      environmentVariablesShrink: 'string',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

