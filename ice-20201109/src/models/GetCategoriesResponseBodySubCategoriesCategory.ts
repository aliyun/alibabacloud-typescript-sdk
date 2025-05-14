// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCategoriesResponseBodySubCategoriesCategory extends $dara.Model {
  /**
   * @remarks
   * The category ID.
   * 
   * @example
   * 129
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * *   The value can be up to 64 bytes in length.
   * *   The value is encoded in UTF-8.
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category. A value of **0** indicates a level-1 category, a value of **1** indicates a level-2 category, and a value of **2** indicates a level-3 category.
   * 
   * @example
   * 1
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 46
   */
  parentId?: number;
  /**
   * @remarks
   * The total number of subcategories.
   * 
   * @example
   * 100
   */
  subTotal?: number;
  /**
   * @remarks
   * The type of the category. Valid values:
   * 
   * *   **default**: audio, video, and image files. This is the default value.
   * *   **material**: short video materials.
   * 
   * @example
   * default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
      level: 'Level',
      parentId: 'ParentId',
      subTotal: 'SubTotal',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
      subTotal: 'number',
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

