// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the category. The name must be 1 to 20 characters long. It can contain Unicode letters, such as English letters and Chinese characters, along with digits, colons (:), underscores (_), periods (.), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * 产品清单
   */
  categoryName?: string;
  /**
   * @remarks
   * The type of the category. Valid value:
   * 
   * - UNSTRUCTURED: A category.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The ID of the connector instance. You can obtain the ID from the Alibaba Cloud Model Studio console.
   * 
   * @example
   * conn_xxxx
   */
  connectorId?: string;
  /**
   * @remarks
   * The ID of the parent category under which the new category is created. If you leave this parameter empty, a top-level category is created.
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

