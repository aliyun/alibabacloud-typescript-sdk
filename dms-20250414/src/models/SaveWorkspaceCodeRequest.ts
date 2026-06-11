// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWorkspaceCodeRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the file.
   * 
   * This parameter is required.
   * 
   * @example
   * Description: \\"Example template, describe instances in some status\\"nFormatVersion: OOS-2019-06-01nTasks:n  - Name: SleepTaskn    Action: ACS::Sleepn    Properties:n      Duration: PT1Mn
   */
  content?: string;
  /**
   * @remarks
   * Specifies whether to overwrite the file if it already exists. The default value is `true`.
   * 
   * @example
   * True
   */
  force?: boolean;
  /**
   * @remarks
   * Specifies whether the file is an IaC template.
   * 
   * @example
   * false
   */
  iac?: boolean;
  /**
   * @remarks
   * The modification time of the file.
   * 
   * The time must be in the ISO 8601 format: `yyyy-MM-ddTHH:mm:ssZ`.
   * 
   * @example
   * 2026-01-01T10:11:12Z
   */
  mtime?: string;
  /**
   * @remarks
   * The publishing configuration, specified as a JSON string. The `repos` array specifies the target repository and branch. The `exclude` array specifies the directories to ignore.
   * 
   * This parameter is required.
   * 
   * @example
   * {"repos":[{"repo":"git@xxxx.git", "branch":"master"}], "exclude":["/.dms", "/username"]}
   */
  path?: string;
  /**
   * @remarks
   * Information about the repository.
   * 
   * @example
   * computing/ecs
   */
  repo?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345678
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      force: 'Force',
      iac: 'Iac',
      mtime: 'Mtime',
      path: 'Path',
      repo: 'Repo',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      force: 'boolean',
      iac: 'boolean',
      mtime: 'string',
      path: 'string',
      repo: 'string',
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

