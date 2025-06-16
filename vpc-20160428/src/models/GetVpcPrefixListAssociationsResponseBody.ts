// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation } from "./GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation";


export class GetVpcPrefixListAssociationsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
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
   * The information about the network instances that are associated with the prefix list.
   */
  prefixListAssociation?: GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation[];
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
   * The number of entries returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      nextToken: 'NextToken',
      prefixListAssociation: 'PrefixListAssociation',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      nextToken: 'string',
      prefixListAssociation: { 'type': 'array', 'itemType': GetVpcPrefixListAssociationsResponseBodyPrefixListAssociation },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prefixListAssociation)) {
      $dara.Model.validateArray(this.prefixListAssociation);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

