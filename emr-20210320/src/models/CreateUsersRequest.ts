// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateUsersRequestUsers extends $dara.Model {
  /**
   * @remarks
   * 用户密码。
   * 
   * This parameter is required.
   * 
   * @example
   * *Ab123
   */
  password?: string;
  /**
   * @remarks
   * 用户名。
   * 
   * This parameter is required.
   * 
   * @example
   * xi
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'Password',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
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

export class CreateUsersRequest extends $dara.Model {
  /**
   * @remarks
   * 集群ID。
   * 
   * This parameter is required.
   * 
   * @example
   * c-b933c5aac8fe****
   */
  clusterId?: string;
  /**
   * @remarks
   * 区域ID。
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * 用户列表。
   * 
   * This parameter is required.
   */
  users?: CreateUsersRequestUsers[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      regionId: 'RegionId',
      users: 'Users',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      regionId: 'string',
      users: { 'type': 'array', 'itemType': CreateUsersRequestUsers },
    };
  }

  validate() {
    if(Array.isArray(this.users)) {
      $dara.Model.validateArray(this.users);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

