// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey extends $dara.Model {
  accessKeyId?: string;
  createDate?: string;
  deleteDate?: string;
  recycleDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
      deleteDate: 'DeleteDate',
      recycleDate: 'RecycleDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      createDate: 'string',
      deleteDate: 'string',
      recycleDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysInRecycleBinResponseBodyAccessKeys extends $dara.Model {
  accessKey?: ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey[];
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: { 'type': 'array', 'itemType': ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey },
    };
  }

  validate() {
    if(Array.isArray(this.accessKey)) {
      $dara.Model.validateArray(this.accessKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysInRecycleBinResponseBody extends $dara.Model {
  accessKeys?: ListAccessKeysInRecycleBinResponseBodyAccessKeys;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeys: 'AccessKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeys: ListAccessKeysInRecycleBinResponseBodyAccessKeys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.accessKeys && typeof (this.accessKeys as any).validate === 'function') {
      (this.accessKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

