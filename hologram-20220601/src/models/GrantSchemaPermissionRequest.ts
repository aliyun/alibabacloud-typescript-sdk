// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrantSchemaPermissionRequest extends $dara.Model {
  /**
   * @remarks
   * The database name.
   * 
   * @example
   * db_demo
   */
  databaseName?: string;
  /**
   * @remarks
   * The list of permissions.
   */
  privileges?: string[];
  /**
   * @remarks
   * The schema name.
   * 
   * @example
   * my_schema
   */
  schemaName?: string;
  /**
   * @remarks
   * The user ID. For more information, see [Hologres account overview](https://help.aliyun.com/document_detail/130393.html).
   * 
   * @example
   * p4_134xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'databaseName',
      privileges: 'privileges',
      schemaName: 'schemaName',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
      schemaName: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.privileges)) {
      $dara.Model.validateArray(this.privileges);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

