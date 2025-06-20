// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExampleQueriesResponseBodyExampleQueries } from "./ListExampleQueriesResponseBodyExampleQueries";


export class ListExampleQueriesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the sample query templates.
   */
  exampleQueries?: ListExampleQueriesResponseBodyExampleQueries[];
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
   * eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****
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
  static names(): { [key: string]: string } {
    return {
      exampleQueries: 'ExampleQueries',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exampleQueries: { 'type': 'array', 'itemType': ListExampleQueriesResponseBodyExampleQueries },
      maxResults: 'string',
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.exampleQueries)) {
      $dara.Model.validateArray(this.exampleQueries);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

