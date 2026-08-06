// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityDef } from "./MetaEntityDef";


export class ListMetaEntityDefsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of custom entity definitions.
   */
  metaEntityDefs?: MetaEntityDef[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      metaEntityDefs: 'MetaEntityDefs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaEntityDefs: { 'type': 'array', 'itemType': MetaEntityDef },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metaEntityDefs)) {
      $dara.Model.validateArray(this.metaEntityDefs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaEntityDefsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paging information.
   */
  pagingInfo?: ListMetaEntityDefsResponseBodyPagingInfo;
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
   * Indicates whether the request was successful.
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
      pagingInfo: ListMetaEntityDefsResponseBodyPagingInfo,
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

