// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAndDoVoipCallForHotelRequestDeviceInfo extends $dara.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
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

export class CheckAndDoVoipCallForHotelRequestUserInfo extends $dara.Model {
  encodeKey?: string;
  encodeType?: string;
  id?: string;
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

export class CheckAndDoVoipCallForHotelRequest extends $dara.Model {
  bizData?: string;
  calleeNick?: string;
  calleePhoneNum?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: CheckAndDoVoipCallForHotelRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: CheckAndDoVoipCallForHotelRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      bizData: 'BizData',
      calleeNick: 'CalleeNick',
      calleePhoneNum: 'CalleePhoneNum',
      deviceInfo: 'DeviceInfo',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizData: 'string',
      calleeNick: 'string',
      calleePhoneNum: 'string',
      deviceInfo: CheckAndDoVoipCallForHotelRequestDeviceInfo,
      userInfo: CheckAndDoVoipCallForHotelRequestUserInfo,
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

