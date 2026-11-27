// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the channel, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @remarks
   * The time when the user left the channel, represented as a UNIX timestamp in seconds.
   * 
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
  /**
   * @remarks
   * Call IDs of the user\"s communication streams.
   */
  callIdList?: string[];
  /**
   * @remarks
   * Client type. Valid values: WEB: Web client. NATIVE: Native client.
   * 
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @remarks
   * The time when the user first joined the channel, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the user last left the channel, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * Communication duration, measured from the first entry to the final exit, in seconds.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * Geographical location information, such as Zhejiang Province-Hangzhou City.
   * 
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @remarks
   * Network type, such as WiFi, 4G, etc.
   * 
   * @example
   * 4G
   */
  network?: string;
  /**
   * @remarks
   * Network types, such as WiFi, 4G, etc.
   */
  networkList?: string[];
  /**
   * @remarks
   * Online duration, in seconds.
   * 
   * @example
   * 0
   */
  onlineDuration?: number;
  /**
   * @remarks
   * Online period information.
   */
  onlinePeriods?: DescribePubUserListBySubUserResponseBodyPubUserDetailListOnlinePeriods[];
  /**
   * @remarks
   * Platform Type: If the client type is WEB, this field indicates the type of the browser. If the client type is NATIVE, this field indicates the operating system.
   * 
   * @example
   * iOS
   */
  os?: string;
  /**
   * @remarks
   * Platform Type: If the client type is WEB, this field indicates the type of the browser. If the client type is NATIVE, this field indicates the operating system.
   */
  osList?: string[];
  /**
   * @remarks
   * User roles. Valid values: SENDER: sender. RECEIVER: receiver.
   */
  roles?: string[];
  /**
   * @remarks
   * SDK Version.
   * 
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  /**
   * @remarks
   * List of software development kit (SDK) versions, such as 1.0.0, 1.1.1, etc.
   */
  sdkVersionList?: string[];
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @remarks
   * User ID alias.
   * 
   * @example
   * yi****
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
   * @remarks
   * The time when the user joined the channel, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @remarks
   * The time when the user left the channel, represented as a UNIX timestamp in seconds.
   * 
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
   * @remarks
   * Client type. Valid values: WEB: Web client. NATIVE: Native client.
   * 
   * @example
   * NATIVE
   */
  clientType?: string;
  /**
   * @remarks
   * The time when the user first joined the channel, represented as a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the user last left the channel, represented as a UNIX timestamp, in seconds.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * Communication duration, from the first entry to the final exit, in seconds.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * Geographic location information, such as Zhejiang Province-Hangzhou City.
   * 
   * @example
   * 浙江省-杭州市
   */
  location?: string;
  /**
   * @remarks
   * Network type, such as WiFi, 4G, etc.
   * 
   * @example
   * 4G
   */
  network?: string;
  /**
   * @remarks
   * Network type, such as WiFi, 4G, etc.
   */
  networkList?: string[];
  /**
   * @remarks
   * Online duration, in seconds.
   * 
   * @example
   * 0
   */
  onlineDuration?: number;
  /**
   * @remarks
   * Online period information.
   */
  onlinePeriods?: DescribePubUserListBySubUserResponseBodySubUserDetailOnlinePeriods[];
  /**
   * @remarks
   * Platform Type: If the client type is WEB, this field indicates the type of the browser. If the client type is NATIVE, this field indicates the operating system type.
   * 
   * @example
   * iOS
   */
  os?: string;
  /**
   * @remarks
   * Platform Type: If the client type is WEB, this field indicates the type of the browser. If the client type is NATIVE, this field indicates the operating system type.
   */
  osList?: string[];
  /**
   * @remarks
   * User role.
   */
  roles?: string[];
  /**
   * @remarks
   * SDK Version.
   * 
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  /**
   * @remarks
   * List of SDK versions, such as 1.0.0, 1.1.1, etc.
   */
  sdkVersionList?: string[];
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  /**
   * @remarks
   * User ID alias.
   * 
   * @example
   * yi****
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
   * @remarks
   * Communication status. Valid values:  
   * - **IN**: In progress.  
   * - **OUT**: Ended.
   * 
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @remarks
   * Details of publishing users.
   */
  pubUserDetailList?: DescribePubUserListBySubUserResponseBodyPubUserDetailList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * Subscriber user details.
   */
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

