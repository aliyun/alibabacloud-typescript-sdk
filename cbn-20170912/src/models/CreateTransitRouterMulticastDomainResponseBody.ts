// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTransitRouterMulticastDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 94E19C6F-206F-5223-9A63-64B85851BC04
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the multicast domain.
   * 
   * @example
   * tr-mcast-domain-40cwj0rgzgdtam****
   */
  transitRouterMulticastDomainId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      transitRouterMulticastDomainId: 'TransitRouterMulticastDomainId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      transitRouterMulticastDomainId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

