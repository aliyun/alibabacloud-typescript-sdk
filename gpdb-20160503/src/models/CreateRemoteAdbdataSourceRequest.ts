// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRemoteADBDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Customer-specified DataSourceName.
   * 
   * @example
   * test
   */
  dataSourceName?: string;
  /**
   * @remarks
   * Instance ID of the data being used (required).
   * 
   * This parameter is required.
   * 
   * @example
   * gp-test1
   */
  localDBInstanceId?: string;
  /**
   * @remarks
   * Database name of the data being used (required)
   * 
   * This parameter is required.
   * 
   * @example
   * db1
   */
  localDatabase?: string;
  /**
   * @remarks
   * Management account of the data-using instance.
   * 
   * This parameter is required.
   * 
   * @example
   * managerAccount
   */
  managerUserName?: string;
  /**
   * @remarks
   * Password of the management account of the data-using instance.
   * 
   * This parameter is required.
   * 
   * @example
   * password2
   */
  managerUserPassword?: string;
  ownerId?: number;
  /**
   * @remarks
   * Instance ID providing the data (required).
   * 
   * This parameter is required.
   * 
   * @example
   * gp-test2
   */
  remoteDBInstanceId?: string;
  /**
   * @remarks
   * Database name providing the data (required).
   * 
   * This parameter is required.
   * 
   * @example
   * db2
   */
  remoteDatabase?: string;
  /**
   * @remarks
   * Account name of the data-providing instance used for user mapping (required).
   * 
   * This parameter is required.
   * 
   * @example
   * account1
   */
  userName?: string;
  /**
   * @remarks
   * Password of the data-providing instance account used for user mapping.
   * 
   * This parameter is required.
   * 
   * @example
   * password1
   */
  userPassword?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceName: 'DataSourceName',
      localDBInstanceId: 'LocalDBInstanceId',
      localDatabase: 'LocalDatabase',
      managerUserName: 'ManagerUserName',
      managerUserPassword: 'ManagerUserPassword',
      ownerId: 'OwnerId',
      remoteDBInstanceId: 'RemoteDBInstanceId',
      remoteDatabase: 'RemoteDatabase',
      userName: 'UserName',
      userPassword: 'UserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceName: 'string',
      localDBInstanceId: 'string',
      localDatabase: 'string',
      managerUserName: 'string',
      managerUserPassword: 'string',
      ownerId: 'number',
      remoteDBInstanceId: 'string',
      remoteDatabase: 'string',
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

