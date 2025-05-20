// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateUserRequestGroupInfoList } from "./UpdateUserRequestGroupInfoList";


export class UpdateUserRequest extends $dara.Model {
  /**
   * @remarks
   * The URL of the profile picture.
   * 
   * If you specify the parameter in the HTTP URL format, the URL must start with http:// or https:// and can be up to 4 KB in size.
   * 
   * If you specify the parameter in the DATA URL format, the URL must start with data:// and be encoded in Base64. The URL can be up to 300 KB in size.
   * 
   * @example
   * http://a.b.c/pds.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The description of the user. The description can be up to 1,024 characters in length.
   */
  description?: string;
  /**
   * @remarks
   * The email address of the user.
   * 
   * @example
   * a@aliyunpds.com
   */
  email?: string;
  /**
   * @remarks
   * The information about the group.
   */
  groupInfoList?: UpdateUserRequestGroupInfoList[];
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
   * The mobile number of the user.
   * 
   * @example
   * 13900001111
   */
  phone?: string;
  /**
   * @remarks
   * The role of the user. Valid values:
   * 
   * *   superadmin
   * *   admin
   * *   user
   * 
   * @example
   * user
   */
  role?: string;
  /**
   * @remarks
   * The state of the user. Valid values:
   * 
   * *   disabled: The user is prohibited from logon.
   * *   enabled: The user is in a normal state.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The custom data. The data can be up to 1,024 characters in length.
   */
  userData?: { [key: string]: string };
  /**
   * @remarks
   * The user ID. The ID can be up to 64 characters in length and cannot contain a number sign (#).
   * 
   * This parameter is required.
   * 
   * @example
   * c9b7a5aa04d14ae3867fdc886fa01da4
   */
  userId?: string;
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatar: 'string',
      description: 'string',
      email: 'string',
      groupInfoList: { 'type': 'array', 'itemType': UpdateUserRequestGroupInfoList },
      nickName: 'string',
      phone: 'string',
      role: 'string',
      status: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
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

