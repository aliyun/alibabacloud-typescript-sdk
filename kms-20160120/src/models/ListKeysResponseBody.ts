// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeysResponseBodyKeysKey extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud Resource Name (ARN) of the CMK.
   * 
   * @example
   * acs:kms:cn-hangzhou:123456:key/80e9409f-78fa-42ab-84bd-83f40c81****
   */
  keyArn?: string;
  /**
   * @remarks
   * The ID of the CMK. The ID must be globally unique.
   * 
   * @example
   * 08c33a6f-4e0a-4a1b-a3fa-7ddfa1d4****
   */
  keyId?: string;
  static names(): { [key: string]: string } {
    return {
      keyArn: 'KeyArn',
      keyId: 'KeyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyArn: 'string',
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

export class ListKeysResponseBodyKeys extends $dara.Model {
  key?: ListKeysResponseBodyKeysKey[];
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: { 'type': 'array', 'itemType': ListKeysResponseBodyKeysKey },
    };
  }

  validate() {
    if(Array.isArray(this.key)) {
      $dara.Model.validateArray(this.key);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the CMKs of the current Alibaba Cloud account in the current region.
   */
  keys?: ListKeysResponseBodyKeys;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 8252db58-2036-408c-a3d5-56e656dc2551
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of CMKs.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keys: 'Keys',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keys: ListKeysResponseBodyKeys,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.keys && typeof (this.keys as any).validate === 'function') {
      (this.keys as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

