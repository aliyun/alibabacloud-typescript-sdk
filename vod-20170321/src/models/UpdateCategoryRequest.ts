// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category. You can specify only one ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). Choose **Configuration Management** > **Media Management** > **Categories**. On the **Audio and Video / Image Category** or **Short Video Material Category** tab, view the category ID.
   * *   Obtain the category ID from the response to the [AddCategory](~~AddCategory~~) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10020****
   */
  cateId?: number;
  /**
   * @remarks
   * The name of the category.
   * 
   * *   The value can be up to 64 bytes in length.
   * *   The value must be encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * beauty
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

