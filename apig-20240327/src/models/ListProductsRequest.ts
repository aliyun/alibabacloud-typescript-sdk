// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The product category IDs. This corresponds to the Categories property of the Product resource, where the members are category IDs.
   * 
   * @example
   * category-xxxxxxxx
   */
  categoryIds?: string;
  /**
   * @remarks
   * The maximum number of entries returned per request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the API product. This corresponds to the Name property of the Product resource and matches the name field in the response list.
   * 
   * @example
   * weather-query-api
   */
  name?: string;
  /**
   * @remarks
   * The cursor token for querying the next page.
   * 
   * @example
   * next-token-xxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the HiMarket developer portal where the API product is published. This corresponds to the PortalId property of the Product resource. This property is used only for list queries in the product resource definition.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The status of the API product. This corresponds to the Status property of the Product resource and matches the status field in the response list. Valid values: Pending, Ready, Published.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The type of the API product. This corresponds to the Type property of the Product resource and matches the type field in the response list. The valid values are not declared in the API definition. Refer to the types displayed in the console.
   * 
   * @example
   * API
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      categoryIds: 'categoryIds',
      maxResults: 'maxResults',
      name: 'name',
      nextToken: 'nextToken',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      portalId: 'portalId',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryIds: 'string',
      maxResults: 'number',
      name: 'string',
      nextToken: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      portalId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

