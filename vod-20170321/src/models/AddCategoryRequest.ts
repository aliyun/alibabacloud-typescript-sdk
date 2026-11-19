// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category name.
   * - It can be up to 64 bytes in length.
   * - It is encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * Comedy
   */
  cateName?: string;
  /**
   * @remarks
   * The ID of the parent category.
   * 
   * Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** > **Audio/Video/Image Categories** or **Short Video Material Categories** to view the category ID.
   * 
   * > - If you specify this parameter, a subcategory is created under the specified parent category. If you do not specify this parameter, a level-1 category is created.
   * > - All level-1 categories for short video materials are built-in and cannot be modified, added, or deleted. You can only create subcategories under level-1 categories. Therefore, this parameter is required when `Type` is set to `material`.
   * 
   * @example
   * 100012****
   */
  parentId?: number;
  /**
   * @remarks
   * The category type. Valid values:
   * 
   * - **default**: audio, video, and image categories. This is the default value.
   * - **material**: short video material categories.
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

