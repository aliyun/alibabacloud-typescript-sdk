// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataAssetAccountsResponseBodyItems extends $dara.Model {
  accountName?: string;
  aliUid?: number;
  authRole?: string;
  /**
   * @example
   * client_key
   */
  encryptionKeyMode?: string;
  engineType?: string;
  /**
   * @example
   * 2145953410000
   */
  expireTime?: number;
  id?: number;
  instanceId?: string;
  productCode?: string;
  productId?: number;
  regionId?: string;
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
  currentPage?: number;
  items?: ListDataAssetAccountsResponseBodyItems[];
  pageSize?: number;
  requestId?: string;
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

