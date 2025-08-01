// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMetaCollectionResponseBodyMetaCollection extends $dara.Model {
  administrators?: number[];
  /**
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
   * The collection ID.
   * 
   * @example
   * category.123
   */
  id?: string;
  /**
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
   * category.12
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
   * The information about the collection.
   */
  metaCollection?: GetMetaCollectionResponseBodyMetaCollection;
  /**
   * @remarks
   * Id of the request
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

