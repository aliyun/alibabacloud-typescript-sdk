// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUsersResponseBodyDataUser extends $dara.Model {
  /**
   * @example
   * 2951869706989****
   */
  aliUid?: string;
  /**
   * @example
   * 2020-03-11T16:54Z
   */
  createTime?: string;
  /**
   * @example
   * XXX
   */
  description?: string;
  /**
   * @example
   * xxx
   */
  displayName?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 2
   */
  loginUserType?: number;
  /**
   * @example
   * AGENT
   */
  roleName?: string;
  /**
   * @example
   * 2020-03-11T16:54Z
   */
  updateTime?: string;
  /**
   * @example
   * xxx
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      aliUid: 'AliUid',
      createTime: 'CreateTime',
      description: 'Description',
      displayName: 'DisplayName',
      id: 'Id',
      loginUserType: 'LoginUserType',
      roleName: 'RoleName',
      updateTime: 'UpdateTime',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliUid: 'string',
      createTime: 'string',
      description: 'string',
      displayName: 'string',
      id: 'number',
      loginUserType: 'number',
      roleName: 'string',
      updateTime: 'string',
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

