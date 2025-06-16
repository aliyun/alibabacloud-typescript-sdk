// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolList } from "./ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolList";


export class ListPublicIpAddressPoolsResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The IP address pools.
   */
  publicIpAddressPoolList?: ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4EC47282-1B74-4534-BD0E-403F3EE64CAF
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      publicIpAddressPoolList: 'PublicIpAddressPoolList',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      publicIpAddressPoolList: { 'type': 'array', 'itemType': ListPublicIpAddressPoolsResponseBodyPublicIpAddressPoolList },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicIpAddressPoolList)) {
      $dara.Model.validateArray(this.publicIpAddressPoolList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

