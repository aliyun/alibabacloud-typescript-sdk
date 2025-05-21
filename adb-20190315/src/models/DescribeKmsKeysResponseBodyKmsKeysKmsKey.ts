// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKmsKeysResponseBodyKmsKeysKmsKey extends $dara.Model {
  /**
   * @remarks
   * The alias of the key.
   * 
   * @example
   * mykey
   */
  keyAlias?: string;
  /**
   * @remarks
   * The ID of the key.
   * 
   * @example
   * 2e81355b-f8e7-4090-8082-a8f8124a621c
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyAlias: 'KeyAlias',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyAlias: 'string',
      keyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

