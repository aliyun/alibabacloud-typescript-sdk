// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKVCacheInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the KVCache instance.
   * 
   * @example
   * Test cache instance
   */
  KVCacheInstanceDescription?: string;
  /**
   * @remarks
   * The KVCache instance IDs. Separate multiple instance IDs with commas (,).
   * 
   * @example
   * pkv-123456,pkv-789012
   */
  KVCacheInstanceIds?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The instance ID of the associated PolarDB instance.
   * 
   * @example
   * pc-123456
   */
  relativeDBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      KVCacheInstanceDescription: 'KVCacheInstanceDescription',
      KVCacheInstanceIds: 'KVCacheInstanceIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      relativeDBClusterId: 'RelativeDBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      KVCacheInstanceDescription: 'string',
      KVCacheInstanceIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      relativeDBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

