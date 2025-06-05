// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageCachesRequestTag } from "./DescribeImageCachesRequestTag";


export class DescribeImageCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The container images.
   * 
   * @example
   * nginx
   */
  image?: string;
  /**
   * @remarks
   * The IDs of the image caches.
   * 
   * @example
   * imc-bp195erqe9o2pb09****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The names of the image caches.
   * 
   * @example
   * testcache
   */
  imageCacheName?: string;
  /**
   * @remarks
   * Specifies whether the image layers of the image caches must contain all image layers of the container image.\\
   * If you configure MatchImage, you can configure this parameter to further filter query results.
   * 
   * @example
   * true
   */
  imageFullMatch?: boolean;
  /**
   * @remarks
   * The quantity of image caches whose image layers contain all image layers of the container image.\\
   * If you configure MatchImage, you can configure this parameter to further filter query results.
   * 
   * @example
   * 3
   */
  imageMatchCountRequest?: number;
  /**
   * @remarks
   * The maximum entries of query results that are allowed to be displayed.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The container images used to match the image caches that you want to query. You can specify a maximum of 100 container images.
   * 
   * @example
   * registry-vpc.cn-hangzhou.aliyuncs.com/eci_open/nginx:1.15.10-perl
   */
  matchImage?: string[];
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * AAAAAdDWBF2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the image caches.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the image caches belong.
   * 
   * @example
   * rg-2df3isufhi38****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The IDs of the snapshots that correspond to the image caches.
   * 
   * @example
   * s-2zec5oj8e1yhxijt****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The tags to add to the image caches.
   */
  tag?: DescribeImageCachesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      imageFullMatch: 'ImageFullMatch',
      imageMatchCountRequest: 'ImageMatchCountRequest',
      limit: 'Limit',
      matchImage: 'MatchImage',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      snapshotId: 'SnapshotId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      imageCacheId: 'string',
      imageCacheName: 'string',
      imageFullMatch: 'boolean',
      imageMatchCountRequest: 'number',
      limit: 'number',
      matchImage: { 'type': 'array', 'itemType': 'string' },
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      snapshotId: 'string',
      tag: { 'type': 'array', 'itemType': DescribeImageCachesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.matchImage)) {
      $dara.Model.validateArray(this.matchImage);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

