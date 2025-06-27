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

