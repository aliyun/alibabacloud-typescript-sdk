// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveWorkspaceCodeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Description: \\"Example template, describe instances in some status\\"nFormatVersion: OOS-2019-06-01nTasks:n  - Name: SleepTaskn    Action: ACS::Sleepn    Properties:n      Duration: PT1Mn
   */
  content?: string;
  /**
   * @example
   * True
   */
  force?: boolean;
  /**
   * @example
   * false
   */
  iac?: boolean;
  /**
   * @example
   * 2026-01-01T10:11:12Z
   */
  mtime?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"repos":[{"repo":"git@xxxx.git", "branch":"master"}], "exclude":["/.dms", "/username"]}
   */
  path?: string;
  /**
   * @example
   * computing/ecs
   */
  repo?: string;
  /**
   * @remarks
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

