// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKmsKeysResponseBodyKmsKeys extends $dara.Model {
  /**
   * @remarks
   * The alias of the key.
   * 
   * @example
   * key-shh656820f4mh9qxxxxx     alias/test1
   */
  keyAlias?: string;
  /**
   * @remarks
   * The key ID.
   * 
   * @example
   * 37291352-xxxx-xxxx-adbf-fd0630a95583
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

export class DescribeKmsKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The KMS keys.
   */
  kmsKeys?: DescribeKmsKeysResponseBodyKmsKeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 60EEBD77-227C-5B39-86EA-D89163C5****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      kmsKeys: 'KmsKeys',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKeys: { 'type': 'array', 'itemType': DescribeKmsKeysResponseBodyKmsKeys },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.kmsKeys)) {
      $dara.Model.validateArray(this.kmsKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

