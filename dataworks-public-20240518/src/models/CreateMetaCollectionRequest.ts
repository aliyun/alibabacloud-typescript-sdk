// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCollectionRequest extends $dara.Model {
  /**
   * @example
   * test comment
   */
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test_album
   */
  name?: string;
  /**
   * @remarks
   * The ID of the collection of an ancestor node.
   * 
   * @example
   * category.123
   */
  parentId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Category
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      parentId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

