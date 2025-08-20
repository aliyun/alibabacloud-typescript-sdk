// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The name of the column.
   * 
   * @example
   * id
   */
  column?: string;
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * tdb1
   */
  database?: string;
  /**
   * @remarks
   * The description of the permission object.
   * 
   * @example
   * id of table
   */
  description?: string;
  /**
   * @remarks
   * The name of the table.
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

export class DescribeAccountAllPrivilegesResponseBodyDataResult extends $dara.Model {
  /**
   * @remarks
   * The objects on which the permission takes effect, including databases, tables, and columns. If Global is returned for the PrivilegeType parameter, an empty string is returned for this parameter.
   */
  privilegeObject?: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject;
  /**
   * @remarks
   * The permission level of the database account. You can call the `DescribeEnabledPrivileges` operation to query the permission level of the database account.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * The name of the permission, which is the same as the permission name returned by the `DescribeEnabledPrivileges` operation.
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
      privilegeObject: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject,
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

export class DescribeAccountAllPrivilegesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates the position where the results are truncated. When a value of `true` is returned for the `Truncated` parameter, this parameter is present and contains the value to use for the Marker parameter in a subsequent call.
   * 
   * @example
   * 0573e74fd1ccb01739993a691e876074db6e1b6ad79f54115f0e98528432ba6a523cfec5780ade5189299cc3396f6ff7
   */
  marker?: string;
  /**
   * @remarks
   * The permissions.
   */
  result?: DescribeAccountAllPrivilegesResponseBodyDataResult[];
  /**
   * @remarks
   * Indicates whether the results are truncated. If the results are truncated, a value of `true` is returned. In this case, you must call this operation again to obtain all the results until a value of `false` is returned for this parameter.
   * 
   * @example
   * true
   */
  truncated?: boolean;
  static names(): { [key: string]: string } {
    return {
      marker: 'Marker',
      result: 'Result',
      truncated: 'Truncated',
    };
  }

  static types(): { [key: string]: any } {
    return {
      marker: 'string',
      result: { 'type': 'array', 'itemType': DescribeAccountAllPrivilegesResponseBodyDataResult },
      truncated: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAccountAllPrivilegesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the permissions.
   */
  data?: DescribeAccountAllPrivilegesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BB185E9-BB54-1727-B876-13243E4C0EB5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAccountAllPrivilegesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

