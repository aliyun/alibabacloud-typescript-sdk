// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The tag type.
   * 
   * @example
   * Custom
   */
  category?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of tags returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AD110813-9AD6-5F07-BFC8-4C841309****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of tag keys.
   */
  tagKeys?: string[];
  /**
   * @remarks
   * The total number of tag keys.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      tagKeys: 'TagKeys',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      tagKeys: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tagKeys)) {
      $dara.Model.validateArray(this.tagKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

