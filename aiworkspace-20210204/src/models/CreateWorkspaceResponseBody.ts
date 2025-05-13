// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1e195c5116124202371861018d5bde
   */
  requestId?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 1234
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

