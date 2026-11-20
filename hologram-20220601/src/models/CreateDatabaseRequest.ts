// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the database.
   * 
   * @example
   * my_db
   */
  databaseName?: string;
  /**
   * @remarks
   * The permission model. For more information, see [Hologres permission model](https://www.alibabacloud.com/help/en/hologres/security-and-compliance/hologres-permission-model/). Default value: Standard.
   * 
   * @example
   * SPM
   */
  permissionModel?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'databaseName',
      permissionModel: 'permissionModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      permissionModel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

