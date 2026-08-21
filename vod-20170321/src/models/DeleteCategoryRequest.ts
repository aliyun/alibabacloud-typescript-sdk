// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. Only a single category ID is supported. You can obtain the category ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** to view the category ID.
   * - Obtain the category ID from the response of the [AddCategory](~~AddCategory~~) operation when you create a category.
   * 
   * > If the specified category ID is the ID of a parent category, the parent category and all its subcategories are deleted. Proceed with caution.
   * 
   * This parameter is required.
   * 
   * @example
   * 3300****
   */
  cateId?: number;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

