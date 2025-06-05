// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataCachesResponseBodyDataCachesDataSource } from "./DescribeDataCachesResponseBodyDataCachesDataSource";
import { DescribeDataCachesResponseBodyDataCachesEvents } from "./DescribeDataCachesResponseBodyDataCachesEvents";
import { DescribeDataCachesResponseBodyDataCachesTags } from "./DescribeDataCachesResponseBodyDataCachesTags";


export class DescribeDataCachesResponseBodyDataCaches extends $dara.Model {
  /**
   * @remarks
   * The bucket that stores the data cache.
   * 
   * @example
   * default
   */
  bucket?: string;
  /**
   * @remarks
   * The ID of the elastic container instance that was generated when the data cache was created.
   * 
   * @example
   * eci-8vb1y2w1dv7zeirn****
   */
  containerGroupId?: string;
  /**
   * @remarks
   * The time when the data cache was created.
   * 
   * @example
   * 2023-06-16T02:43Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The ID of the data cache.
   * 
   * @example
   * edc-bp15l4vvys94oo******
   */
  dataCacheId?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSource?: DescribeDataCachesResponseBodyDataCachesDataSource;
  /**
   * @remarks
   * The events.
   */
  events?: DescribeDataCachesResponseBodyDataCachesEvents[];
  /**
   * @remarks
   * The time when the data cache expires.
   * 
   * @example
   * 2023-06-26T02:43Z
   */
  expireDateTime?: string;
  /**
   * @remarks
   * The ID of the on-premises snapshot.
   * 
   * @example
   * s-bp12w3v37sit96t6****
   */
  flashSnapshotId?: string;
  /**
   * @remarks
   * The time when the data cache was last matched.
   * 
   * @example
   * 2023-06-18T02:43Z
   */
  lastMatchedTime?: string;
  /**
   * @remarks
   * The name of the data cache.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The directory in which the virtual host of the data cache resides.
   * 
   * @example
   * /data/models/
   */
  path?: string;
  /**
   * @remarks
   * The creation progress of the data cache.
   * 
   * @example
   * 100%
   */
  progress?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-aek2hlt3ux4****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The size of the data cache. Unit: GiB.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The snapshot ID.
   * 
   * @example
   * s-2zec5oj8e1yhxijt****
   */
  snapshotId?: string;
  /**
   * @remarks
   * The status of the data cache. Valid values:
   * 
   * *   Loading: The data cache is loading data.
   * *   Creating: The data cache is being created.
   * *   Available: The data cache is created.
   * *   Failed: The data cache failed to be created.
   * *   Updating: The data cache is being updated.
   * *   UpdateFailed: The data cache failed to be updated.
   * 
   * If the data cache is in the Available state, the data cache can be used.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The tags that are attached to the data cache.
   */
  tags?: DescribeDataCachesResponseBodyDataCachesTags[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      containerGroupId: 'ContainerGroupId',
      creationTime: 'CreationTime',
      dataCacheId: 'DataCacheId',
      dataSource: 'DataSource',
      events: 'Events',
      expireDateTime: 'ExpireDateTime',
      flashSnapshotId: 'FlashSnapshotId',
      lastMatchedTime: 'LastMatchedTime',
      name: 'Name',
      path: 'Path',
      progress: 'Progress',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      size: 'Size',
      snapshotId: 'SnapshotId',
      status: 'Status',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      containerGroupId: 'string',
      creationTime: 'string',
      dataCacheId: 'string',
      dataSource: DescribeDataCachesResponseBodyDataCachesDataSource,
      events: { 'type': 'array', 'itemType': DescribeDataCachesResponseBodyDataCachesEvents },
      expireDateTime: 'string',
      flashSnapshotId: 'string',
      lastMatchedTime: 'string',
      name: 'string',
      path: 'string',
      progress: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      size: 'number',
      snapshotId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': DescribeDataCachesResponseBodyDataCachesTags },
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    if(Array.isArray(this.events)) {
      $dara.Model.validateArray(this.events);
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

