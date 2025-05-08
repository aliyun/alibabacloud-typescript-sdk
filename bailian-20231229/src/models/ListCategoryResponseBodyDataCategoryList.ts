// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryResponseBodyDataCategoryList extends $dara.Model {
  /**
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  categoryId?: string;
  categoryName?: string;
  /**
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @example
   * cate_addd11b1b79a74e8bbd675c356a91ee3XXXXXXXX
   */
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      categoryName: 'CategoryName',
      categoryType: 'CategoryType',
      isDefault: 'IsDefault',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      categoryName: 'string',
      categoryType: 'string',
      isDefault: 'boolean',
      parentCategoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

