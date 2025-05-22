// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the tag key.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The start page of the returned pages.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tag values returned on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * AD110813-9AD6-5F07-BFC8-4C841309****
   */
  requestId?: string;
  /**
   * @remarks
   * The tag values that are associated with the tag key.
   */
  tagValues?: string[];
  /**
   * @remarks
   * The total number of tag values that are associated with the tag key.
   * 
   * @example
   * 13
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagValues: 'TagValues',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagValues: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagValues)) {
      $dara.Model.validateArray(this.tagValues);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

