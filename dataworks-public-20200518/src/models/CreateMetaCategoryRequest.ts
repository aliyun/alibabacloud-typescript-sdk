// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The remarks of the category.
   * 
   * @example
   * category 1
   */
  comment?: string;
  /**
   * @remarks
   * The name of the category.
   * 
   * This parameter is required.
   * 
   * @example
   * category_name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 0
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      name: 'Name',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      name: 'string',
      parentId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

