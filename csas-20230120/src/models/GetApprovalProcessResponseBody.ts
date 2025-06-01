// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApprovalProcessResponseBodyProcess } from "./GetApprovalProcessResponseBodyProcess";


export class GetApprovalProcessResponseBody extends $dara.Model {
  process?: GetApprovalProcessResponseBodyProcess;
  /**
   * @example
   * C81E0B4B-AAEB-5FDD-B27E-3F5AF7EBD7EF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      process: 'Process',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      process: GetApprovalProcessResponseBodyProcess,
      requestId: 'string',
    };
  }

  validate() {
    if(this.process && typeof (this.process as any).validate === 'function') {
      (this.process as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

