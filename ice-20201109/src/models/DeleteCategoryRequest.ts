// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using the following methods:
   * - Log on to the [IMS console](https://ims.console.aliyun.com), and choose **Media Asset Management** > **Category Management** to view the category ID.
   * - When you create a category by calling the create category operation, the category ID is the value of CateId in the response.
   * - When you query a category by calling the get category operation, the category ID is the value of CateId in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 46
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

