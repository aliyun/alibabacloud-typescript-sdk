// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNatIpCidrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the NAT CIDR block.
   * 
   * @example
   * vpcnatcidr-gw8lhqtvdn4qnea****
   */
  natIpCidrId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7021BEB1-210F-48A9-AB82-BE9A9110BB89
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      natIpCidrId: 'NatIpCidrId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpCidrId: 'string',
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

