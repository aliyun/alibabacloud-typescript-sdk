// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogicalModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the gateway instance. Specifies the gateway instance whose logical models you want to query.
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
   * The maximum number of entries to return per page. Valid values: 1 to 100. This parameter is required. This operation uses token-based pagination with maxResults and nextToken, and does not use pageNumber or pageSize.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The nextToken value returned in the response of the previous page. Do not specify this parameter for the first page. The nextToken value is not returned for the last page.
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

