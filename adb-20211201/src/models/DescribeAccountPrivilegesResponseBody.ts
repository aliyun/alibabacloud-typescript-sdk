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
   * The privilege object, which is a triplet of database, table, and column, along with additional description information.
   */
  privilegeObject?: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject;
  /**
   * @remarks
   * The privilege level, which can be Global, Databae, Table, or Column. This value is returned by the DescribeEnabledPrivileges operation.
   * 
   * @example
   * Column
   */
  privilegeType?: string;
  /**
   * @remarks
   * The list of permissions.
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
   * The list of permission details.
   */
  data?: DescribeAccountPrivilegesResponseBodyData[];
  /**
   * @remarks
   * The page number, which is the same as the page number in the request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page, which is the same as the page size in the request.
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
   * The total number of permissions that the user has at the privilege level.
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

