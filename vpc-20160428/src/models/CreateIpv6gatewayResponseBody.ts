// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpv6GatewayResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the IPv6 gateway.
   * 
   * @example
   * ipv6gw-hp3y0l3ln89j8cdvf****
   */
  ipv6GatewayId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the IPv6 gateway belongs.
   * 
   * @example
   * rg-acfmxazb4ph6aiy****
   */
  resourceGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      ipv6GatewayId: 'Ipv6GatewayId',
      requestId: 'RequestId',
      resourceGroupId: 'ResourceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv6GatewayId: 'string',
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

