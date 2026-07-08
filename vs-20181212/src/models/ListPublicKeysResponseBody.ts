// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicKeysResponseBodyPublicKeys extends $dara.Model {
  /**
   * @remarks
   * The content of the public key. The content is encoded in Base64 format by default.
   * 
   * @example
   * verify_30d89ccb0905c8c7882c1d14a991954b
   */
  content?: string;
  /**
   * @remarks
   * The description of the public key.
   * 
   * @example
   * 测试使用
   */
  description?: string;
  /**
   * @remarks
   * The public key group.
   * 
   * @example
   * mygroup
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
   * The type of the public key. Valid values:
   * 
   * - **adb**: ADB key
   * 
   * - **ssh**: SSH key
   * 
   * @example
   * ssh
   */
  keyType?: string;
  /**
   * @remarks
   * The time when the public key was uploaded.
   * 
   * @example
   * 2024-06-11T14:26:48+08:00
   */
  uploadTime?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      description: 'Description',
      keyGroup: 'KeyGroup',
      keyName: 'KeyName',
      keyType: 'KeyType',
      uploadTime: 'UploadTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      description: 'string',
      keyGroup: 'string',
      keyName: 'string',
      keyType: 'string',
      uploadTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublicKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned list.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of public keys.
   */
  publicKeys?: ListPublicKeysResponseBodyPublicKeys[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 100
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
      publicKeys: { 'type': 'array', 'itemType': ListPublicKeysResponseBodyPublicKeys },
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

