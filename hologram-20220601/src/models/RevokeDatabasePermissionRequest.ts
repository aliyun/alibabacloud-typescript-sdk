// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevokeDatabasePermissionRequest extends $dara.Model {
  /**
   * @example
   * test_db
   */
  databaseName?: string;
  privileges?: string[];
  /**
   * @example
   * p4_1234xxxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'databaseName',
      privileges: 'privileges',
      userName: 'userName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      privileges: { 'type': 'array', 'itemType': 'string' },
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

