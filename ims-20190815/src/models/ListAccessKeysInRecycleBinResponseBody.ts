// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessKeysInRecycleBinResponseBodyAccessKeysAccessKey extends $dara.Model {
  /**
   * @remarks
   * The AccessKey ID.
   * 
   * @example
   * LTAI*******************
   */
  accessKeyId?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was created.
   * 
   * @example
   * 2020-10-11T09:12:00Z
   */
  createDate?: string;
  /**
   * @remarks
   * The time when the AccessKey pair will be permanently deleted from the recycle bin.
   * 
   * @example
   * 2020-11-12T09:12:00Z
   */
  deleteDate?: string;
  /**
   * @remarks
   * The time when the AccessKey pair was deleted and moved to the recycle bin.
   * 
   * @example
   * 2020-10-12T09:12:00Z
   */
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
  /**
   * @remarks
   * The information about the AccessKey pairs.
   */
  accessKeys?: ListAccessKeysInRecycleBinResponseBodyAccessKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4507D1CD-526A-4E2B-A1E2-3AB045D1EE0B
   */
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

