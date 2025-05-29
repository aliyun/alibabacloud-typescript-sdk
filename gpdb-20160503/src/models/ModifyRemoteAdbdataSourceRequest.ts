// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyRemoteADBDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Service ID
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSourceId?: string;
  /**
   * @remarks
   * Specified dataSourceName.
   * 
   * @example
   * test
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The ID of the local data instance being used.
   * 
   * This parameter is required.
   * 
   * @example
   * gp-test
   */
  localDBInstanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * New user name.
   * 
   * This parameter is required.
   * 
   * @example
   * newUserName
   */
  userName?: string;
  /**
   * @remarks
   * New user password, which must be transmitted in encrypted form.
   * 
   * This parameter is required.
   * 
   * @example
   * newUserPassword
   */
  userPassword?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceId: 'DataSourceId',
      dataSourceName: 'DataSourceName',
      localDBInstanceId: 'LocalDBInstanceId',
      ownerId: 'OwnerId',
      userName: 'UserName',
      userPassword: 'UserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceId: 'string',
      dataSourceName: 'string',
      localDBInstanceId: 'string',
      ownerId: 'number',
      userName: 'string',
      userPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

