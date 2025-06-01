// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListApprovalProcessesResponseBodyProcesses } from "./ListApprovalProcessesResponseBodyProcesses";


export class ListApprovalProcessesResponseBody extends $dara.Model {
  processes?: ListApprovalProcessesResponseBodyProcesses[];
  /**
   * @example
   * 7E39C33B-F565-55C6-ACC2-953FCE7DA7D6
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: string;
  static names(): { [key: string]: string } {
    return {
      processes: 'Processes',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processes: { 'type': 'array', 'itemType': ListApprovalProcessesResponseBodyProcesses },
      requestId: 'string',
      totalNum: 'string',
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

