// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportedProductsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return in a request.
   * 
   * Valid values: 1 to 500. Default value: 200.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of NextToken.
   * 
   * @example
   * D3AjqMNSy0ls7zBNCf3a****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

