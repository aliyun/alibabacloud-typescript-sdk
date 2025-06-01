// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDynamicDisposalProcessesResponseBodyDisposalProcesses } from "./ListDynamicDisposalProcessesResponseBodyDisposalProcesses";


export class ListDynamicDisposalProcessesResponseBody extends $dara.Model {
  disposalProcesses?: ListDynamicDisposalProcessesResponseBodyDisposalProcesses[];
  /**
   * @example
   * BE4FB974-11BC-5453-9BE1-1606A73EACA6
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      disposalProcesses: 'DisposalProcesses',
      requestId: 'RequestId',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disposalProcesses: { 'type': 'array', 'itemType': ListDynamicDisposalProcessesResponseBodyDisposalProcesses },
      requestId: 'string',
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disposalProcesses)) {
      $dara.Model.validateArray(this.disposalProcesses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

