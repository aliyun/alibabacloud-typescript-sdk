// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LineageRelationship } from "./LineageRelationship";


export class ListLineageRelationshipsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The list of data tables.
   */
  lineageRelationships?: LineageRelationship[];
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
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 123
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      lineageRelationships: 'LineageRelationships',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineageRelationships: { 'type': 'array', 'itemType': LineageRelationship },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.lineageRelationships)) {
      $dara.Model.validateArray(this.lineageRelationships);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLineageRelationshipsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination result.
   */
  pagingInfo?: ListLineageRelationshipsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. Used for locating and troubleshooting issues.
   * 
   * @example
   * SDFSDFSDF-SDFSDF-SDFDSF-SDFSDF
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
      pagingInfo: ListLineageRelationshipsResponseBodyPagingInfo,
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

