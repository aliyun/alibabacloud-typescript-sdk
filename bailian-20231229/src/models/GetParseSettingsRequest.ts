// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetParseSettingsRequest extends $dara.Model {
  /**
   * @remarks
   * The category ID, which is the `CategoryId` returned by the **AddCategory** operation. You can also obtain it from the <props="china">[Application Data](https://bailian.console.aliyun.com/?tab=app#/data-center) - File tab<props="intl">[Application Data](https://bailian.console.alibabacloud.com/?tab=app#/data-center) - Unstructured Data tab by clicking the ID icon next to the category name.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee35xxxxxxxx
   */
  categoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

