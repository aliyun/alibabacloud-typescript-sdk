// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParentPlatformsResponseBodyPlatforms } from "./DescribeParentPlatformsResponseBodyPlatforms";


export class DescribeParentPlatformsResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageCount?: number;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  platforms?: DescribeParentPlatformsResponseBodyPlatforms[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageCount: 'PageCount',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      platforms: 'Platforms',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageCount: 'number',
      pageNum: 'number',
      pageSize: 'number',
      platforms: { 'type': 'array', 'itemType': DescribeParentPlatformsResponseBodyPlatforms },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.platforms)) {
      $dara.Model.validateArray(this.platforms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

