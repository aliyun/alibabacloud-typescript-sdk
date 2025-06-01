// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalSchemasForApprovalProcessesResponseBodyProcesses } from "./ListApprovalSchemasForApprovalProcessesResponseBodyProcesses";


export class ListApprovalSchemasForApprovalProcessesResponseBody extends $dara.Model {
  processes?: ListApprovalSchemasForApprovalProcessesResponseBodyProcesses[];
  /**
   * @example
   * 58D6B23E-E5DA-5418-8F61-51A3B5A30049
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalSchemasForApprovalProcessesResponseBodyProcesses },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.processes)) {
      $dara.Model.validateArray(this.processes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

