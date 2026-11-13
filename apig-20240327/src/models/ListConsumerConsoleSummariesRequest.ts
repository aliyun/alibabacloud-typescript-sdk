// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConsumerConsoleSummariesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition. Valid values: all, granted, and disabled. If this parameter is omitted, all is used.
   * 
   * @example
   * all
   */
  filter?: string;
  /**
   * @remarks
   * The target AI gateway instance ID. Consumer identities are shared across the region, and authorizations are isolated by instance.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-123456
   */
  gatewayId?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. This parameter is required. Token-based pagination is used instead of pageNumber and pageSize.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The fuzzy search keyword for the consumer name. This parameter does not change the total counts.
   * 
   * @example
   * beta
   */
  nameLike?: string;
  /**
   * @remarks
   * The pagination token returned from the previous page. Omit this parameter for the first page. For the last page, this value is empty or omitted.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      gatewayId: 'gatewayId',
      maxResults: 'maxResults',
      nameLike: 'nameLike',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      gatewayId: 'string',
      maxResults: 'number',
      nameLike: 'string',
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

