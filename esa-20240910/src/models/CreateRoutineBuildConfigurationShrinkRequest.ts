// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRoutineBuildConfigurationShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The static asset directory.
   * 
   * @example
   * /root/user
   */
  assetsDirectory?: string;
  /**
   * @remarks
   * The branches that trigger a build. Specify an asterisk (*) to include all branches, or separate multiple specific branch names with commas.
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
   * 
   * @example
   * {"NODE_ENV":"development"}
   */
  environmentVariablesShrink?: string;
  /**
   * @remarks
   * The ID of the Git account.
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
   * The installation command.
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
   * This parameter is required.
   * 
   * @example
   * 22.x
   */
  nodeVersion?: string;
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
   * The name of the repository.
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
   * The path to the Edge Routine entry file.
   * 
   * @example
   * /home
   */
  routineEntry?: string;
  /**
   * @remarks
   * The name of the Edge Routine.
   * 
   * This parameter is required.
   * 
   * @example
   * rwa-test
   */
  routineName?: string;
  /**
   * @remarks
   * The name of the build template.
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
      templateName: 'TemplateName',
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
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

