// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeEnhanceRequestChannelInfo extends $dara.Model {
  /**
   * @remarks
   * Activation Channel, such as WeChat or ThirdApp.
   * 
   * This parameter is required.
   * 
   * @example
   * WeChat、ThirdApp
   */
  channel?: string;
  /**
   * @remarks
   * Extension information.
   * 
   * @example
   * {}
   */
  extInfo?: string;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      extInfo: 'ExtInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      extInfo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeEnhanceRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type. Enter the Project ID of the project to which the product belongs. You can view it in the Tmall Genie AI Platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding Type. Enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier. Enter the value of userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @remarks
   * Type of User ID:  
   * OPENID: The default User ID identifier.  
   * UNIONID: The organization-dimension User ID identifier. You must request an organization in advance on the Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. Required if IdType is UNION_ID.
   * 
   * @example
   * 1
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

export class GetCodeEnhanceRequest extends $dara.Model {
  /**
   * @remarks
   * Activation Channel, such as WeChat mini program or third-party app.
   * 
   * This parameter is required.
   */
  channelInfo?: GetCodeEnhanceRequestChannelInfo;
  /**
   * @remarks
   * List of User Identifier information.
   * 
   * This parameter is required.
   */
  userInfo?: GetCodeEnhanceRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      channelInfo: 'ChannelInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfo: GetCodeEnhanceRequestChannelInfo,
      userInfo: GetCodeEnhanceRequestUserInfo,
    };
  }

  validate() {
    if(this.channelInfo && typeof (this.channelInfo as any).validate === 'function') {
      (this.channelInfo as any).validate();
    }
    if(this.userInfo && typeof (this.userInfo as any).validate === 'function') {
      (this.userInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

