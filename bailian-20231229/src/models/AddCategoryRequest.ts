// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The category name. The name must be 1 to 20 characters in length and can contain characters in the Unicode letter category, including letters, Chinese characters, and digits. The name can also contain colons (:), underscores (_), periods (.), or hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * ProductList
   */
  categoryName?: string;
  /**
   * @remarks
   * The category type. Valid values:
   * - UNSTRUCTURED: category.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The instance ID of the data connector (Connector). Obtain this value from the Model Studio console.
   * 
   * @example
   * conn_xxxx
   */
  connectorId?: string;
  /**
   * @remarks
   * The ID of the parent category. The new category is created under this parent category. If this parameter is left empty, a first-level category is created.
   * 
   * @example
   * cate_cdd11b1b79a74e8bbd675c356a91ee3xxxxxxxx
   */
  parentCategoryId?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      categoryType: 'CategoryType',
      connectorId: 'ConnectorId',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      categoryType: 'string',
      connectorId: 'string',
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

