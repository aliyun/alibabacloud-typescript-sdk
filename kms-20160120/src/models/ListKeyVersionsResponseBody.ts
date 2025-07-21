// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKeyVersionsResponseBodyKeyVersionsKeyVersion extends $dara.Model {
  /**
   * @remarks
   * The date and time when the CMK version was created. The time is displayed in UTC.
   * 
   * @example
   * 2016-03-25T10:42:40Z
   */
  creationDate?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * >  If you set the KeyId parameter to the alias of the CMK, the ID of the CMK to which the alias is bound is returned.
   * 
   * @example
   * 0b30658a-ed1a-4922-b8f7-a673ca9c****
   */
  keyId?: string;
  /**
   * @remarks
   * The globally unique ID of the CMK version.
   * 
   * @example
   * 1e3304fd-68ac-4d5b-8886-ae5f01a1****
   */
  keyVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      creationDate: 'CreationDate',
      keyId: 'KeyId',
      keyVersionId: 'KeyVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationDate: 'string',
      keyId: 'string',
      keyVersionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBodyKeyVersions extends $dara.Model {
  keyVersion?: ListKeyVersionsResponseBodyKeyVersionsKeyVersion[];
  static names(): { [key: string]: string } {
    return {
      keyVersion: 'KeyVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersion: { 'type': 'array', 'itemType': ListKeyVersionsResponseBodyKeyVersionsKeyVersion },
    };
  }

  validate() {
    if(Array.isArray(this.keyVersion)) {
      $dara.Model.validateArray(this.keyVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKeyVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of key versions.
   */
  keyVersions?: ListKeyVersionsResponseBodyKeyVersions;
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
   * The ID of the request.
   * 
   * @example
   * f71204c4-53cd-4eea-b405-653ba2db7e86
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned key versions.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      keyVersions: 'KeyVersions',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyVersions: ListKeyVersionsResponseBodyKeyVersions,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.keyVersions && typeof (this.keyVersions as any).validate === 'function') {
      (this.keyVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

