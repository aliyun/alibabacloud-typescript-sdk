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

