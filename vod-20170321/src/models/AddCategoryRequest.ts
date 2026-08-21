// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category name.
   * - Maximum length: 64 bytes.
   * - UTF-8 encoded.
   * 
   * This parameter is required.
   * 
   * @example
   * Comedy
   */
  cateName?: string;
  /**
   * @remarks
   * The parent category ID.
   * 
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Management Configuration** > **Category Management** > **Audio/Video/Image Categories** or **Short Video Material Categories** to view category IDs.
   * 
   * > - If you specify this parameter, a subcategory is created under the specified parent category. If you do not specify this parameter, a level-0 category is created.
   * > - Because all level-0 categories for short video materials are built-in and cannot be modified, added, or deleted, only subcategories can be created under level-0 categories. Therefore, this parameter is required when `Type` is set to `material`.
   * 
   * @example
   * 100012****
   */
  parentId?: number;
  /**
   * @remarks
   * The category type. Valid values:
   * 
   * - **default** (default): audio/video/image category.
   * - **material**: short video material category.
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

