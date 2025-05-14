// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWorkspacesResponseBodyWorkspace } from "./GetWorkspacesResponseBodyWorkspace";


export class GetWorkspacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  workspace?: GetWorkspacesResponseBodyWorkspace[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workspace: { 'type': 'array', 'itemType': GetWorkspacesResponseBodyWorkspace },
    };
  }

  validate() {
    if(Array.isArray(this.workspace)) {
      $dara.Model.validateArray(this.workspace);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

