// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserEncryptionKeyListResponseBodyKeyIds extends $dara.Model {
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

export class DescribeUserEncryptionKeyListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of custom keys.
   */
  keyIds?: DescribeUserEncryptionKeyListResponseBodyKeyIds;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7CD51DA4-A499-43CE-B9B5-20CD4FDC648E
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
      keyIds: DescribeUserEncryptionKeyListResponseBodyKeyIds,
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

