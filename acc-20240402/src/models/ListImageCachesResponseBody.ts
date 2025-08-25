// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageCachesResponseBodyImageCaches extends $dara.Model {
  /**
   * @example
   * 2025-**-**T07:55:25Z
   */
  createTime?: string;
  /**
   * @example
   * imc-bp1dj*****
   */
  imageCacheId?: string;
  /**
   * @example
   * my-imc
   */
  imageCacheName?: string;
  images?: string[];
  /**
   * @example
   * 2025-**-**T07:58:25Z
   */
  readyTime?: string;
  /**
   * @example
   * rg-aekzh43v*****
   */
  resourceGroupId?: string;
  /**
   * @example
   * 8
   */
  size?: number;
  /**
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
  imageCaches?: ListImageCachesResponseBodyImageCaches[];
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAdDWBF*****
   */
  nextToken?: string;
  /**
   * @example
   * 0E234675-3465-4CC3-9D0F-9A864BC*****
   */
  requestId?: string;
  /**
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

