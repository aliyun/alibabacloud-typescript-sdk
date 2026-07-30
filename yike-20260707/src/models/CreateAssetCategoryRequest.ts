// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAssetCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category name.
   * 
   * Maximum length: 64 bytes.
   * 
   * UTF-8 encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * Third-level subcategory
   */
  categoryName?: string;
  /**
   * @remarks
   * The parent category ID.
   * 
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

