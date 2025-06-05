// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataCachesRequestTag } from "./DescribeDataCachesRequestTag";


export class DescribeDataCachesRequest extends $dara.Model {
  /**
   * @remarks
   * The bucket that stores the data cache. Default value: default.
   * 
   * @example
   * default
   */
  bucket?: string;
  /**
   * @remarks
   * The data cache IDs.
   */
  dataCacheId?: string[];
  /**
   * @remarks
   * The maximum entries of query results that are allowed to be displayed. Valid values: 1 to 20. Default value: 20.
   * 
   * @example
   * 20
   */
  limit?: number;
  /**
   * @remarks
   * The query token. Set the value to the NextToken value that is returned in the previous call.
   * 
   * @example
   * d78f2dd8-5979-42fe-****-b16db43be5bc
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The virtual host (vHost) directory in which the data cache resides.
   * 
   * @example
   * /data/models/
   */
  path?: string;
  /**
   * @remarks
   * The region ID of the data caches that you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group to which the data cache belongs.
   * 
   * @example
   * rg-acfmzw2jz2z****
   */
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are attached to the data cache.
   */
  tag?: DescribeDataCachesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      dataCacheId: 'DataCacheId',
      limit: 'Limit',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      path: 'Path',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      dataCacheId: { 'type': 'array', 'itemType': 'string' },
      limit: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      path: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tag: { 'type': 'array', 'itemType': DescribeDataCachesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.dataCacheId)) {
      $dara.Model.validateArray(this.dataCacheId);
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

