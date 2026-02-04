// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEncryptionKeyListResponseBodyKeyIds extends $dara.Model {
  keyId?: string[];
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.keyId)) {
      $dara.Model.validateArray(this.keyId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeEncryptionKeyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The custom keys that are available in the region.
   */
  keyIds?: DescribeEncryptionKeyListResponseBodyKeyIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 10E2160B-959C-5C3E-BFE6-86EC5925****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      keyIds: 'KeyIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyIds: DescribeEncryptionKeyListResponseBodyKeyIds,
      requestId: 'string',
    };
  }

  validate() {
    if(this.keyIds && typeof (this.keyIds as any).validate === 'function') {
      (this.keyIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

