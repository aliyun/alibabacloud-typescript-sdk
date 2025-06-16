// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIpsecServersResponseBodyIpsecServers } from "./ListIpsecServersResponseBodyIpsecServers";


export class ListIpsecServersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of IPsec servers.
   */
  ipsecServers?: ListIpsecServersResponseBodyIpsecServers[];
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If no value is returned for **NextToken**, no next queries are sent.
   * *   If a value is returned for **NextToken**, the value can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * caeba0bbb2be03f84eb48b699f0a****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 54B48E3D-DF70-471B-AA93-08E683A1B457
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ipsecServers: 'IpsecServers',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipsecServers: { 'type': 'array', 'itemType': ListIpsecServersResponseBodyIpsecServers },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ipsecServers)) {
      $dara.Model.validateArray(this.ipsecServers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

