// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesRequest extends $dara.Model {
  /**
   * @remarks
   * The database name pattern for fuzzy matching.
   * 
   * @example
   * database%
   */
  databaseNamePattern?: string;
  /**
   * @remarks
   * The maximum number of records to return in a single request.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next page of results. If the response does not provide a token, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNamePattern: 'databaseNamePattern',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNamePattern: 'string',
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

