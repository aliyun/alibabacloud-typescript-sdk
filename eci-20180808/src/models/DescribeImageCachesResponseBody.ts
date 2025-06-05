// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageCachesResponseBodyImageCaches } from "./DescribeImageCachesResponseBodyImageCaches";


export class DescribeImageCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about image caches.
   */
  imageCaches?: DescribeImageCachesResponseBodyImageCaches[];
  /**
   * @remarks
   * The returned value of NextToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 39FC2E43-3DD7-4CEF-9EF4-E4AD6E635301
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCaches: 'ImageCaches',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCaches: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCaches },
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.imageCaches)) {
      $dara.Model.validateArray(this.imageCaches);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

