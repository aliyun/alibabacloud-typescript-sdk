// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRouterInterfaceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The order number. This parameter is returned if InstanceChargeType is set to PrePaid.
   * 
   * @example
   * 202008594930117
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 079874CD-AEC1-43E6-AC03-ADD96B6E4907
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the router interface.
   * 
   * @example
   * ri-2ze7fbuohm****
   */
  routerInterfaceId?: string;
  static names(): { [key: string]: string } {
    return {
      orderId: 'OrderId',
      requestId: 'RequestId',
      routerInterfaceId: 'RouterInterfaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orderId: 'number',
      requestId: 'string',
      routerInterfaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

