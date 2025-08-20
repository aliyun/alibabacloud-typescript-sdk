// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountPrivilegesResponseBodyDataPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * column1
   */
  column?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * db1
   */
  database?: string;
  /**
   * @remarks
   * The description of the permission object.
   * 
   * @example
   * a test column
   */
  description?: string;
  /**
   * @remarks
   * The name of the table.
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
   * The objects on which the permission takes effect, including databases, tables, columns, and additional descriptions.
   */
  privilegeObject?: DescribeAccountPrivilegesResponseBodyDataPrivilegeObject;
  /**
   * @remarks
   * The permission level of the permission. Valid values: `Global`, `Database`, `Table`, and `Column`. You can call the `DescribeEnabledPrivileges` parameter to query the permission level of a specific permission.
   * 
   * @example
   * Column
   */
  privilegeType?: string;
  /**
   * @remarks
   * The name of the permission. You can call the `DescribeEnabledPrivileges` operation to query the name of the permission.
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
   * Details of the permissions.
   */
  data?: DescribeAccountPrivilegesResponseBodyData[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DA32480A-E3E5-1BE7-BA98-724551DC04C8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

