// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEgressProxyGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy gateway instance.
   * 
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 01A05AB5-98DC-5175-9BBB-33BA653BC0C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyGatewayId: 'EgressProxyGatewayId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyGatewayId: 'string',
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

