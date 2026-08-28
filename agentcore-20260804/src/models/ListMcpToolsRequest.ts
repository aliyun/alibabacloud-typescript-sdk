// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpToolsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of results to return per request. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 6
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * 2
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

