// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingInstancesResponseBodyItems extends $dara.Model {
  /**
   * @example
   * AES_256_GCM
   */
  encryptionAlgorithm?: string;
  /**
   * @example
   * 12345678-1234-1234-1234-12345678****
   */
  encryptionKeyId?: string;
  /**
   * @example
   * MySQL
   */
  engineType?: string;
  /**
   * @example
   * 2
   */
  fullAccessAccountCount?: number;
  /**
   * @example
   * rm-2ze1abcdefgh****
   */
  instanceId?: string;
  /**
   * @example
   * RDS
   */
  productCode?: string;
  /**
   * @example
   * 5
   */
  productId?: number;
  /**
   * @example
   * cn-zhangjiakou
   */
  regionId?: string;
  /**
   * @example
   * 华北 3（张家口）
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
   * @example
   * 1
   */
  currentPage?: number;
  items?: ListDataMaskingInstancesResponseBodyItems[];
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  /**
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

