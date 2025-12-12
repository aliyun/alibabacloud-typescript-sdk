// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEncryptionKeyListResponseBodyKmsKeys extends $dara.Model {
  /**
   * @example
   * 0275bd3f-fdbb-4d8c-846b-71b211******
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
  kmsKeys?: DescribeUserEncryptionKeyListResponseBodyKmsKeys[];
  /**
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
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

