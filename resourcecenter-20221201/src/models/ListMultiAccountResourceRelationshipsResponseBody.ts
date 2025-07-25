// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListMultiAccountResourceRelationshipsResponseBodyResourceRelationships } from "./ListMultiAccountResourceRelationshipsResponseBodyResourceRelationships";


export class ListMultiAccountResourceRelationshipsResponseBody extends $dara.Model {
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
   * BCAB07BA-82FA-5DC0-9322-FB7ED726481D
   */
  requestId?: string;
  /**
   * @remarks
   * The resource relationships.
   */
  resourceRelationships?: ListMultiAccountResourceRelationshipsResponseBodyResourceRelationships[];
  /**
   * @remarks
   * The search scope. Valid values:
   * 
   * *   ID of a resource directory: Resources within the management account and all members of the resource directory are searched.
   * *   ID of the Root folder: Resources within all members in the Root folder and the subfolders of the Root folder are searched.
   * *   ID of a folder: Resources within all members in the folder are searched.
   * *   ID of a member: Resources within the member are searched.
   * 
   * @example
   * rd-r4****
   */
  scope?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      resourceRelationships: 'ResourceRelationships',
      scope: 'Scope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      resourceRelationships: { 'type': 'array', 'itemType': ListMultiAccountResourceRelationshipsResponseBodyResourceRelationships },
      scope: 'string',
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

