// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWarmPoolsRequest extends $dara.Model {
  /**
   * @remarks
   * The actual maximum number of results returned per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. An empty value indicates that no more results are available.
   * 
   * @example
   * example-token
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
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

