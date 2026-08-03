// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReadMessageRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. When the encoding type is SKILLID, this value is the Skill ID of the application. When the encoding type is PACKAGENAME, this value is the packageName of the corresponding client app.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. There are multiple ways to obtain the User Identifier in Maojing, and each method corresponds to a different encoding type: PACKAGENAME for the APK package name used in Android client application links, and SKILLID for the skill ID used in cloud-based links.
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
   * Type of User ID: OPENID is the default User ID identity. UNIONID is the organization-dimension User ID identity, which is available only after an organization has been registered on the Maojing Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required when IdType is UNION_ID.
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

export class ReadMessageRequest extends $dara.Model {
  /**
   * @remarks
   * Message ID
   * 
   * @example
   * 12345
   */
  messageId?: number;
  /**
   * @remarks
   * User information
   * 
   * This parameter is required.
   */
  userInfo?: ReadMessageRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      messageId: 'MessageId',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageId: 'number',
      userInfo: ReadMessageRequestUserInfo,
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

