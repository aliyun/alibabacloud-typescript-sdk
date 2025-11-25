// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IdentifyCredentialDataSource extends $dara.Model {
  instanceId?: string;
  instanceName?: string;
  password?: string;
  role?: string;
  type?: string;
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
  dataSource?: IdentifyCredentialDataSource;
  projectId?: string;
  userId?: string;
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

