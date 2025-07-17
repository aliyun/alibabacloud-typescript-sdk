// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Catalog } from "./Catalog";


export class ListCatalogsResponseBodyPagingInfo extends $dara.Model {
  catalogs?: Catalog[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      catalogs: 'Catalogs',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogs: { 'type': 'array', 'itemType': Catalog },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.catalogs)) {
      $dara.Model.validateArray(this.catalogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCatalogsResponseBody extends $dara.Model {
  pagingInfo?: ListCatalogsResponseBodyPagingInfo;
  /**
   * @example
   * 317CD7D0-AB36-XXXXXX
   */
  requestId?: string;
  /**
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
      pagingInfo: ListCatalogsResponseBodyPagingInfo,
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

