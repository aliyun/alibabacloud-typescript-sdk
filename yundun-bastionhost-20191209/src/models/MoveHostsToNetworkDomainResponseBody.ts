// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MoveHostsToNetworkDomainResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The result of the operation.
   * 
   * > LICENSE_OUT_OF_LIMIT indicates that the network domain feature is not enabled for the current edition.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * 1
   */
  hostId?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * None
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      hostId: 'HostId',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      hostId: 'string',
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MoveHostsToNetworkDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F9B9E190-9C8E-5FEE-B963-7E9F1FD7FB4E
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the operation.
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

