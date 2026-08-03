// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceByUserIdAndChanelRequestChannelInfo extends $dara.Model {
  /**
   * @remarks
   * Activation provisioning channel, such as WeChat or ThirdApp.
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

export class ListDeviceByUserIdAndChanelRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding type; enter the Project ID of the project to which the product belongs. You can view this in the Tmall Genie AI platform console.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding Type; enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * User Identifier; enter the value of userOpenId or userUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * The Type of the User ID:  
   * OPEN_ID: The default User ID identity.  
   * UNION_ID: The User ID identity at the organization dimension, which requires you to request an organization in advance on the Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID; required if IdType is UNION_ID.
   * 
   * @example
   * 1***2
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

export class ListDeviceByUserIdAndChanelRequest extends $dara.Model {
  /**
   * @remarks
   * Activation channel, such as WeChat mini program or third-party app.
   * 
   * This parameter is required.
   */
  channelInfo?: ListDeviceByUserIdAndChanelRequestChannelInfo;
  /**
   * @remarks
   * List of User Identifier information.
   * 
   * This parameter is required.
   */
  userInfo?: ListDeviceByUserIdAndChanelRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      channelInfo: 'ChannelInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelInfo: ListDeviceByUserIdAndChanelRequestChannelInfo,
      userInfo: ListDeviceByUserIdAndChanelRequestUserInfo,
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

