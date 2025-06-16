// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpv4GatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPv4 gateway.
   * 
   * @example
   * ipv4gw-5tsnc6s4ogsedtp3k****
   */
  ipv4GatewayId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F282742B-1BBB-5F63-A3AF-E92EC575A1A6
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4GatewayId: 'Ipv4GatewayId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4GatewayId: 'string',
      requestId: 'string',
      resourceGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

