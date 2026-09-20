// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatePublicNetworkAddressRequest extends $dara.Model {
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but make sure that the token is unique among different requests. The token can contain only ASCII characters. If you do not specify this parameter, the system automatically uses the value of RequestId as the value of ClientToken. The value of RequestId may be different for each API request.
   * 
   * @example
   * 83b2b5e117a5b8bce0fae88d90576a84_6452320_82718582
   */
  clientToken?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * hb-t4naqsay5gn******
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

