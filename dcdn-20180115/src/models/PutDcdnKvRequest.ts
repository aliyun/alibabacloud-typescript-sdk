// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDcdnKvRequest extends $dara.Model {
  /**
   * @remarks
   * The time when the key expires.Example: "1690081381".
   * 
   * @example
   * 1690081381
   */
  expiration?: number;
  /**
   * @remarks
   * The time when the key expires.Example: "3600".
   * 
   * @example
   * 3600
   */
  expirationTtl?: number;
  /**
   * @remarks
   * The key. The key can be up to 512 characters in length, and cannot contain spaces.
   * 
   * This parameter is required.
   * 
   * @example
   * key1
   */
  key?: string;
  /**
   * @remarks
   * The name of the namespace.
   * 
   * This parameter is required.
   * 
   * @example
   * ns1
   */
  namespace?: string;
  /**
   * @remarks
   * The value of the key. The maximum size is 2 MB (2 x 1000 x 1000 bytes).
   * 
   * This parameter is required.
   * 
   * @example
   * value1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      expiration: 'Expiration',
      expirationTtl: 'ExpirationTtl',
      key: 'Key',
      namespace: 'Namespace',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

