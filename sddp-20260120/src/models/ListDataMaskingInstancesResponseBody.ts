// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingInstancesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * The current column encryption algorithm of the instance.
   * 
   * @example
   * AES_256_GCM
   */
  encryptionAlgorithm?: string;
  /**
   * @remarks
   * The ID of the KMS key used by the instance. This parameter may not be returned in local key scenarios.
   * 
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  encryptionKeyId?: string;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @remarks
   * The number of database accounts that have the fullAccess plaintext access permissions.
   * 
   * @example
   * 2
   */
  fullAccessAccountCount?: number;
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
   * The code of the cloud service.
   * 
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the cloud service type. Valid values: 5: RDS. 8: POLARDB. 27: PolarDBX2.
   * 
   * @example
   * 5
   */
  productId?: number;
  /**
   * @remarks
   * The ID of the region where the asset is located.
   * 
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @remarks
   * The name of the region where the asset is located.
   * 
   * @example
   * China (Zhangjiakou)
   */
  regionName?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionAlgorithm: 'EncryptionAlgorithm',
      encryptionKeyId: 'EncryptionKeyId',
      engineType: 'EngineType',
      fullAccessAccountCount: 'FullAccessAccountCount',
      instanceId: 'InstanceId',
      productCode: 'ProductCode',
      productId: 'ProductId',
      regionId: 'RegionId',
      regionName: 'RegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionAlgorithm: 'string',
      encryptionKeyId: 'string',
      engineType: 'string',
      fullAccessAccountCount: 'number',
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

export class ListDataMaskingInstancesResponseBody extends $dara.Model {
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
  items?: ListDataMaskingInstancesResponseBodyItems[];
  /**
   * @remarks
   * The number of entries returned per page in the current query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID, which can be used to locate the current API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries that meet the current statistics or query scope.
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
      items: { 'type': 'array', 'itemType': ListDataMaskingInstancesResponseBodyItems },
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

