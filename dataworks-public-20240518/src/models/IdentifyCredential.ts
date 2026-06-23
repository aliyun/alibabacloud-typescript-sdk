// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdentifyCredentialDataSource extends $dara.Model {
  /**
   * @remarks
   * The data source instance ID.
   * 
   * @example
   * 710007423244
   */
  instanceId?: string;
  /**
   * @remarks
   * The data source instance name.
   * 
   * @example
   * rm-2zez82ho69yex7s7g
   */
  instanceName?: string;
  /**
   * @remarks
   * The data source password.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The user role for the data source. Valid values are:
   * 
   * - `Admin`
   * 
   * - `RegularUser`
   * 
   * @example
   * admin
   */
  role?: string;
  /**
   * @remarks
   * The data source type. Supported values are:
   * 
   * - `hive`
   * 
   * - `lindorm_for_engine`
   * 
   * - `starrocks`
   * 
   * @example
   * hologres
   */
  type?: string;
  /**
   * @remarks
   * The data source user name.
   * 
   * @example
   * tom
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      password: 'Password',
      role: 'Role',
      type: 'Type',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      instanceName: 'string',
      password: 'string',
      role: 'string',
      type: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IdentifyCredential extends $dara.Model {
  /**
   * @remarks
   * The data source.
   */
  dataSource?: IdentifyCredentialDataSource;
  /**
   * @remarks
   * The project ID. This parameter is optional.
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The user UID. If the `UserType` is `Role`, you must prefix this value with `ROLE_`.
   * 
   * @example
   * ROLE_300888674340307309
   */
  userId?: string;
  /**
   * @remarks
   * The user type. Supported values are:
   * 
   * - primary account: `PrimaryAccount`
   * 
   * - subaccount: `SubAccount`
   * 
   * - role: `Role`
   * 
   * @example
   * primaryAccount
   */
  userType?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      projectId: 'ProjectId',
      userId: 'UserId',
      userType: 'UserType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: IdentifyCredentialDataSource,
      projectId: 'string',
      userId: 'string',
      userType: 'string',
    };
  }

  validate() {
    if(this.dataSource && typeof (this.dataSource as any).validate === 'function') {
      (this.dataSource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

