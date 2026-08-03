// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SendMessageRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. When the encoding type is SKILLID, this value is the application\\"s Skill ID. When the encoding type is PACKAGENAME, this value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123L
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the User Identifier for Maojing, and each method corresponds to a different encoding type: - PACKAGENAME: APK package name, used for Android application customer links - SKILLID: Skill ID, used for cloud-based links
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier (userOpenId or userUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * 123L
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID: - OPENID: default User ID identity - UNIONID: organization-dimension User ID identity, available only after an organization has been requested on the Maojing Skill Application Open Platform
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID; required when IdType is UNION_ID
   * 
   * @example
   * 1**2
   */
  organizationId?: string;
  static names(): { [key: string]: string } {
    return {
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      id: 'Id',
      idType: 'IdType',
      organizationId: 'OrganizationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encodeKey: 'string',
      encodeType: 'string',
      id: 'string',
      idType: 'string',
      organizationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SendMessageRequest extends $dara.Model {
  /**
   * @remarks
   * Message URL
   * 
   * @example
   * http://xx
   */
  url?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: SendMessageRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      url: 'Url',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
      userInfo: SendMessageRequestUserInfo,
    };
  }

  validate() {
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

