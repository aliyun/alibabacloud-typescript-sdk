// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateContextDatabaseWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the first member.
   * 
   * This parameter is required.
   * 
   * @example
   * my-member
   */
  memberName?: string;
  /**
   * @remarks
   * The workspace name.
   * 
   * This parameter is required.
   * 
   * @example
   * my-workspace
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      memberName: 'MemberName',
      workspaceName: 'WorkspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      memberName: 'string',
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

