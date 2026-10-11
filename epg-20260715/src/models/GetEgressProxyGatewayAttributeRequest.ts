// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEgressProxyGatewayAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the egress proxy gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * epg-gw80bb6a94f835db****
   */
  egressProxyGatewayId?: string;
  static names(): { [key: string]: string } {
    return {
      egressProxyGatewayId: 'EgressProxyGatewayId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      egressProxyGatewayId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

