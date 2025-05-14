// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRelatedWorkspacesResponseBodyWorkspaces } from "./GetRelatedWorkspacesResponseBodyWorkspaces";


export class GetRelatedWorkspacesResponseBody extends $dara.Model {
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  workspaces?: GetRelatedWorkspacesResponseBodyWorkspaces[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
      workspaces: 'workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
      workspaces: { 'type': 'array', 'itemType': GetRelatedWorkspacesResponseBodyWorkspaces },
    };
  }

  validate() {
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

