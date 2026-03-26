// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdentifyCredentialDataSource extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the data source.
   * 
   * @example
   * 710007423244
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance name of the data source.
   * 
   * @example
   * rm-2zez82ho69yex7s7g
   */
  instanceName?: string;
  /**
   * @remarks
   * The password for the data source.
   * 
   * @example
   * ***
   */
  password?: string;
  /**
   * @remarks
   * The user type of the data source.
   * 
   * *   Admin
   * *   RegularUser
   * 
   * Valid values:
   * 
   * *   RegularUser: Normal user.
   * *   Admin: Administrator.
   * 
   * @example
   * admin
   */
  role?: string;
  /**
   * @remarks
   * The type of the data source. Supported types:
   * 
   * *   hive
   * *   lindorm_for_engine
   * *   starrocks
   * 
   * @example
   * hologres
   */
  type?: string;
  /**
   * @remarks
   * The username for the data source.
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
   * The workspace ID (optional).
   * 
   * @example
   * 10000
   */
  projectId?: string;
  /**
   * @remarks
   * The user ID. If it is a role, the ROLE_ prefix must be added.
   * 
   * @example
   * ROLE_300888674340307309
   */
  userId?: string;
  /**
   * @remarks
   * *   Alibaba Cloud account
   * *   RAM user
   * *   Role
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

