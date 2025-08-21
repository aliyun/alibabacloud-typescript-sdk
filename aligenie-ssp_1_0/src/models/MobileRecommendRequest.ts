// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecommendRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1414895629783187053
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
   * fjwZiYQdtkaI95fHaLNjYcaOA/mxUPzxxw2J5iBiTBnjUCWKwER4TSHCqkBnNOYvGJ4bRZA9KzBB2naS4r/Am0lSe8ECDAAOcJ9QKLFF6DM=
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

export class MobileRecommendRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1414895629783187053
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
   * R457Av3qg/OXTwVnFt12z6MwNe0HAS699V6n63OaLdu+VmwvhcNfMzBd+la553wWJhj3kBMjgHq2Y2dyCFoDBg==
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

export class MobileRecommendRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  botId?: string;
  /**
   * @example
   * 6
   */
  count?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: MobileRecommendRequestDeviceInfo;
  style?: string;
  /**
   * @example
   * DAILY_REC
   */
  type?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: MobileRecommendRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      botId: 'BotId',
      count: 'Count',
      deviceInfo: 'DeviceInfo',
      style: 'Style',
      type: 'Type',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      botId: 'string',
      count: 'string',
      deviceInfo: MobileRecommendRequestDeviceInfo,
      style: 'string',
      type: 'string',
      userInfo: MobileRecommendRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
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

