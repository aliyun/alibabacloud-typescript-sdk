// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkspaceIdName extends $dara.Model {
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws123***
   */
  workspaceId?: string;
  /**
   * @remarks
   * The workspace name.
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workspaceId: 'string',
      workspaceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

