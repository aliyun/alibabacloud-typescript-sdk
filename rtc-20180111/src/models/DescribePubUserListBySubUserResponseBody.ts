// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodyPubUserDetailList extends $dara.Model {
  callIdList?: string[];
  /**
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @example
   * 旁路转推
   */
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      callIdList: 'CallIdList',
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callIdList: { 'type': 'array', 'itemType': 'string' },
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.callIdList)) {
      $dara.Model.validateArray(this.callIdList);
    }
    if(Array.isArray(this.networkList)) {
      $dara.Model.validateArray(this.networkList);
    }
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    if(Array.isArray(this.osList)) {
      $dara.Model.validateArray(this.osList);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    if(Array.isArray(this.sdkVersionList)) {
      $dara.Model.validateArray(this.sdkVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods extends $dara.Model {
  /**
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @example
   * 1614936817
   */
  leaveTs?: number;
  static names(): { [key: string]: string } {
    return {
      joinTs: 'JoinTs',
      leaveTs: 'LeaveTs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      joinTs: 'number',
      leaveTs: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBodySubUserDetail extends $dara.Model {
  /**
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @example
   * 4G
   */
  network?: string;
  networkList?: string[];
  /**
   * @example
   * 0
   */
  onlineDuration?: number;
  onlinePeriods?: DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods[];
  /**
   * @example
   * iOS
   */
  os?: string;
  osList?: string[];
  roles?: string[];
  /**
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  sdkVersionList?: string[];
  /**
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @example
   * 旁路转推
   */
  userIdAlias?: string;
  static names(): { [key: string]: string } {
    return {
      clientType: 'ClientType',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
      location: 'Location',
      network: 'Network',
      networkList: 'NetworkList',
      onlineDuration: 'OnlineDuration',
      onlinePeriods: 'OnlinePeriods',
      os: 'Os',
      osList: 'OsList',
      roles: 'Roles',
      sdkVersion: 'SdkVersion',
      sdkVersionList: 'SdkVersionList',
      userId: 'UserId',
      userIdAlias: 'UserIdAlias',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientType: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
      userIdAlias: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.networkList)) {
      $dara.Model.validateArray(this.networkList);
    }
    if(Array.isArray(this.onlinePeriods)) {
      $dara.Model.validateArray(this.onlinePeriods);
    }
    if(Array.isArray(this.osList)) {
      $dara.Model.validateArray(this.osList);
    }
    if(Array.isArray(this.roles)) {
      $dara.Model.validateArray(this.roles);
    }
    if(Array.isArray(this.sdkVersionList)) {
      $dara.Model.validateArray(this.sdkVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePubUserListBySubUserResponseBody extends $dara.Model {
  /**
   * @example
   * IN
   */
  callStatus?: string;
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  subUserDetail?: DescribePubUserListBySubUserResponseBodySubUserDetail;
  static names(): { [key: string]: string } {
    return {
      callStatus: 'CallStatus',
      pubUserDetailList: 'PubUserDetailList',
      requestId: 'RequestId',
      subUserDetail: 'SubUserDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callStatus: 'string',
      pubUserDetailList: { 'type': 'array', 'itemType': DescribePubUserListBySubUserResponseBodyPubUserDetailList },
      requestId: 'string',
      subUserDetail: DescribePubUserListBySubUserResponseBodySubUserDetail,
    };
  }

  validate() {
    if(Array.isArray(this.pubUserDetailList)) {
      $dara.Model.validateArray(this.pubUserDetailList);
    }
    if(this.subUserDetail && typeof (this.subUserDetail as any).validate === 'function') {
      (this.subUserDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

