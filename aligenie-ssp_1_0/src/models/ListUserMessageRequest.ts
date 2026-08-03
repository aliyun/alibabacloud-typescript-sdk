// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserMessageRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. When the encoding type is SKILLID, this value is the application\\"s Skill ID. When the encoding type is PACKAGENAME, this value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the user identifier for Maojing, and each method corresponds to a different encoding type: - PACKAGENAME: APK package name, used for Android application client links - SKILLID: Skill ID, used for cloud-based links
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User identifier (userOpenId or userUnionId)
   * 
   * This parameter is required.
   * 
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @remarks
   * Type of user ID: - OPENID: Default user ID identifier - UNIONID: Organization-level user ID identifier, available only after an organization has been registered on the Maojing skill application Open Platform
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is UNION_ID
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

export class ListUserMessageRequest extends $dara.Model {
  /**
   * @remarks
   * After a specific point in time
   * 
   * @example
   * 2022-07-27 14:06:55.984
   */
  beforeTime?: string;
  /**
   * @remarks
   * User identifier information
   * 
   * This parameter is required.
   */
  userInfo?: ListUserMessageRequestUserInfo;
  /**
   * @remarks
   * Number of records to query
   * 
   * @example
   * 10
   */
  limit?: number;
  static names(): { [key: string]: string } {
    return {
      beforeTime: 'BeforeTime',
      userInfo: 'UserInfo',
      limit: 'limit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beforeTime: 'string',
      userInfo: ListUserMessageRequestUserInfo,
      limit: 'number',
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

