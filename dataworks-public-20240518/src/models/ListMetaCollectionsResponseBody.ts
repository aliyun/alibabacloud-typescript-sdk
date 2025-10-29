// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCollectionsResponseBodyDataMetaCollections extends $dara.Model {
  /**
   * @remarks
   * The list of administrator IDs. Supported only for album types. Administrators must be users within the same tenant. Multiple administrators can be specified.
   */
  administrators?: string[];
  /**
   * @remarks
   * The creation time in milliseconds (timestamp).
   * 
   * @example
   * 1668568601000
   */
  createTime?: number;
  /**
   * @remarks
   * The creator user ID.
   * 
   * @example
   * 456789
   */
  createUser?: string;
  /**
   * @remarks
   * The collection description.
   */
  description?: string;
  /**
   * @remarks
   * The collection name.
   * 
   * @example
   * category.123
   */
  id?: string;
  /**
   * @remarks
   * The modification time in milliseconds (timestamp).
   * 
   * @example
   * 1668568601000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The collection name.
   * 
   * @example
   * test_category
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent collection. Can be empty.
   * 
   * @example
   * category.1
   */
  parentId?: string;
  /**
   * @remarks
   * The collection type. Valid values:
   * 
   * *   Category
   * *   Album
   * *   AlbumCategory: Album subcategory
   * 
   * @example
   * Category
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      administrators: 'Administrators',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      description: 'Description',
      id: 'Id',
      modifyTime: 'ModifyTime',
      name: 'Name',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      administrators: { 'type': 'array', 'itemType': 'string' },
      createTime: 'number',
      createUser: 'string',
      description: 'string',
      id: 'string',
      modifyTime: 'number',
      name: 'string',
      parentId: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.administrators)) {
      $dara.Model.validateArray(this.administrators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaCollectionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of collections.
   */
  metaCollections?: ListMetaCollectionsResponseBodyDataMetaCollections[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
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
      metaCollections: 'MetaCollections',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaCollections: { 'type': 'array', 'itemType': ListMetaCollectionsResponseBodyDataMetaCollections },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.metaCollections)) {
      $dara.Model.validateArray(this.metaCollections);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMetaCollectionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Pagination information.
   */
  data?: ListMetaCollectionsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E25887B7-579C-54A5-9C4F-83A0DE367DDE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListMetaCollectionsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

