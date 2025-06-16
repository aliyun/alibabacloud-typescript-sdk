// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDhcpOptionsSetsResponseBodyDhcpOptionsSets } from "./ListDhcpOptionsSetsResponseBodyDhcpOptionsSets";


export class ListDhcpOptionsSetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the DHCP options sets.
   */
  dhcpOptionsSets?: ListDhcpOptionsSetsResponseBodyDhcpOptionsSets[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value is used to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd********
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      dhcpOptionsSets: 'DhcpOptionsSets',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dhcpOptionsSets: { 'type': 'array', 'itemType': ListDhcpOptionsSetsResponseBodyDhcpOptionsSets },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dhcpOptionsSets)) {
      $dara.Model.validateArray(this.dhcpOptionsSets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

