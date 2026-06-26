// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The database name pattern for fuzzy matching. Supports the percent sign (%).
   * 
   * @example
   * database%
   */
  databaseNamePattern?: string;
  /**
   * @remarks
   * The number of entries to return on each page.
   * Default value: 1000.
   * Maximum value: 1000.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. If the response does not include this token, pass an empty string ("").
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

