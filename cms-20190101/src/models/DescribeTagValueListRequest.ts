// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTagValueListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Valid values: 1 to 100. Default value: 50.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  regionId?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * For more information about how to obtain a tag key, see [DescribeTagKeyList](https://help.aliyun.com/document_detail/145558.html).
   * 
   * This parameter is required.
   * 
   * @example
   * tagKey1
   */
  tagKey?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      tagKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

