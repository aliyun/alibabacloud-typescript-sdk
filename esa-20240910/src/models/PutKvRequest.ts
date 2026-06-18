// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutKvRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the Value parameter uses Base64 encoding. Set this to true when storing a binary value. If this parameter is true, Value must be a valid Base64-encoded string.
   * 
   * @example
   * true
   */
  base64?: boolean;
  /**
   * @remarks
   * The expiration time for the key-value pair, as a Unix timestamp in seconds. This value cannot be earlier than the current time. If you specify both Expiration and ExpirationTtl, ExpirationTtl takes precedence.
   * 
   * @example
   * 1690081381
   */
  expiration?: number;
  /**
   * @remarks
   * The time-to-live (TTL) for the key-value pair, in seconds. If you specify both Expiration and ExpirationTtl, ExpirationTtl takes precedence.
   * 
   * @example
   * 3600
   */
  expirationTtl?: number;
  /**
   * @remarks
   * The key can be up to 512 bytes long and cannot contain spaces or forward slashes (/).
   * 
   * This parameter is required.
   * 
   * @example
   * test_key
   */
  key?: string;
  /**
   * @remarks
   * The name of the namespace. You specify this name when you call the [CreateKvNamespace](https://help.aliyun.com/document_detail/2850317.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * test_namespace
   */
  namespace?: string;
  /**
   * @remarks
   * The value to associate with the key. The maximum size is 2 MB (2,000,000 bytes). For values that exceed this limit, use the [PutKvWithHighCapacity](https://help.aliyun.com/document_detail/2850486.html) operation.
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

