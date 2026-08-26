// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Default value: 20. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first request. For subsequent requests, use the nextToken value returned in the previous response.
   * 
   * @example
   * next-token-1
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

