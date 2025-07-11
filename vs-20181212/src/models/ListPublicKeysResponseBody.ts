// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublicKeysResponseBodyPublicKeys extends $dara.Model {
  /**
   * @example
   * verify_30d89ccb0905c8c7882c1d14a991954b
   */
  content?: string;
  description?: string;
  /**
   * @example
   * mygroup
   */
  keyGroup?: string;
  /**
   * @example
   * mykey
   */
  keyName?: string;
  keyType?: string;
  /**
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  publicKeys?: ListPublicKeysResponseBodyPublicKeys[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
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

