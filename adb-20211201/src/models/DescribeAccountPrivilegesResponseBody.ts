// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountPrivilegesResponseBodyDataPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db1
   */
  database?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * a test column
   */
  description?: string;
  /**
   * @remarks
   * The table name.
   * 
   * @example
   * tabl1
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

export class DescribeAccountPrivilegesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The privilege object, which specifies the database, table, column, and description.
   */
  privilegeObject?: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject;
  /**
   * @remarks
   * The privilege level. Valid values: `Global`, `Database`, `Table`, and `Column`. The `DescribeEnabledPrivileges` API returns this value.
   * 
   * @example
   * Column
   */
  privilegeType?: string;
  /**
   * @remarks
   * A list of privileges.
   */
  privileges?: string[];
  static names(): { [key: string]: string } {
    return {
      privilegeObject: 'PrivilegeObject',
      privilegeType: 'PrivilegeType',
      privileges: 'Privileges',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privilegeObject: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject,
      privilegeType: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(this.privilegeObject && typeof (this.privilegeObject as any).validate === 'function') {
      (this.privilegeObject as any).validate();
    }
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountPrivilegesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of privilege details.
   */
  data?: DescribeAccountPrivilegesResponseBodyData[];
  /**
   * @remarks
   * The page number. This value matches the `PageNumber` input parameter.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. This value matches the `PageSize` input parameter.
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
   * DA32480A-E3E5-1BE7-BA98-724551DC04C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total count of privileges at the specified privilege level.
   * 
   * @example
   * 100
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
      data: { 'type': 'array', 'itemType': DescribeAccountPrivilegesResponseBodyData },
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

