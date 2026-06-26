// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIcebergTableDetailsRequest extends $dara.Model {
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
   * The token to retrieve the next page of results. If this parameter is not returned in the response, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The pattern to filter table names.
   * 
   * @example
   * table%
   */
  tableNamePattern?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      tableNamePattern: 'tableNamePattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      tableNamePattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

