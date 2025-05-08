// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateClassicNetworkResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the network.
   * 
   * @example
   * n-5s9ayrxsd9hszrlt5fgv2****
   */
  networkId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1A004E06-AC1B-5806-BA5E-41AB6B02DE83
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkId: 'NetworkId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkId: 'string',
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

