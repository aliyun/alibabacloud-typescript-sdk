// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListTagResourcesResponseBodyTagResources } from "./ListTagResourcesResponseBodyTagResources";


export class ListTagResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Access denied information
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * Next token for the next query. An empty NextToken indicates there are no more results.
   * 
   * @example
   * uPZbmbpgxp2/6vNWNPoase3Eqy+gL9pdDBH7KGZXMuZ9GxmBbMJcTP/dlrNqRaWF
   */
  nextToken?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 5514CB39-B7C0-5B89-8534-2DE1E0F2B7AB
   */
  requestId?: string;
  /**
   * @remarks
   * List of resources
   */
  tagResources?: ListTagResourcesResponseBodyTagResources[];
  /**
   * @remarks
   * Total
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      tagResources: 'TagResources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      nextToken: 'string',
      requestId: 'string',
      tagResources: { 'type': 'array', 'itemType': ListTagResourcesResponseBodyTagResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagResources)) {
      $dara.Model.validateArray(this.tagResources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

