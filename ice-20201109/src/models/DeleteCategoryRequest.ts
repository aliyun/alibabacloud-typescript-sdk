// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID. You can use one of the following methods to obtain the ID:
   * 
   * *   Log on to the [Intelligent Media Services (IMS) console](https://ims.console.aliyun.com) and choose **Media Asset Management** > **Category Management** to view the category ID.
   * *   View the value of CateId returned by the AddCategory operation that you called to create a category.
   * *   View the value of CateId returned by the GetCategories operation that you called to query a category.
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

