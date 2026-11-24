// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountPrivilegeObjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The column name. This field is returned when the privilege level is Column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The database name. This field is returned when the privilege level is Database, Table, or Column.
   * 
   * @example
   * tdb1
   */
  database?: string;
  /**
   * @remarks
   * The description specified when the table or column is created. This field has a value only when the privilege level is Database or Table, representing the description of the database or table, respectively.
   * 
   * @example
   * a test db
   */
  description?: string;
  /**
   * @remarks
   * The table name. This field is returned when the privilege level is Table or Column.
   * 
   * @example
   * table1
   */
  table?: string;
  static names(): { [key: string]: string } {
    return {
      column: 'Column',
      database: 'Database',
      description: 'Description',
      table: 'Table',
    };
  }

  static types(): { [key: string]: any } {
    return {
      column: 'string',
      database: 'string',
      description: 'string',
      table: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegeObjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of privileges.
   */
  data?: DescribeAccountPrivilegeObjectsResponseBodyData[];
  /**
   * @remarks
   * The page number, which is the same as the value passed in the request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size, which is the same as the value passed in the request.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 34B2AD29-682F-1C14-B3AA-9EF1A96084B8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeAccountPrivilegeObjectsResponseBodyData },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

