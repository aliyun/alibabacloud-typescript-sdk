// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTableDetailsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of records to retrieve in a single request.
   * 
   * @example
   * 1000
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token used to retrieve the next page of data. If the response does not provide this value, pass an empty string ("") or an empty character (\\"\\").
   * 
   * @example
   * ""
   */
  pageToken?: string;
  /**
   * @remarks
   * The deletion status of the table. Valid values:
   * - retained: The table is deleted and temporarily stored in the recycle bin.
   * - active: The table is in a normal state. This is the default value.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The fuzzy match pattern for the table name.
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
      status: 'status',
      tableNamePattern: 'tableNamePattern',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      pageToken: 'string',
      status: 'string',
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

