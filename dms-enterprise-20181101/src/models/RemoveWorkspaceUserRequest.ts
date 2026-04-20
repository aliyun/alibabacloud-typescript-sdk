// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveWorkspaceUserRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***
   */
  dmsUserIds?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 12****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dmsUserIds: 'DmsUserIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dmsUserIds: 'string',
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

