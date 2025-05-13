// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListEcsInstancesResponseBodyHeaders } from "./ListEcsInstancesResponseBodyHeaders";
import { ListEcsInstancesResponseBodyResult } from "./ListEcsInstancesResponseBodyResult";


export class ListEcsInstancesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of returned records.
   */
  headers?: ListEcsInstancesResponseBodyHeaders;
  /**
   * @remarks
   * The header of the response.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * Cloud Assistant the installation status, support:
   * 
   * *   true: The Prometheus agent was installed.
   * *   false: The Prometheus agent was not installed.
   */
  result?: ListEcsInstancesResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListEcsInstancesResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListEcsInstancesResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

