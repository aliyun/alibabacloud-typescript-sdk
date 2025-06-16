// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNatIpCidrsResponseBodyNatIpCidrs } from "./ListNatIpCidrsResponseBodyNatIpCidrs";


export class ListNatIpCidrsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CIDR blocks of the NAT gateway.
   */
  natIpCidrs?: ListNatIpCidrsResponseBodyNatIpCidrs[];
  /**
   * @remarks
   * The token that is used for the next query. Valid values:
   * 
   * *   If the value of **NextToken** is not returned, it indicates that no next query is to be sent.
   * *   If the value of **NextToken** is returned, the value indicates the token that is used for the next query.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a4883
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7479A224-4A28-4895-9604-11F48BCE6A88
   */
  requestId?: string;
  /**
   * @remarks
   * The number of CIDR blocks that are returned.
   * 
   * @example
   * 1
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      natIpCidrs: 'NatIpCidrs',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      natIpCidrs: { 'type': 'array', 'itemType': ListNatIpCidrsResponseBodyNatIpCidrs },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.natIpCidrs)) {
      $dara.Model.validateArray(this.natIpCidrs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

