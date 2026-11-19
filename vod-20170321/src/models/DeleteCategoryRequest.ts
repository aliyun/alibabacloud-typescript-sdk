// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can specify only one category ID. You can obtain the category ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration management** > **Media asset management configuration** > **Category management** to view the category ID.
   * - Call the [AddCategory](~~AddCategory~~) operation to create a category. The category ID is returned in the response.
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

