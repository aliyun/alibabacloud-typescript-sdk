// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetAccountsResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The database account name.
   * 
   * @example
   * app_reader
   */
  accountName?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID to which the asset belongs.
   * 
   * @example
   * 123456789012****
   */
  aliUid?: number;
  /**
   * @remarks
   * The column encryption access permissions. Valid values:
   * 
   * - fullAccess: plaintext access.
   * - restrictedAccess: restricted access.
   * - noneAccess: decryption prohibited. noneAccess applies only to ApsaraDB RDS for MySQL instances whose current effective key pattern is client_key.
   * 
   * @example
   * fullAccess
   */
  authRole?: string;
  /**
   * @remarks
   * The current effective column encryption key mode. Valid values:
   * 
   * - client_key: local master key.
   * - kms_key: KMS key.
   * 
   * This field is not returned if no column encryption configuration is in effect.
   * 
   * @example
   * client_key
   */
  encryptionKeyMode?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The expiration time of the plaintext access permissions. The value is a UNIX timestamp in milliseconds since 1970-01-01 00:00:00 UTC. This field is not returned if no expiration time is set.
   * 
   * @example
   * 2145953410000
   */
  expireTime?: number;
  /**
   * @remarks
   * The database account identifier. This value is used as AccountId when configuring permissions.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * The database instance identity.
   * 
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @remarks
   * The cloud product code.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The cloud product type identifier. Valid values:
   * 
   * - 5: RDS.
   * - 8: POLARDB.
   * - 27: PolarDBX2.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The region name of the asset.
   * 
   * @example
   * China North 3 (Zhangjiakou)
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      aliUid: 'AliUid',
      authRole: 'AuthRole',
      encryptionKeyMode: 'EncryptionKeyMode',
      engineType: 'EngineType',
      expireTime: 'ExpireTime',
      id: 'Id',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      aliUid: 'number',
      authRole: 'string',
      encryptionKeyMode: 'string',
      engineType: 'string',
      expireTime: 'number',
      id: 'number',
      instanceId: 'string',
      productCode: 'string',
      productId: 'number',
      regionId: 'string',
      regionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataAssetAccountsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned data.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The list of records returned by the current query.
   */
  items?: ListDataAssetAccountsResponseBodyItems[];
  /**
   * @remarks
   * The number of records per page for the current query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID. You can use this ID to locate the API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records that match the current query or statistical scope.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      items: 'Items',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      items: { 'type': 'array', 'itemType': ListDataAssetAccountsResponseBodyItems },
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

