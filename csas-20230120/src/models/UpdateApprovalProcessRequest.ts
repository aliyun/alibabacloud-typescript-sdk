// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateApprovalProcessRequestMatchSchemas } from "./UpdateApprovalProcessRequestMatchSchemas";


export class UpdateApprovalProcessRequest extends $dara.Model {
  description?: string;
  matchSchemas?: UpdateApprovalProcessRequestMatchSchemas;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * approval-process-f16bf74b2b29****
   */
  processId?: string;
  processName?: string;
  processNodes?: string[][];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      matchSchemas: 'MatchSchemas',
      processId: 'ProcessId',
      processName: 'ProcessName',
      processNodes: 'ProcessNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      matchSchemas: UpdateApprovalProcessRequestMatchSchemas,
      processId: 'string',
      processName: 'string',
      processNodes: { 'type': 'array', 'itemType': { 'type': 'array', 'itemType': 'string' } },
    };
  }

  validate() {
    if(this.matchSchemas && typeof (this.matchSchemas as any).validate === 'function') {
      (this.matchSchemas as any).validate();
    }
    if(Array.isArray(this.processNodes)) {
      $dara.Model.validateArray(this.processNodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

