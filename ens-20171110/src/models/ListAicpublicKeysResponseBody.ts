// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICPublicKeysResponseBodyPublicKeys extends $dara.Model {
  /**
   * @remarks
   * The content of the public key.
   * 
   * @example
   * fvsvshbvjfksvj
   */
  content?: string;
  /**
   * @remarks
   * The time when the public key was created.
   * 
   * @example
   * 2025-10-09T15:13:21+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The description of the public key.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The group of the public key.
   * 
   * @example
   * test-group
   */
  keyGroup?: string;
  /**
   * @remarks
   * The name of the public key.
   * 
   * @example
   * mykey
   */
  keyName?: string;
  /**
   * @remarks
   * The type of the public key.
   * 
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
   * @remarks
   * The current page number in the paginated query.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records to display per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of public keys.
   */
  publicKeys?: ListAICPublicKeysResponseBodyPublicKeys[];
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * xxxsxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
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

