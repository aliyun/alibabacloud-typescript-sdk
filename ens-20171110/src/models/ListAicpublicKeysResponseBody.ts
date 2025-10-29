// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICPublicKeysResponseBodyPublicKeys extends $dara.Model {
  /**
   * @example
   * fvsvshbvjfksvj
   */
  content?: string;
  /**
   * @example
   * 2025-10-09T15:13:21+08:00
   */
  creationTime?: string;
  /**
   * @example
   * 测试
   */
  description?: string;
  /**
   * @example
   * test-group
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @example
   * adb
   */
  keyType?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      creationTime: 'CreationTime',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      creationTime: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAICPublicKeysResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  publicKeys?: ListAICPublicKeysResponseBodyPublicKeys[];
  /**
   * @example
   * xxxsxxxxx
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      publicKeys: 'PublicKeys',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      publicKeys: { 'type': 'array', 'itemType': ListAICPublicKeysResponseBodyPublicKeys },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.publicKeys)) {
      $dara.Model.validateArray(this.publicKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

