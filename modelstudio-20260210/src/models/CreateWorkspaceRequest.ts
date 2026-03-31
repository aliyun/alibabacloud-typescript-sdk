// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * workspace_test
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

