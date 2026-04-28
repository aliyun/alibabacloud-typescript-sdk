// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { LinkInfo } from "./LinkInfo";


export class Token extends $dara.Model {
  /**
   * @remarks
   * The access token.
   * 
   * @example
   * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjOWI3YTVhYTA0ZDE0YWUzODY3ZmRjODg2ZmEwMWRhNCIsImN1c3RvbUpzb24iOiJ7XCJjbGllbnRJZFwiOlwiMjVkelgzdmJZcWt0Vnh5WFwiLFwiZG9tYWluSWRcIjpcImJqMjlcIixcInNjb3BlXCI6W1wiRFJJVkUuQUxMXCIsXCJTSEFSRS5BTExcIixcIkZJTEUuQUxMXCIsXCJVU0VSLkFMTFwiLFwiVklFVy5BTExcIixcIlNUT1JBR0UuQUxMXCIsXCJTVE9SQUdFRklMRS5MSVNUXCIsXCJCQVRDSFwiLFwiT0FVVEguQUxMXCIsXCJJTUFHRS5BTExcIixcIklOVklURS5BTExcIixcIkFDQ09VTlQuQUxMXCJdLFwicm9sZVwiOlwidXNlclwiLFwicmVmXCI6XCJodHRwczovL3d3dy5hbGl5dW5kcml2ZS5jb20vXCIsXCJkZXZpY2VfaWRcIjpcImIyODIwNWU1YzU5NzRjY2JiODI3MDNiNjhkYjhjNDUxXCJ9IiwiZXhwIjoxNjQ4NjE0NDkzLCJpYXQiOjE2NDg2MDcyMzN9.d3HVLvv_LFw2QhPrhvjH_kICWQJX9sKKt7NjQEqI_xE2JO_b7D8rPsFTZz93PLvZ7MhCmudTjGImUpd-ehFnI4Go-1S7BGaKaHFILvP-sWy18Wpikowjxx9mSbzBM_cO6D1LI-kyYhXKWHgVdADfVIPniTDA7-ffhUpi7cAebEs
   */
  accessToken?: string;
  /**
   * @remarks
   * The profile picture of the user.
   * 
   * @example
   * aliyunpds.com/a.jpg
   */
  avatar?: string;
  /**
   * @remarks
   * The ID of the default space of the user.
   * 
   * @example
   * 1
   */
  defaultDriveId?: string;
  defaultSboxDriveId?: string;
  /**
   * @remarks
   * The name of the device that is bound to OAuth 2.0 Device Authorization Grant.
   * 
   * @example
   * 4683C25F
   */
  deviceName?: string;
  /**
   * @remarks
   * The domain ID.
   * 
   * @example
   * bj1
   */
  domainId?: string;
  existLink?: LinkInfo[];
  /**
   * @remarks
   * The time when the credential expires.
   * 
   * @example
   * 2019-09-01T06:57:48.813Z
   */
  expireTime?: string;
  /**
   * @remarks
   * The validity period of the token.
   * 
   * @example
   * 3600
   */
  expiresIn?: number;
  /**
   * @remarks
   * Indicates whether this is the first logon of the user.
   * 
   * @example
   * false
   */
  isFirstLogin?: boolean;
  needLink?: boolean;
  needRpVerify?: boolean;
  /**
   * @remarks
   * The nickname of the user.
   * 
   * @example
   * pdsuser
   */
  nickName?: string;
  pinSetup?: boolean;
  /**
   * @remarks
   * The refresh token.
   * 
   * @example
   * 060e78d36afb4879b51e4264e9541c16
   */
  refreshToken?: string;
  /**
   * @remarks
   * The role of the user.
   * 
   * @example
   * admin
   */
  role?: string;
  state?: string;
  /**
   * @remarks
   * The status of the user.
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * The type of the token.
   * 
   * *   Only Bearer is supported.
   * 
   * @example
   * Bearer
   */
  tokenType?: string;
  userData?: { [key: string]: string };
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * DING-xxxxx
   */
  userId?: string;
  /**
   * @remarks
   * The name of the user.
   * 
   * @example
   * pdsuser
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'access_token',
      avatar: 'avatar',
      defaultDriveId: 'default_drive_id',
      defaultSboxDriveId: 'default_sbox_drive_id',
      deviceName: 'device_name',
      domainId: 'domain_id',
      existLink: 'exist_link',
      expireTime: 'expire_time',
      expiresIn: 'expires_in',
      isFirstLogin: 'is_first_login',
      needLink: 'need_link',
      needRpVerify: 'need_rp_verify',
      nickName: 'nick_name',
      pinSetup: 'pin_setup',
      refreshToken: 'refresh_token',
      role: 'role',
      state: 'state',
      status: 'status',
      tokenType: 'token_type',
      userData: 'user_data',
      userId: 'user_id',
      userName: 'user_name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      avatar: 'string',
      defaultDriveId: 'string',
      defaultSboxDriveId: 'string',
      deviceName: 'string',
      domainId: 'string',
      existLink: { 'type': 'array', 'itemType': LinkInfo },
      expireTime: 'string',
      expiresIn: 'number',
      isFirstLogin: 'boolean',
      needLink: 'boolean',
      needRpVerify: 'boolean',
      nickName: 'string',
      pinSetup: 'boolean',
      refreshToken: 'string',
      role: 'string',
      state: 'string',
      status: 'string',
      tokenType: 'string',
      userData: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      userId: 'string',
      userName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.existLink)) {
      $dara.Model.validateArray(this.existLink);
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

