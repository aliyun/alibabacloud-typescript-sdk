// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateRouteTablesWithVpcGatewayEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59BDDA2D-FB52-59F9-9DC5-5EA7D6808B8E
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

