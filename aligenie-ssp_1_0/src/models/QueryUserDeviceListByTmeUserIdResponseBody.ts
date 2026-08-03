// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList extends $dara.Model {
  /**
   * @remarks
   * device name
   * 
   * @example
   * CC
   */
  deviceName?: string;
  /**
   * @remarks
   * Indicates whether the device is online
   * 
   * @example
   * true
   */
  online?: boolean;
  /**
   * @remarks
   * Device ID
   * 
   * @example
   * fjwZiYQdtkaI95fHaLNjYcaOA/mxUPzxxw2J5iBiTBnjUCWKwER4TSHCqkBnNOYvGJ4bRZA9KzBB2naS4r/Am0lSe8ECDAAOcJ9QKLFF6DM=
   */
  openDeviceId?: string;
  /**
   * @remarks
   * Device ID exposed to TME
   */
  tmeDeviceId?: string;
  /**
   * @remarks
   * TME product ID
   */
  tmeProductId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceName: 'DeviceName',
      online: 'Online',
      openDeviceId: 'OpenDeviceId',
      tmeDeviceId: 'TmeDeviceId',
      tmeProductId: 'TmeProductId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceName: 'string',
      online: 'boolean',
      openDeviceId: 'string',
      tmeDeviceId: 'string',
      tmeProductId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoList extends $dara.Model {
  /**
   * @remarks
   * User Authorization device List
   */
  authorizedDeviceList?: QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList[];
  /**
   * @remarks
   * User ID
   * 
   * @example
   * R457Av3qg/OXTwVnFt12z6MwNe0HAS699V6n63OaLdu+VmwvhcNfMzBd+la553wWJhj3kBMjgHq2Y2dyCFoDBg==
   */
  openUserId?: string;
  /**
   * @remarks
   * User nickname
   * 
   * @example
   * a***e
   */
  userNickname?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedDeviceList: 'AuthorizedDeviceList',
      openUserId: 'OpenUserId',
      userNickname: 'UserNickname',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedDeviceList: { 'type': 'array', 'itemType': QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList },
      openUserId: 'string',
      userNickname: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.authorizedDeviceList)) {
      $dara.Model.validateArray(this.authorizedDeviceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Tmall Genie User List
   */
  aligenieUserInfoList?: QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoList[];
  /**
   * @remarks
   * entity key (pass-through by third party)
   * 
   * @example
   * 12****7
   */
  encodeKey?: string;
  /**
   * @remarks
   * entity Type (pass-through by third party)
   * 
   * @example
   * PROJECT_ID
   */
  encodeType?: string;
  /**
   * @remarks
   * "KG": KuGou  
   * "KW": Kuwo  
   * "QM": QQ Music
   * 
   * @example
   * KG
   */
  sp?: string;
  static names(): { [key: string]: string } {
    return {
      aligenieUserInfoList: 'AligenieUserInfoList',
      encodeKey: 'EncodeKey',
      encodeType: 'EncodeType',
      sp: 'Sp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aligenieUserInfoList: { 'type': 'array', 'itemType': QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoList },
      encodeKey: 'string',
      encodeType: 'string',
      sp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aligenieUserInfoList)) {
      $dara.Model.validateArray(this.aligenieUserInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserDeviceListByTmeUserIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * Response message
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 860194F7-9593-50EA-8E53-BCEC0D325A00
   */
  requestId?: string;
  /**
   * @remarks
   * Response Result
   */
  result?: QueryUserDeviceListByTmeUserIdResponseBodyResult;
  /**
   * @remarks
   * Flag indicating whether the invocation succeeded
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: QueryUserDeviceListByTmeUserIdResponseBodyResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

