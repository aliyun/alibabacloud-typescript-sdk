// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. Only a single category ID can be specified. You can obtain the category ID by using the following methods:
   * - Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com) and choose **Configuration Management** > **Media Asset Management Configuration** > **Category Management** > **Audio/Video/Image Category** or **Short Video Material Category** to view the category ID.
   * - Obtain the category ID from the response of the [AddCategory](~~AddCategory~~) operation when you create a category.
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

