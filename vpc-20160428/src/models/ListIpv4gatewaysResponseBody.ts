// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpv4GatewaysResponseBodyIpv4GatewayModels } from "./ListIpv4gatewaysResponseBodyIpv4gatewayModels";


export class ListIpv4GatewaysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IPv4 gateways.
   */
  ipv4GatewayModels?: ListIpv4GatewaysResponseBodyIpv4GatewayModels[];
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value of **NextToken** is returned, the value is the token that is used for the subsequent query.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2D265800-E306-529C-8418-84B0A1D201DB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      ipv4GatewayModels: 'Ipv4GatewayModels',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipv4GatewayModels: { 'type': 'array', 'itemType': ListIpv4GatewaysResponseBodyIpv4GatewayModels },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipv4GatewayModels)) {
      $dara.Model.validateArray(this.ipv4GatewayModels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

