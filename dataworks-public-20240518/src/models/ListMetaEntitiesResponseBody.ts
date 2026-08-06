// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntity } from "./MetaEntity";


export class ListMetaEntitiesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The list of custom entities.
   */
  metaEntities?: MetaEntity[];
  /**
   * @remarks
   * The pagination token for the next page.
   * 
   * @example
   * AAAAAdEdsXbwG2ZlbWCzN4wTTg6NmTbhyvglcoMCJsiEdngaTov15YaMyduvjIHYeTOIcEeXqCevM1qffZkwCkUTUYc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      metaEntities: 'MetaEntities',
      nextToken: 'NextToken',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      metaEntities: { 'type': 'array', 'itemType': MetaEntity },
      nextToken: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metaEntities)) {
      $dara.Model.validateArray(this.metaEntities);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListMetaEntitiesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ADFASDFASDFA-ADFASDF-ASDFADSDF-AFFADS
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListMetaEntitiesResponseBodyPagingInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

