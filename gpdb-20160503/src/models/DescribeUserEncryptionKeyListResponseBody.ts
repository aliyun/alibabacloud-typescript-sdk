// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEncryptionKeyListResponseBodyKmsKeys extends $dara.Model {
  /**
   * @remarks
   * The ID of the KMS key.
   * 
   * @example
   * 0b8b1825-fd99-418f-875e-e4dec1dd8715
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeUserEncryptionKeyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the KMS keys.
   */
  kmsKeys?: DescribeUserEncryptionKeyListResponseBodyKmsKeys[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B4CAF581-2AC7-41AD-8940-D56DF7AADF5B
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
      kmsKeys: { 'type': 'array', 'itemType': DescribeUserEncryptionKeyListResponseBodyKmsKeys },
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

