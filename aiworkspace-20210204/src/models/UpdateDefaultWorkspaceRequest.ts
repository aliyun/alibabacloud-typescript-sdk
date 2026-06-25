// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDefaultWorkspaceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workspace. For more information, see [ListWorkspaces](https://help.aliyun.com/document_detail/449124.html).
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

