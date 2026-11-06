// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManagedAgentsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 0 to 100. If this parameter is omitted or set to 0, the default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token. Leave this parameter empty for the first call. For subsequent calls, use the `nextToken` value returned in the previous response.
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

