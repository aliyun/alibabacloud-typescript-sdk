// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionsRequest extends $dara.Model {
  /**
   * @remarks
   * A pattern to filter function names.
   * 
   * @example
   * function%
   */
  functionNamePattern?: string;
  /**
   * @remarks
   * The maximum number of records to return in the response.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. Use this token to retrieve the next page of results. Pass an empty string ("") if this parameter is not returned in the response.
   * 
   * @example
   * ""
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      functionNamePattern: 'functionNamePattern',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionNamePattern: 'string',
      maxResults: 'number',
      pageToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

