// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CustomAttribute } from "./CustomAttribute";


export class ListCustomAttributesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * A list of custom attribute objects.
   */
  customAttributes?: CustomAttribute[];
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
   * The total number of entries.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      customAttributes: 'CustomAttributes',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAttributes: { 'type': 'array', 'itemType': CustomAttribute },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customAttributes)) {
      $dara.Model.validateArray(this.customAttributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomAttributesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The paging information.
   */
  pagingInfo?: ListCustomAttributesResponseBodyPagingInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 54594ACA-7976-5273-958B-02E15E9B867C
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request succeeded.
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
      pagingInfo: ListCustomAttributesResponseBodyPagingInfo,
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

