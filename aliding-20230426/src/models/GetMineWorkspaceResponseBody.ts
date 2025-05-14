// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetMineWorkspaceResponseBodyWorkspace } from "./GetMineWorkspaceResponseBodyWorkspace";


export class GetMineWorkspaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  workspace?: GetMineWorkspaceResponseBodyWorkspace;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workspace: GetMineWorkspaceResponseBodyWorkspace,
    };
  }

  validate() {
    if(this.workspace && typeof (this.workspace as any).validate === 'function') {
      (this.workspace as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

