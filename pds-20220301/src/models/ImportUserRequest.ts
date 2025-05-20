// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportUserRequest extends $dara.Model {
  /**
   * @remarks
   * The display name of the authentication type.
   * 
   * @example
   * 10000
   */
  authenticationDisplayName?: string;
  /**
   * @remarks
   * The authentication type. Valid values:
   * 
   * *   mobile: mobile number.
   * *   email: email address.
   * *   ding: DingTalk account.
   * *   ram: Alibaba Cloud Resource Access Management (RAM) user.
   * *   wechat: WeCom account.
   * *   ldap: Lightweight Directory Access Protocol (LDAP) account.
   * *   custom: custom account.
   * 
   * This parameter is required.
   * 
   * @example
   * mobile
   */
  authenticationType?: string;
  /**
   * @remarks
   * Specifies whether to automatically create a drive.
   * 
   * @example
   * false
   */
  autoCreateDrive?: boolean;
  /**
   * @remarks
   * The size of the drive. The value cannot be smaller than -1. A value of -1 specifies that the size is unlimited.
   * 
   * @example
   * 10240
   */
  driveTotalSize?: number;
  /**
   * @remarks
   * The additional information.
   * 
   * If authentication_type is set to mobile, set this parameter to a country code. If you do not specify this parameter, 86 is used by default.
   * 
   * @example
   * 1
   */
  extra?: string;
  /**
   * @remarks
   * The unique identifier.
   * 
   * This parameter is required.
   * 
   * @example
   * 130****
   */
  identity?: string;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * pdsuer
   */
  nickName?: string;
  /**
   * @remarks
   * The ID of the group to which the user is added.
   * 
   * @example
   * g12
   */
  parentGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationDisplayName: 'authentication_display_name',
      authenticationType: 'authentication_type',
      autoCreateDrive: 'auto_create_drive',
      driveTotalSize: 'drive_total_size',
      extra: 'extra',
      identity: 'identity',
      nickName: 'nick_name',
      parentGroupId: 'parent_group_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationDisplayName: 'string',
      authenticationType: 'string',
      autoCreateDrive: 'boolean',
      driveTotalSize: 'number',
      extra: 'string',
      identity: 'string',
      nickName: 'string',
      parentGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

