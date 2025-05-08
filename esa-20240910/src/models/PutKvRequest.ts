// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutKvRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the content of the key is Base64-encoded. Set this parameter to true if you want to store the key content in binary format. When this parameter is set to true, the Value parameter must be Base64-encoded.
   * 
   * @example
   * true
   */
  base64?: boolean;
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
   * The name of the namespace that you specify when you call the [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The content of the key, which can be up to 2 MB (2 × 1000 × 1000). If the content is larger than 2 MB, call [PutKvWithHighCapacity](https://help.aliyun.com/document_detail/2850486.html).
   * 
   * This parameter is required.
   * 
   * @example
   * test_value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      base64: 'Base64',
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      namespace: 'Namespace',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      base64: 'boolean',
      expiration: 'number',
      expirationTtl: 'number',
      key: 'string',
      namespace: 'string',
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

