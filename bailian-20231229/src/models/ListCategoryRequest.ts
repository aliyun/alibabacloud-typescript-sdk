// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * Performs an exact match or filter on the category list returned by the operation based on the category name. Default value: empty, which means category name filtering is not enabled.
   * 
   * @example
   * ProductList
   */
  categoryName?: string;
  /**
   * @remarks
   * The type of category to query. Valid values:
   * - UNSTRUCTURED: category.
   * 
   * <props="china">
   * 
   * > Querying tables (data tables) by using API operations is not supported.
   * >
   * 
   * 
   * <props="intl">
   * 
   * > Querying structured data tables by using API operations is not supported.
   * >
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The connector ID.
   * 
   * @example
   * file_conn_xxxxx
   */
  connectorId?: string;
  /**
   * @remarks
   * The number of categories per page in a paged query. Maximum value: 200. Valid values: 1 to 200.
   * 
   * Default value:
   * If the value is not set or is less than 1, the default value is 20. If the value is greater than 200, the default value is 200.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Set this parameter to the NextToken value returned in the previous API call.
   * 
   * @example
   * AAAAAdH70eOCSCKtacdomNzak4U=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent category for the categories to query.
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      parentCategoryId: 'ParentCategoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      categoryType: 'string',
      connectorId: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

