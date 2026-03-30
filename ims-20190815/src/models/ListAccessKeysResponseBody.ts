// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessKeysResponseBodyAccessKeysAccessKey extends $dara.Model {
  accessKeyId?: string;
  createDate?: string;
  status?: string;
  updateDate?: string;
  static names(): { [key: string]: string } {
    return {
      accessKeyId: 'AccessKeyId',
      createDate: 'CreateDate',
      status: 'Status',
      updateDate: 'UpdateDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKeyId: 'string',
      createDate: 'string',
      status: 'string',
      updateDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAccessKeysResponseBodyAccessKeys extends $dara.Model {
  accessKey?: ListAccessKeysResponseBodyAccessKeysAccessKey[];
  static names(): { [key: string]: string } {
    return {
      accessKey: 'AccessKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessKey: { 'type': 'array', 'itemType': ListAccessKeysResponseBodyAccessKeysAccessKey },
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

export class ListAccessKeysResponseBody extends $dara.Model {
  accessKeys?: ListAccessKeysResponseBodyAccessKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4B450CA1-36E8-4AA2-8461-86B42BF4CC4E
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
      accessKeys: ListAccessKeysResponseBodyAccessKeys,
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

