// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeImageCachesResponseBodyImageCachesEvents } from "./DescribeImageCachesResponseBodyImageCachesEvents";
import { DescribeImageCachesResponseBodyImageCachesTags } from "./DescribeImageCachesResponseBodyImageCachesTags";


export class DescribeImageCachesResponseBodyImageCaches extends $dara.Model {
  /**
   * @remarks
   * The ID of the elastic container instance.
   * 
   * @example
   * eci-bp18oq3m15prd9jb****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The time when the image cache was created.
   * 
   * @example
   * 2021-02-09T02:24:07Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The elimination policy of the image cache. This parameter is empty by default, which indicates that the image cache is always retained.
   * 
   * You can set this parameter to LRU, which indicates that the image cache can be automatically deleted. When the number of image caches reaches the quota, the system automatically deletes the image caches whose EliminationStrategy parameter is set to LRU and that are least regularly used.
   * 
   * @example
   * LRU
   */
  eliminationStrategy?: string;
  /**
   * @remarks
   * The events of pulling an image to create the image cache.
   */
  events?: DescribeImageCachesResponseBodyImageCachesEvents[];
  /**
   * @remarks
   * The time when the image cache expires.
   * 
   * @example
   * 2019-11-10T09:00:48Z
   */
  expireDateTime?: string;
  /**
   * @remarks
   * The ID of the local snapshot. A temporary local snapshot is created if the instant image cache feature is enabled.
   * 
   * @example
   * s-bp12w3v37sit96t6****
   */
  flashSnapshotId?: string;
  /**
   * @remarks
   * The ID of the image cache.
   * 
   * @example
   * imc-bp195erqe9o2pb09****
   */
  imageCacheId?: string;
  /**
   * @remarks
   * The name of the image cache.
   * 
   * @example
   * imagetest
   */
  imageCacheName?: string;
  /**
   * @remarks
   * The size of the image cache. Unit: GiB.
   * 
   * @example
   * 20
   */
  imageCacheSize?: number;
  /**
   * @remarks
   * The images contained in the image cache.
   */
  images?: string[];
  /**
   * @remarks
   * The time when the image cache was last matched.
   * 
   * @example
   * 2021-08-18T03:48:10Z
   */
  lastMatchedTime?: string;
  /**
   * @remarks
   * The progress of creating the snapshot that is used to create the image cache.
   * 
   * >  If the instant image cache feature is enabled, the system creates a temporary local snapshot and then a regular snapshot. In this case, this parameter indicates the progress of creating the regular snapshot.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The region ID of the image cache.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the image cache belongs.
   * 
   * @example
   * rg-2df3isufhi38****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The ID of the snapshot that corresponds to the image cache.
   * 
   * @example
   * s-2zec5oj8e1yhxijt****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the image cache. Valid values:
   * 
   * *   Preparing: The image cache is being prepared.
   * *   Creating: The image is being created.
   * *   Ready: The image cache is created.
   * *   Failed: The image cache failed to be created.
   * *   Updating: The image cache is being updated.
   * *   UpdateFailed: The image cache failed to be updated.
   * 
   * The image cache is ready for use when it is in the Ready state.
   * 
   * @example
   * Ready
   */
  status?: string;
  /**
   * @remarks
   * The tags of the image cache.
   */
  tags?: DescribeImageCachesResponseBodyImageCachesTags[];
  static names(): { [key: string]: string } {
    return {
      containerGroupId: 'ContainerGroupId',
      creationTime: 'CreationTime',
      eliminationStrategy: 'EliminationStrategy',
      events: 'Events',
      expireDateTime: 'ExpireDateTime',
      flashSnapshotId: 'FlashSnapshotId',
      imageCacheId: 'ImageCacheId',
      imageCacheName: 'ImageCacheName',
      imageCacheSize: 'ImageCacheSize',
      images: 'Images',
      lastMatchedTime: 'LastMatchedTime',
      progress: 'Progress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      snapshotId: 'SnapshotId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerGroupId: 'string',
      creationTime: 'string',
      eliminationStrategy: 'string',
      events: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCachesEvents },
      expireDateTime: 'string',
      flashSnapshotId: 'string',
      imageCacheId: 'string',
      imageCacheName: 'string',
      imageCacheSize: 'number',
      images: { 'type': 'array', 'itemType': 'string' },
      lastMatchedTime: 'string',
      progress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      snapshotId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeImageCachesResponseBodyImageCachesTags },
    };
  }

  validate() {
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
    }
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

