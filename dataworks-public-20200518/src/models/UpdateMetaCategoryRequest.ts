// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  categoryId?: number;
  /**
   * @remarks
   * The remarks of the category.
   * 
   * @example
   * category name
   */
  comment?: string;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * category name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      comment: 'Comment',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
      comment: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

