// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can obtain the category ID by using the following methods:
   * - Log on to the [IMS console](https://ims.console.aliyun.com), and choose **Media Asset Management** > **Category Management** to view the category ID.
   * - When you create a category by calling the create category operation, the category ID is the value of the CateId response parameter.
   * - When you query a category by calling the get category operation, the category ID is the value of the CateId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 43
   */
  cateId?: number;
  /**
   * @remarks
   * The category name.
   * 
   * This parameter is required.
   * 
   * @example
   * Category 1
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

