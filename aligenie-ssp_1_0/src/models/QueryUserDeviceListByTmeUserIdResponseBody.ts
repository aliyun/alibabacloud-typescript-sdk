// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList extends $dara.Model {
  deviceName?: string;
  /**
   * @example
   * true
   */
  online?: boolean;
  openDeviceId?: string;
  tmeDeviceId?: string;
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
  authorizedDeviceList?: QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoListAuthorizedDeviceList[];
  openUserId?: string;
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
  aligenieUserInfoList?: QueryUserDeviceListByTmeUserIdResponseBodyResultAligenieUserInfoList[];
  encodeKey?: string;
  encodeType?: string;
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
  code?: number;
  message?: string;
  requestId?: string;
  result?: QueryUserDeviceListByTmeUserIdResponseBodyResult;
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

