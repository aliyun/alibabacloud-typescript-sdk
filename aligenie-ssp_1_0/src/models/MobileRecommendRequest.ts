// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MobileRecommendRequestDeviceInfo extends $dara.Model {
  /**
   * @remarks
   * Value corresponding to the encoding type. Enter the Project ID of the project to which the product belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1414895629783187053
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type. Enter PROJECT_ID here.
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * Device ID. Enter the value of deviceOpenId or deviceUnionId.
   * 
   * This parameter is required.
   * 
   * @example
   * fjwZiYQdtkaI95fHaLNjYcaOA/mxUPzxxw2J5iBiTBnjUCWKwER4TSHCqkBnNOYvGJ4bRZA9KzBB2naS4r/Am0lSe8ECDAAOcJ9QKLFF6DM=
   */
  id?: string;
  /**
   * @remarks
   * Type of the device ID.
   * 
   * OPEN_ID: Default device ID.
   * UNION_ID: Organization-level device ID. This value is available only after an organization has been requested on the Tmall Genie Skill Application Open Platform.
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This parameter is required when **IdType** is set to **UNION_ID**.
   * 
   * @example
   * 暂无
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

export class MobileRecommendRequestUserInfo extends $dara.Model {
  /**
   * @remarks
   * The value corresponding to the encoding Type. Enter the Project ID of the project to which this product belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1414895629783187053
   */
  encodeKey?: string;
  /**
   * @remarks
   * Encoding type
   * 
   * This parameter is required.
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * ID value
   * 
   * This parameter is required.
   * 
   * @example
   * R457Av3qg/OXTwVnFt12z6MwNe0HAS699V6n63OaLdu+VmwvhcNfMzBd+la553wWJhj3kBMjgHq2Y2dyCFoDBg==
   */
  id?: string;
  /**
   * @remarks
   * ID Type
   * 
   * This parameter is required.
   * 
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
   * @remarks
   * Organization ID. This parameter is Required when IdType is set to UNION_ID.
   * 
   * @example
   * 暂无
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

export class MobileRecommendRequest extends $dara.Model {
  /**
   * @remarks
   * Bot ID.
   * 
   * @example
   * 10
   */
  botId?: string;
  /**
   * @remarks
   * Quantity of recommended Result
   * 
   * @example
   * 6
   */
  count?: string;
  /**
   * @remarks
   * Device identification information.
   * 
   * This parameter is required.
   */
  deviceInfo?: MobileRecommendRequestDeviceInfo;
  /**
   * @remarks
   * Required when the request type is STYLE.
   * 
   * @example
   * 轻音乐
   */
  style?: string;
  /**
   * @remarks
   * Request Type: Obtain daily recommendations, hot songs, or genre-based playlists.
   * 
   * @example
   * DAILY_REC
   */
  type?: string;
  /**
   * @remarks
   * User information – userId
   * 
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

