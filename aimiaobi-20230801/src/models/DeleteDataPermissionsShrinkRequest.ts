// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataPermissionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  idsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * llm-xxx
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
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

