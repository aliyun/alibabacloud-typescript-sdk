// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceByUserIdAndChanelRequestChannelInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * WeChat、ThirdApp
   */
  channel?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 123
   */
  encodeKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
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
   * This parameter is required.
   */
  channelInfo?: ListDeviceByUserIdAndChanelRequestChannelInfo;
  /**
   * @remarks
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

