// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MoveHostsToNetworkDomainResponseBodyResults } from "./MoveHostsToNetworkDomainResponseBodyResults";


export class MoveHostsToNetworkDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F9B9E190-9C8E-5FEE-B963-7E9F1FD7FB4E
   */
  requestId?: string;
  /**
   * @remarks
   * The result of the call.
   */
  results?: MoveHostsToNetworkDomainResponseBodyResults[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MoveHostsToNetworkDomainResponseBodyResults },
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

