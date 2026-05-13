// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WorkspaceActionStatusRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ws-xxx-xxxx
   */
  key?: string;
  /**
   * @remarks
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

