// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can specify only one category ID. You can obtain the category ID by using one of the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). In the left-side navigation pane, choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** > **Audio/Video and Image Categories** or **Short Video Material Categories** to view the category ID.
   * - The category ID is returned when you call the [AddCategory](~~AddCategory~~) operation to create a category.
   * 
   * This parameter is required.
   * 
   * @example
   * 10020****
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * - The name can be up to 64 bytes in length.
   * - The name must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * Landscape
   */
  cateName?: string;
  static names(): { [key: string]: string } {
    return {
      cateId: 'CateId',
      cateName: 'CateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cateId: 'number',
      cateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

