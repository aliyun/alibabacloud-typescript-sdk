// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMetaCollectionsResponseBodyDataMetaCollections extends $dara.Model {
  administrators?: string[];
  /**
   * @remarks
   * The time when the collection was created. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1668568601000
   */
  createTime?: number;
  /**
   * @example
   * 456789
   */
  createUser?: string;
  description?: string;
  /**
   * @remarks
   * The ID of the collection.
   * 
   * @example
   * category.123
   */
  id?: string;
  /**
   * @remarks
   * The time when the collection was modified. The value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1668568601000
   */
  modifyTime?: number;
  /**
   * @example
   * test_category
   */
  name?: string;
  /**
   * @remarks
   * The ID of the collection of the ancestor node. This parameter can be left empty.
   * 
   * @example
   * category.1
   */
  parentId?: string;
  /**
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
   * The collections.
   */
  metaCollections?: ListMetaCollectionsResponseBodyDataMetaCollections[];
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
  /**
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
   * The data.
   */
  data?: ListMetaCollectionsResponseBodyData;
  /**
   * @remarks
   * Id of the request
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

