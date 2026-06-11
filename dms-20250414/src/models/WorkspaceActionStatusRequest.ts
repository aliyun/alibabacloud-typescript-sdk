// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkspaceActionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The unique key that identifies the asynchronous task. You can obtain this key from the response of an operation, such as a deployment.
   * 
   * This parameter is required.
   * 
   * @example
   * ws-xxx-xxxx
   */
  key?: string;
  /**
   * @remarks
   * The ID of the workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

