// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIPv6TranslatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPv6 Translation Service instance.
   * 
   * @example
   * ipv6trans-bp1i8ahxut1xxxx
   */
  ipv6TranslatorId?: string;
  /**
   * @remarks
   * The name of the IPv6 Translation Service instance.
   * 
   * @example
   * test_nat64gw
   */
  name?: string;
  /**
   * @remarks
   * The order ID.
   * 
   * @example
   * 202303300940739
   */
  orderId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AE05898-06E5-4782-xxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The specification of the IPv6 Translation Service instance.
   * 
   * @example
   * small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6TranslatorId: 'Ipv6TranslatorId',
      name: 'Name',
      orderId: 'OrderId',
      requestId: 'RequestId',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6TranslatorId: 'string',
      name: 'string',
      orderId: 'number',
      requestId: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

