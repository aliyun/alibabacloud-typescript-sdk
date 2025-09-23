// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageInstanceRequest extends $dara.Model {
  /**
   * @example
   * pc-wz9062015ly7526jc
   */
  DBClusterId?: string;
  /**
   * @example
   * test_db
   */
  DBName?: string;
  /**
   * @example
   * 2
   */
  engineType?: string;
  /**
   * @example
   * 2020-11-14T16:00:00Z
   */
  expireTime?: number;
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * c2FpXzIwMjIwNjI5X2Jhay9zYWlfc3VtbWVyX3RyZWFzdXJlX3Bvb2xfbG9nLkNTVg==
   */
  nextToken?: string;
  /**
   * @example
   * TABLE
   */
  objectType?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 1
   */
  pageSize?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * account_log
   */
  tableName?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBName: 'DBName',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      objectType: 'ObjectType',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tableName: 'TableName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBName: 'string',
      engineType: 'string',
      expireTime: 'number',
      maxResults: 'number',
      nextToken: 'string',
      objectType: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'string',
      pageSize: 'string',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tableName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

