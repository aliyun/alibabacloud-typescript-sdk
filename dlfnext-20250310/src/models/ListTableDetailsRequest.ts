// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableDetailsRequest extends $dara.Model {
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
   * The token to retrieve the next page of results. Pass the token that was returned by the previous request. For the first request, pass an empty string ("").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The pattern used to filter table names.
   * 
   * @example
   * table%
   */
  tableNamePattern?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * table
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      pageToken: 'pageToken',
      tableNamePattern: 'tableNamePattern',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      tableNamePattern: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

