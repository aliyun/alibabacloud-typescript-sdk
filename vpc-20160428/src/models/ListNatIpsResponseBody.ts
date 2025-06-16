// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNatIpsResponseBodyNatIps } from "./ListNatIpsResponseBodyNatIps";


export class ListNatIpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IP addresses of the NAT gateway.
   */
  natIps?: ListNatIpsResponseBodyNatIps[];
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If the value of **NextToken** is not returned, it indicates that no next query is to be sent.
   * *   If the value of **NextToken** is returned, the value indicates the token that is used for the next query.
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
   * 7E78CEEA-BF8F-44D1-9DCD-D9141135B71E
   */
  requestId?: string;
  /**
   * @remarks
   * The number of IP addresses that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      natIps: 'NatIps',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIps: { 'type': 'array', 'itemType': ListNatIpsResponseBodyNatIps },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natIps)) {
      $dara.Model.validateArray(this.natIps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

