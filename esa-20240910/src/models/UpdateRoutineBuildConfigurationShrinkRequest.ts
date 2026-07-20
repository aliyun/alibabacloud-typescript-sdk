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
   * The branches that trigger a build. Set this parameter to * for all branches. To specify multiple branches, separate branch names with commas.
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
   * npm xxx
   */
  buildCommand?: string;
  /**
   * @remarks
   * The environment variables.
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
   * The install command.
   * 
   * @example
   * npm install xxx
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
   * The Node.js version. Valid values: `22.x`, `20.x`, `18.x`, `16.x`, `14.x`, and `12.x`.
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
   * The path of the ER entry file.
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

