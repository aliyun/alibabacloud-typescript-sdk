// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSandboxSessionsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records per page. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for querying the next page.
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

