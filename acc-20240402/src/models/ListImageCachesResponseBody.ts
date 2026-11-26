// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageCachesResponseBodyImageCaches extends $dara.Model {
  /**
   * @remarks
   * The time when the image cache was created. The time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2025-**-**T07:55:25Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * @example
   * imc-bp1dj*****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The name of the image cache.
   * 
   * @example
   * my-imc
   */
  imageCacheName?: string;
  /**
   * @remarks
   * The container images in the image cache.
   */
  images?: string[];
  /**
   * @remarks
   * Available time when the image cache became available. Available time follows the ISO 8601 standard and is displayed in UTC.
   * 
   * @example
   * 2025-**-**T07:58:25Z
   */
  readyTime?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the image cache. Unit: GiB. Minimum value: 1.
   * 
   * @example
   * 8
   */
  size?: number;
  /**
   * @remarks
   * The cache status of the image cache.
   * 
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      images: 'Images',
      readyTime: 'ReadyTime',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      imageCacheId: 'string',
      imageCacheName: 'string',
      images: { 'type': 'array', 'itemType': 'string' },
      readyTime: 'string',
      resourceGroupId: 'string',
      size: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageCachesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The image cache information.
   */
  imageCaches?: ListImageCachesResponseBodyImageCaches[];
  /**
   * @remarks
   * The maximum number of results to return for a single request.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned for this call.
   * 
   * @example
   * AAAAAdDWBF*****
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0E234675-3465-4CC3-9D0F-9A864BC*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of results returned.
   * 
   * @example
   * 20
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      imageCaches: 'ImageCaches',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageCaches: { 'type': 'array', 'itemType': ListImageCachesResponseBodyImageCaches },
      maxResults: 'number',
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

