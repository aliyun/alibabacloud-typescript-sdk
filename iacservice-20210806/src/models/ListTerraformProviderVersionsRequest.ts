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
   * The maximum number of records to retrieve in a single request.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. A value of null indicates that no more pages are available.
   * 
   * @example
   * ar9lHbaidqWequN5orMba54dD+2BRJj42DLT6GrZysw=
   */
  nextToken?: string;
  /**
   * @remarks
   * The usage. Set to Explorer to retrieve meta information.
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

