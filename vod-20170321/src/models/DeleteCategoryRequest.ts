// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the category. You can specify only one ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [ApsaraVideo VOD console](https://vod.console.aliyun.com). Choose **Configuration Management** > **Media Management** > **Categories**. On the Audio and Video / Image Category or Short Video Material Category tab, view the category ID.
   * *   Obtain the category ID from the response to the [AddCategory](~~AddCategory~~) operation.
   * 
   * >  If you specify the ID of a parent category, all subcategories under the parent category are deleted at the same time.
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

