// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListResourceRelationshipsResponseBodyResourceRelationships } from "./ListResourceRelationshipsResponseBodyResourceRelationships";


export class ListResourceRelationshipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
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
   * 682A3004-38E3-5122-9A11-CCDFAB9C3C4F
   */
  requestId?: string;
  /**
   * @remarks
   * The resource relationships.
   */
  resourceRelationships?: ListResourceRelationshipsResponseBodyResourceRelationships[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceRelationships: 'ResourceRelationships',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceRelationships: { 'type': 'array', 'itemType': ListResourceRelationshipsResponseBodyResourceRelationships },
    };
  }

  validate() {
    if(Array.isArray(this.resourceRelationships)) {
      $dara.Model.validateArray(this.resourceRelationships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

