// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category name.
   * - The maximum length is 64 bytes.
   * - UTF-8 encoding.
   * 
   * This parameter is required.
   * 
   * @example
   * Third-level subcategory
   */
  cateName?: string;
  /**
   * @remarks
   * The parent category ID.
   * 
   * @example
   * 5
   */
  parentId?: number;
  /**
   * @remarks
   * The category type. Valid values:
   * - default (default): audio, video, and image category.                                 
   * - material: short video material category.
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

