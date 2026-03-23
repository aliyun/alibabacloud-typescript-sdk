// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList extends $dara.Model {
  aliasName?: string;
  creator?: string;
  deleteDate?: string;
  description?: string;
  encryptionKey?: string;
  encryptionKeyStatus?: string;
  keyType?: string;
  keyUsage?: string;
  materialExpireTime?: string;
  origin?: string;
  usedBy?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      encryptionKey: 'EncryptionKey',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      keyType: 'KeyType',
      keyUsage: 'KeyUsage',
      materialExpireTime: 'MaterialExpireTime',
      origin: 'Origin',
      usedBy: 'UsedBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      encryptionKey: 'string',
      encryptionKeyStatus: 'string',
      keyType: 'string',
      keyUsage: 'string',
      materialExpireTime: 'string',
      origin: 'string',
      usedBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDBInstanceEncryptionKeyResponseBody extends $dara.Model {
  creator?: string;
  deleteDate?: string;
  description?: string;
  encryptionKey?: string;
  encryptionKeyList?: DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList[];
  encryptionKeyStatus?: string;
  keyUsage?: string;
  materialExpireTime?: string;
  origin?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      creator: 'Creator',
      deleteDate: 'DeleteDate',
      description: 'Description',
      encryptionKey: 'EncryptionKey',
      encryptionKeyList: 'EncryptionKeyList',
      encryptionKeyStatus: 'EncryptionKeyStatus',
      keyUsage: 'KeyUsage',
      materialExpireTime: 'MaterialExpireTime',
      origin: 'Origin',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creator: 'string',
      deleteDate: 'string',
      description: 'string',
      encryptionKey: 'string',
      encryptionKeyList: { 'type': 'array', 'itemType': DescribeDBInstanceEncryptionKeyResponseBodyEncryptionKeyList },
      encryptionKeyStatus: 'string',
      keyUsage: 'string',
      materialExpireTime: 'string',
      origin: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.encryptionKeyList)) {
      $dara.Model.validateArray(this.encryptionKeyList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

