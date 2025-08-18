// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvRequestKvList extends $dara.Model {
  /**
   * @remarks
   * The time when the key-value pair expires, which cannot be earlier than the current time. The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
   * 
   * @example
   * 1690081381
   */
  expiration?: number;
  /**
   * @remarks
   * The relative expiration time. Unit: seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
   * 
   * @example
   * 3600
   */
  expirationTtl?: number;
  /**
   * @remarks
   * The key name. The name can be up to 512 characters in length and cannot contain spaces or backslashes (\\\\).
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The key content.
   * 
   * This parameter is required.
   * 
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expiration: 'number',
      expirationTtl: 'number',
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchPutKvRequest extends $dara.Model {
  /**
   * @remarks
   * The key-value pairs that you want to configure at a time. The total size can be up to 2 MB (2 × 1000 × 1000).
   * 
   * This parameter is required.
   */
  kvList?: BatchPutKvRequestKvList[];
  /**
   * @remarks
   * The name of the namespace that you specify when you call the [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      kvList: 'KvList',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kvList: { 'type': 'array', 'itemType': BatchPutKvRequestKvList },
      namespace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kvList)) {
      $dara.Model.validateArray(this.kvList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

