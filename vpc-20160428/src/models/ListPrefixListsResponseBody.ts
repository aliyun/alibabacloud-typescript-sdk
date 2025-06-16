// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPrefixListsResponseBodyPrefixLists } from "./ListPrefixListsResponseBodyPrefixLists";


export class ListPrefixListsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page. Valid values: **1** to **100**. Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results. Valid values:
   * 
   * *   If **NextToken** is empty, no next page exists.
   * *   If a value is returned for **NextToken**, the value indicates the token that is used for the next request to retrieve a new page of results.
   * 
   * @example
   * FFmyTO70tTpLG6I3FmYAXGKPd****
   */
  nextToken?: string;
  /**
   * @remarks
   * The information about the prefix lists.
   */
  prefixLists?: ListPrefixListsResponseBodyPrefixLists[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DF72F7BB-5DFA-529C-887E-B0BB70D89C4F
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      prefixLists: 'PrefixLists',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      prefixLists: { 'type': 'array', 'itemType': ListPrefixListsResponseBodyPrefixLists },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.prefixLists)) {
      $dara.Model.validateArray(this.prefixLists);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

