// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject extends $dara.Model {
  /**
   * @remarks
   * The column name.
   * 
   * @example
   * id
   */
  column?: string;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * tdb1
   */
  database?: string;
  /**
   * @remarks
   * Description of the permission object.
   * 
   * @example
   * id of table
   */
  description?: string;
  /**
   * @remarks
   * The table name.
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
   * The permission object, represented as a trituple of database, table, and column. All fields are empty for Global-level permissions.
   */
  privilegeObject?: DescribeAccountAllPrivilegesResponseBodyDataResultPrivilegeObject;
  /**
   * @remarks
   * The permission level, returned by the `DescribeEnabledPrivileges` operation.
   * 
   * @example
   * Global
   */
  privilegeType?: string;
  /**
   * @remarks
   * List of permissions.
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
   * If the `Truncated` field in the response is `true`, pass this value in subsequent calls to retrieve the next set of results.
   * 
   * @example
   * 0573e74fd1ccb01739993a691e876074db6e1b6ad79f54115f0e98528432ba6a523cfec5780ade5189299cc3396f6ff7
   */
  marker?: string;
  /**
   * @remarks
   * List of permissions.
   */
  result?: DescribeAccountAllPrivilegesResponseBodyDataResult[];
  /**
   * @remarks
   * If the response is truncated, this field is `true`. Continue calling this operation until this field becomes `false`.
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
   * Permission details.
   */
  data?: DescribeAccountAllPrivilegesResponseBodyData;
  /**
   * @remarks
   * The request ID.
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

