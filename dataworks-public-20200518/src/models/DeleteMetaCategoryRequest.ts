// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMetaCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category.
   * 
   * This parameter is required.
   * 
   * @example
   * 23
   */
  categoryId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

