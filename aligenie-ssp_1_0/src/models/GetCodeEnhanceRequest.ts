// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeEnhanceRequestChannelInfo extends $dara.Model {
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

export class GetCodeEnhanceRequestUserInfo extends $dara.Model {
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
   * DAFE****ce3ej=
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
   * This parameter is required.
   */
  channelInfo?: GetCodeEnhanceRequestChannelInfo;
  /**
   * @remarks
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

