// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaCollectionResponseBodyMetaCollection extends $dara.Model {
  /**
   * @remarks
   * The list of administrator IDs. Valid only for the album type. The IDs must belong to users in the same tenant. Multiple IDs can be specified.
   */
  administrators?: number[];
  /**
   * @remarks
   * The creation time in milliseconds.
   * 
   * @example
   * 1668568601000
   */
  createTime?: number;
  /**
   * @remarks
   * The ID of the creator.
   * 
   * @example
   * 456789
   */
  createUser?: string;
  /**
   * @remarks
   * The collection description.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The collection ID.
   * 
   * @example
   * category.123
   */
  id?: string;
  /**
   * @remarks
   * The last modified time in milliseconds.
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
   * The parent collection ID. This parameter can be empty.
   * 
   * @example
   * category.12
   */
  parentId?: string;
  /**
   * @remarks
   * The collection type. Valid values:
   * 
   * *   Category
   * *   Album
   * *   AlbumCategory: Album subcategory.
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
      administrators: { 'type': 'array', 'itemType': 'number' },
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

export class GetMetaCollectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The collection details.
   */
  metaCollection?: GetMetaCollectionResponseBodyMetaCollection;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metaCollection: 'MetaCollection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaCollection: GetMetaCollectionResponseBodyMetaCollection,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metaCollection && typeof (this.metaCollection as any).validate === 'function') {
      (this.metaCollection as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

