// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabaseDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The SQL-style right fuzzy match pattern for database names. The percent sign (%) wildcard is supported.
   * 
   * @example
   * database%
   */
  databaseNamePattern?: string;
  /**
   * @remarks
   * The page size.
   * 
   * Default value: 1000.
   * 
   * Maximum value: 1000.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of results. If the response does not include this token, pass an empty string ("") or an empty character (\\"\\").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      databaseNamePattern: 'databaseNamePattern',
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseNamePattern: 'string',
      maxResults: 'number',
      pageToken: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

