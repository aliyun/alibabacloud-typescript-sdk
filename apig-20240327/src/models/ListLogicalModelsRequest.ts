// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicalModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-xxxxxxxx
   */
  gatewayId?: string;
  /**
   * @remarks
   * The keyword used to filter logical models.
   * 
   * @example
   * chat
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. This parameter is required. This operation uses token-based pagination with maxResults and nextToken instead of pageNumber and pageSize.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from the previous request. Do not specify this parameter for the first request. This token is not returned in the response for the last page.
   * 
   * @example
   * next-token-xxxxxxxx
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

