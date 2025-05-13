// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 264C3E89-XXXX-XXXX-XXXX-CE9C2196C7DC
   */
  requestId?: string;
  /**
   * @example
   * workspace-test-001
   */
  workspaceName?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      workspaceName: 'workspaceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

