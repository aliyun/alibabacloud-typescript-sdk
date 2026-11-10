// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTerraformProviderVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The keyword for searching versions. Fuzzy match is supported.
   * 
   * @example
   * key
   */
  keyword?: string;
  /**
   * @remarks
   * The maximum number of records to return per request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page. A null value indicates that there are no more pages.
   * 
   * @example
   * ar9lHbaidqWequN5orMba54dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The purpose. Used to retrieve metadata for display in Explorer.
   * 
   * @example
   * Explorer
   */
  usage?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      usage: 'usage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
      usage: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

