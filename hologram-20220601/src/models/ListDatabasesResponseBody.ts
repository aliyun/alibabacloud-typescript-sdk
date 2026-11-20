// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatabasesResponseBodyDatabaseList extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the table is a foreign table. Valid values: true: yes, false: no.
   * 
   * @example
   * false
   */
  external?: boolean;
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * my_db
   */
  name?: string;
  /**
   * @remarks
   * The permission model. For more information, see [Hologres permission models](https://help.aliyun.com/document_detail/198734.html).
   * 
   * @example
   * SPM
   */
  permissionModel?: string;
  /**
   * @remarks
   * The permissions.
   * 
   * @example
   * developer
   */
  privilege?: string;
  static names(): { [key: string]: string } {
    return {
      external: 'External',
      name: 'Name',
      permissionModel: 'PermissionModel',
      privilege: 'Privilege',
    };
  }

  static types(): { [key: string]: any } {
    return {
      external: 'boolean',
      name: 'string',
      permissionModel: 'string',
      privilege: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatabasesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of databases.
   */
  databaseList?: ListDatabasesResponseBodyDatabaseList[];
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * null
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * null
   */
  errorMessage?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0C4935F5-6217-569A-902F-931B2F3E28BA
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      databaseList: 'DatabaseList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseList: { 'type': 'array', 'itemType': ListDatabasesResponseBodyDatabaseList },
      errorCode: 'string',
      errorMessage: 'string',
      httpStatusCode: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.databaseList)) {
      $dara.Model.validateArray(this.databaseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

