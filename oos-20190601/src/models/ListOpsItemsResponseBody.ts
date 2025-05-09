// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListOpsItemsResponseBodyOpsItems } from "./ListOpsItemsResponseBodyOpsItems";


export class ListOpsItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * gAAAAABfTgv5ewUWmNdJ3g7JVLvX70sPH90GZOVGC6KPDUL0FIIb
   */
  nextToken?: string;
  /**
   * @remarks
   * The list of O\\&M items.
   */
  opsItems?: ListOpsItemsResponseBodyOpsItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 113DD533-389C-5F83-9C69-F64D5BAB10B2
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
      opsItems: 'OpsItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      opsItems: { 'type': 'array', 'itemType': ListOpsItemsResponseBodyOpsItems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.opsItems)) {
      $dara.Model.validateArray(this.opsItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

