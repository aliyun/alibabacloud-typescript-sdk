// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchPutKvRequestKvList extends $dara.Model {
  /**
   * @remarks
   * The expiration time as a UNIX timestamp in seconds. The value cannot be earlier than the current time. If both Expiration and ExpirationTtl are specified, ExpirationTtl takes precedence.
   * 
   * @example
   * 1690081381
   */
  expiration?: number;
  /**
   * @remarks
   * The expiration time as a relative time in seconds. If both Expiration and ExpirationTtl are specified, ExpirationTtl takes precedence.
   * 
   * @example
   * 3600
   */
  expirationTtl?: number;
  /**
   * @remarks
   * The key name to set. The key name can be up to 512 characters in length and cannot contain spaces or backslashes (/).
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The value of the key.
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
   * The list of key-value pairs to batch set. The total size cannot exceed 2 MB (2\\*1000\\*1000).
   * 
   * This parameter is required.
   */
  kvList?: BatchPutKvRequestKvList[];
  /**
   * @remarks
   * The name specified when you called [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html).
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

