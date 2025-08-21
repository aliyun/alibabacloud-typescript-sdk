// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRecommendContentRequestDeviceInfo extends $dara.Model {
  /**
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @example
   * DAFE****ce3ej=
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
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

export class ListRecommendContentRequestRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  count?: number;
  /**
   * @example
   * song
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRecommendContentRequestUserInfo extends $dara.Model {
  /**
   * @example
   * 12**45
   */
  encodeKey?: string;
  /**
   * @example
   * PACKAGE_NAME
   */
  encodeType?: string;
  /**
   * @example
   * HOFF****my7Iw=
   */
  id?: string;
  /**
   * @example
   * OPEN_ID
   */
  idType?: string;
  /**
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

export class ListRecommendContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deviceInfo?: ListRecommendContentRequestDeviceInfo;
  /**
   * @remarks
   * This parameter is required.
   */
  request?: ListRecommendContentRequestRequest;
  /**
   * @remarks
   * This parameter is required.
   */
  userInfo?: ListRecommendContentRequestUserInfo;
  static names(): { [key: string]: string } {
    return {
      deviceInfo: 'DeviceInfo',
      request: 'Request',
      userInfo: 'UserInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceInfo: ListRecommendContentRequestDeviceInfo,
      request: ListRecommendContentRequestRequest,
      userInfo: ListRecommendContentRequestUserInfo,
    };
  }

  validate() {
    if(this.deviceInfo && typeof (this.deviceInfo as any).validate === 'function') {
      (this.deviceInfo as any).validate();
    }
    if(this.request && typeof (this.request as any).validate === 'function') {
      (this.request as any).validate();
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

