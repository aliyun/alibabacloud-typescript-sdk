// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateUserRequestGroupInfoList } from "./CreateUserRequestGroupInfoList";


export class CreateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * If you specify the parameter in the HTTP URL format, the URL must start with http:// or https:// and can be up to 4 KB in size.
   * 
   * If you specify the parameter in the data URL format, the URL must start with data:// and be encoded in Base64. The URL can be up to 300 KB in size.
   * 
   * @example
   * http://a.b.c/pds.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The description of the user. The description can be up to 1,024 characters in length.
   * 
   * @example
   * The VIP user
   */
  description?: string;
  /**
   * @remarks
   * The email address.
   * 
   * @example
   * 123@pds.com
   */
  email?: string;
  /**
   * @remarks
   * The information about the group.
   */
  groupInfoList?: CreateUserRequestGroupInfoList[];
  /**
   * @remarks
   * The nickname of the user. The nickname can be up to 128 characters in length.
   * 
   * @example
   * pdsuer
   */
  nickName?: string;
  /**
   * @remarks
   * The phone number.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Default value: user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * If the domain can be divided into subdomains, the subdomain_super_admin and subdomain_admin roles are also supported.
   * 
   * Valid values:
   * 
   * *   subdomain_super_admin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   subdomain_admin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   superadmin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   admin
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   user
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Default value: enabled. Valid values:
   * 
   * *   enabled: The user is in a normal state.
   * *   disabled: The user is prohibited from logon.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The custom data. The data can be up to 1,024 characters in length.
   * 
   * @example
   * md
   */
  userData?: { [key: string]: any };
  /**
   * @remarks
   * The user ID. The ID can be up to 64 characters in length and cannot contain number signs (#).
   * 
   * This parameter is required.
   * 
   * @example
   * pdsuserid1
   */
  userId?: string;
  /**
   * @remarks
   * The username. The username can be up to 128 characters in length.
   * 
   * @example
   * pdsusername
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      avatar: 'avatar',
      description: 'description',
      email: 'email',
      groupInfoList: 'group_info_list',
      nickName: 'nick_name',
      phone: 'phone',
      role: 'role',
      status: 'status',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      email: 'string',
      groupInfoList: { 'type': 'array', 'itemType': CreateUserRequestGroupInfoList },
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupInfoList)) {
      $dara.Model.validateArray(this.groupInfoList);
    }
    if(this.userData) {
      $dara.Model.validateMap(this.userData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

