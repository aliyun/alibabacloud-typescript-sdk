// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MoveDatabasesToNetworkDomainResponseBodyResults } from "./MoveDatabasesToNetworkDomainResponseBodyResults";


export class MoveDatabasesToNetworkDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E5B1BC32-72B2-5BFD-BF75-5D38261264D1
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the call.
   */
  results?: MoveDatabasesToNetworkDomainResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MoveDatabasesToNetworkDomainResponseBodyResults },
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

