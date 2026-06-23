// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateRouteTablesFromVpcGatewayEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30F711D5-E7E2-5D42-A247-0FA7288BEAAA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

