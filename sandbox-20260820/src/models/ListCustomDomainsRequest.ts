// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomDomainsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to return per page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page, used for subsequent queries.
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

