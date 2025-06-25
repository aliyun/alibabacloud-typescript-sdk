// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the network domain.
   * 
   * @example
   * 31
   */
  networkDomainId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A2873E9C-A7EA-5735-845C-65D3792623D2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkDomainId: 'NetworkDomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkDomainId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

