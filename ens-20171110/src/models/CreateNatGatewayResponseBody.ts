// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the NAT gateway.
   * 
   * @example
   * nat-5t7nh1cfm6kxiszlttr38****
   */
  natGatewayId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      natGatewayId: 'NatGatewayId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natGatewayId: 'string',
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

