// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryResponseBodyCategory extends $dara.Model {
  /**
   * @remarks
   * The ID of the created category.
   * 
   * @example
   * 45
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   */
  cateName?: string;
  /**
   * @remarks
   * The level of the category. A value of **0** indicates a level-1 category, a value of **1** indicates a level-2 category, and a value of **2** indicates a level-3 category.
   * 
   * @example
   * 0
   */
  level?: number;
  /**
   * @remarks
   * The ID of the parent category. By default, if ParentId is left empty or less than 1, -1 is returned, which indicates that the created category is the root directory.
   * 
   * @example
   * -1
   */
  parentId?: number;
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
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
      level: 'number',
      parentId: 'number',
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

