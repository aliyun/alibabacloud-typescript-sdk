// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSavedQueriesResponseBodySavedQueries } from "./ListSavedQueriesResponseBodySavedQueries";


export class ListSavedQueriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAARfZmVDe9NvRXloR5+8CK9nNJufMdRA7W1miLC1P****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D696E6EF-3A6D-5770-801E-4982081FE4D0
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the custom query templates.
   */
  savedQueries?: ListSavedQueriesResponseBodySavedQueries[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      savedQueries: 'SavedQueries',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
      savedQueries: { 'type': 'array', 'itemType': ListSavedQueriesResponseBodySavedQueries },
    };
  }

  validate() {
    if(Array.isArray(this.savedQueries)) {
      $dara.Model.validateArray(this.savedQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

