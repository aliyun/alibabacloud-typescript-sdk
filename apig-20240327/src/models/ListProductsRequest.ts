// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The product category IDs, which correspond to the Categories property of the API product resource. The members are category IDs.
   * 
   * @example
   * category-xxxxxxxx
   */
  categoryIds?: string;
  /**
   * @remarks
   * The maximum number of entries to return per request.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the API product, which corresponds to the Name property of the API product resource. This is the same field as name in the response list items.
   * 
   * @example
   * weather-query-api
   */
  name?: string;
  /**
   * @remarks
   * The pagination token for the next page.
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
   * The ID of the HiMarket developer portal where the API product is published, which corresponds to the PortalId property of the API product resource. This property is used only for list queries in the product resource definition.
   * 
   * @example
   * portal-xxxxxxxx
   */
  portalId?: string;
  /**
   * @remarks
   * The status of the API product, which corresponds to the Status property of the API product resource. This is the same field as status in the response list items. Valid values: Pending, Ready, and Published.
   * 
   * @example
   * Published
   */
  status?: string;
  /**
   * @remarks
   * The type of the API product, which corresponds to the Type property of the API product resource. This is the same field as type in the response list items. The valid values are not declared in the API definition. Refer to the types displayed in the console.
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

