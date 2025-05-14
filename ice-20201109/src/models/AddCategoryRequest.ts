// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category name.
   * 
   * *   The value can be up to 64 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * This parameter is required.
   */
  cateName?: string;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * @example
   * 5
   */
  parentId?: number;
  /**
   * @remarks
   * The type of the category. Valid values:
   * 
   * *   default: audio, video, and image files. This is the default value.
   * *   material: short video materials.
   * 
   * @example
   * default
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      cateName: 'CateName',
      parentId: 'ParentId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateName: 'string',
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

