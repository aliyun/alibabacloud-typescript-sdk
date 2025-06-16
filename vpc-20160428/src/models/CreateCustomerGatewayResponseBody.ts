// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomerGatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The timestamp generated when the customer gateway was created. Unit: milliseconds.
   * 
   * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since the epoch time January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1493363486000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the customer gateway.
   * 
   * @example
   * cgw-bp1jrawp82av6bws9****
   */
  customerGatewayId?: string;
  /**
   * @remarks
   * The description of the customer gateway.
   * 
   * @example
   * desctest
   */
  description?: string;
  /**
   * @remarks
   * The static IP address of the gateway device in the on-premises data center.
   * 
   * @example
   * 101.12.XX.XX
   */
  ipAddress?: string;
  /**
   * @remarks
   * The name of the customer gateway.
   * 
   * @example
   * nametest
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D32B3C26-6C6C-4988-93E9-D2A6444CE6AE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      customerGatewayId: 'CustomerGatewayId',
      description: 'Description',
      ipAddress: 'IpAddress',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      customerGatewayId: 'string',
      description: 'string',
      ipAddress: 'string',
      name: 'string',
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

