// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Third-level subcategory
   */
  categoryName?: string;
  /**
   * @example
   * 5
   */
  parentId?: number;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      parentId: 'ParentId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
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

