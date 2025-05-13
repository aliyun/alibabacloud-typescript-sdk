// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAllNodeResponseBodyResult } from "./ListAllNodeResponseBodyResult";


export class ListAllNodeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The zone ID of the node.
   * 
   * @example
   * 0D71B597-F3FF-5B56-88D7-74F9D3F7****
   */
  requestId?: string;
  /**
   * @remarks
   * The CPU utilization.
   * 
   * >  If the **extended** request parameter is set to **true** and the monitoring information of the nodes in the cluster is being synchronized, the value of the cpuPercent parameter is null. In this case, you need to send a request again after 10 seconds to obtain the value of the cpuPercent parameter.
   */
  result?: ListAllNodeResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListAllNodeResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

