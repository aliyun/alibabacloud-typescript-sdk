// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAiModelSourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the AI gateway instance to which the resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The query keyword used to match resources by name or identifier.
   * 
   * @example
   * beta
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of results per page. Valid values: 1 to 100. This parameter is required. Token-based pagination does not use pageNumber or pageSize.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from the previous page. Omit this parameter for the first page. For the last page, this parameter is empty or omitted.
   * 
   * @example
   * eyJvZmZzZXQiOjIwfQ==
   */
  nextToken?: string;
  /**
   * @remarks
   * The stable identifier of the model provider.
   * 
   * @example
   * qwen
   */
  provider?: string;
  static names(): { [key: string]: string } {
    return {
      gatewayId: 'gatewayId',
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      provider: 'provider',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gatewayId: 'string',
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      provider: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

