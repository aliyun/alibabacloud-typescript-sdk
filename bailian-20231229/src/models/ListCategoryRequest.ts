// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCategoryRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results to include only the category with this exact name. If this parameter is omitted, no filtering is applied.
   * 
   * @example
   * 产品清单
   */
  categoryName?: string;
  /**
   * @remarks
   * The type of category to query. Valid value:
   * 
   * - `UNSTRUCTURED`: A category for unstructured data.
   * 
   * <props="china">
   * 
   * > This API does not support querying structured data tables.
   * 
   * 
   * 
   * <props="intl">
   * 
   * > This API does not support querying structured data tables.
   * 
   * This parameter is required.
   * 
   * @example
   * UNSTRUCTURED
   */
  categoryType?: string;
  /**
   * @remarks
   * The ID of the connector.
   * 
   * @example
   * file_conn_xxxxx
   */
  connectorId?: string;
  /**
   * @remarks
   * The maximum number of categories to return per page. The valid range is 1 to 200.
   * 
   * Default value: 20. If this parameter is not specified or is set to a value less than 1, the default value is used. If a value greater than 200 is specified, the maximum value of 200 is used.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. To retrieve the next page of results, pass the `NextToken` value from the previous response.
   * 
   * @example
   * AAAAAdH70eOCSCKtacdomNzak4U=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the parent category.
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

