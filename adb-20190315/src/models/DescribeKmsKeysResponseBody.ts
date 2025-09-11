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

export class DescribeKmsKeysResponseBodyKmsKeys extends $dara.Model {
  kmsKey?: DescribeKmsKeysResponseBodyKmsKeysKmsKey[];
  static names(): { [key: string]: string } {
    return {
      kmsKey: 'KmsKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      kmsKey: { 'type': 'array', 'itemType': DescribeKmsKeysResponseBodyKmsKeysKmsKey },
    };
  }

  validate() {
    if(Array.isArray(this.kmsKey)) {
      $dara.Model.validateArray(this.kmsKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKmsKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried KMS keys.
   */
  kmsKeys?: DescribeKmsKeysResponseBodyKmsKeys;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8F91F25F-8BCF-59E3-AF67-3806DB41FD09
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
      kmsKeys: DescribeKmsKeysResponseBodyKmsKeys,
      requestId: 'string',
    };
  }

  validate() {
    if(this.kmsKeys && typeof (this.kmsKeys as any).validate === 'function') {
      (this.kmsKeys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

