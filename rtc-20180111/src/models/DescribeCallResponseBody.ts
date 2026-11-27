// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallResponseBodyCallInfo extends $dara.Model {
  /**
   * @remarks
   * The app ID.
   * 
   * @example
   * testappid
   */
  appId?: string;
  /**
   * @remarks
   * The communication status. Valid values:
   * - **IN**: In progress.
   * - **OUT**: Ended.
   * 
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @remarks
   * The channel ID.
   * 
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @remarks
   * The time when the channel was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the channel was released. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
   * @remarks
   * The duration of the channel. Unit: seconds.
   * 
   * @example
   * 100
   */
  duration?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      callStatus: 'CallStatus',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      duration: 'Duration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      callStatus: 'string',
      channelId: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      duration: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListDurMetricStatData extends $dara.Model {
  /**
   * @remarks
   * The duration of published audio. Unit: seconds.
   * 
   * @example
   * 0
   */
  pubAudio?: number;
  /**
   * @remarks
   * The duration of published 1080P video. Unit: seconds.
   * 
   * @example
   * 0
   */
  pubVideo1080?: number;
  /**
   * @remarks
   * The duration of published 360P video. Unit: seconds.
   * 
   * @example
   * 0
   */
  pubVideo360?: number;
  /**
   * @remarks
   * The duration of published 720P video. Unit: seconds.
   * 
   * @example
   * 0
   */
  pubVideo720?: number;
  /**
   * @remarks
   * The duration of published screen sharing. Unit: seconds.
   * 
   * @example
   * 0
   */
  pubVideoScreenShare?: number;
  /**
   * @remarks
   * The duration of subscribed audio. Unit: seconds.
   * 
   * @example
   * 0
   */
  subAudio?: number;
  /**
   * @remarks
   * The duration of subscribed 1080P video. Unit: seconds.
   * 
   * @example
   * 0
   */
  subVideo1080?: number;
  /**
   * @remarks
   * The duration of subscribed 360P video. Unit: seconds.
   * 
   * @example
   * 0
   */
  subVideo360?: number;
  /**
   * @remarks
   * The duration of subscribed 720P video. Unit: seconds.
   * 
   * @example
   * 0
   */
  subVideo720?: number;
  /**
   * @remarks
   * The duration of subscribed screen sharing. Unit: seconds.
   * 
   * @example
   * 0
   */
  subVideoScreenShare?: number;
  static names(): { [key: string]: string } {
    return {
      pubAudio: 'PubAudio',
      pubVideo1080: 'PubVideo1080',
      pubVideo360: 'PubVideo360',
      pubVideo720: 'PubVideo720',
      pubVideoScreenShare: 'PubVideoScreenShare',
      subAudio: 'SubAudio',
      subVideo1080: 'SubVideo1080',
      subVideo360: 'SubVideo360',
      subVideo720: 'SubVideo720',
      subVideoScreenShare: 'SubVideoScreenShare',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pubAudio: 'number',
      pubVideo1080: 'number',
      pubVideo360: 'number',
      pubVideo720: 'number',
      pubVideoScreenShare: 'number',
      subAudio: 'number',
      subVideo1080: 'number',
      subVideo360: 'number',
      subVideo720: 'number',
      subVideoScreenShare: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCallResponseBodyUserDetailListOnlinePeriods extends $dara.Model {
  /**
   * @remarks
   * The time when the user joined the channel. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  joinTs?: number;
  /**
   * @remarks
   * The time when the user left the channel. The value is a UNIX timestamp in seconds.
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

export class DescribeCallResponseBodyUserDetailList extends $dara.Model {
  /**
   * @remarks
   * The call experience. Valid values:
   * - **GOOD**: Good.
   * - **BAD**: Poor.
   * 
   * @example
   * GOOD
   */
  callExp?: string;
  /**
   * @remarks
   * The time when the user first joined the channel. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1614936817
   */
  createdTs?: number;
  /**
   * @remarks
   * The time when the user last left the channel. The value is a UNIX timestamp in seconds. If the communication has not ended, the value is empty.
   * 
   * @example
   * 1614936817
   */
  destroyedTs?: number;
  /**
   * @remarks
   * The duration statistics.
   */
  durMetricStatData?: DescribeCallResponseBodyUserDetailListDurMetricStatData;
  /**
   * @remarks
   * The communication duration from the first join to the last leave. Unit: seconds.
   * 
   * @example
   * 0
   */
  duration?: number;
  /**
   * @remarks
   * The geographic location, such as Beijing-Beijing.
   * 
   * @example
   * Zhejiang-Hangzhou
   */
  location?: string;
  /**
   * @remarks
   * The network type, such as Wi-Fi or 4G.
   * 
   * @example
   * 4G
   */
  network?: string;
  /**
   * @remarks
   * The network type, such as Wi-Fi or 4G.
   */
  networkList?: string[];
  /**
   * @remarks
   * The online duration. Unit: seconds.
   * 
   * @example
   * 0
   */
  onlineDuration?: number;
  /**
   * @remarks
   * The online periods.
   */
  onlinePeriods?: DescribeCallResponseBodyUserDetailListOnlinePeriods[];
  /**
   * @remarks
   * The platform type. If the user client is WEB, this indicates the type of the browser. If the client is NATIVE, this indicates the operating system type.
   * 
   * @example
   * iOS
   */
  os?: string;
  /**
   * @remarks
   * The platform type. If the user client is WEB, this indicates the type of the browser. If the client is NATIVE, this indicates the operating system type.
   */
  osList?: string[];
  /**
   * @remarks
   * The user roles.
   */
  roles?: string[];
  /**
   * @remarks
   * The SDK version, such as 1.0.0 or 1.1.1.
   * 
   * @example
   * 1.0.0
   */
  sdkVersion?: string;
  /**
   * @remarks
   * The list of SDK versions, such as 1.0.0 or 1.1.1.
   */
  sdkVersionList?: string[];
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * testuserid
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      callExp: 'CallExp',
      createdTs: 'CreatedTs',
      destroyedTs: 'DestroyedTs',
      durMetricStatData: 'DurMetricStatData',
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
    };
  }

  static types(): { [key: string]: any } {
    return {
      callExp: 'string',
      createdTs: 'number',
      destroyedTs: 'number',
      durMetricStatData: DescribeCallResponseBodyUserDetailListDurMetricStatData,
      duration: 'number',
      location: 'string',
      network: 'string',
      networkList: { 'type': 'array', 'itemType': 'string' },
      onlineDuration: 'number',
      onlinePeriods: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailListOnlinePeriods },
      os: 'string',
      osList: { 'type': 'array', 'itemType': 'string' },
      roles: { 'type': 'array', 'itemType': 'string' },
      sdkVersion: 'string',
      sdkVersionList: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(this.durMetricStatData && typeof (this.durMetricStatData as any).validate === 'function') {
      (this.durMetricStatData as any).validate();
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

export class DescribeCallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The basic communication information.
   */
  callInfo?: DescribeCallResponseBodyCallInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
  /**
   * @remarks
   * The list of user details.
   */
  userDetailList?: DescribeCallResponseBodyUserDetailList[];
  static names(): { [key: string]: string } {
    return {
      callInfo: 'CallInfo',
      requestId: 'RequestId',
      userDetailList: 'UserDetailList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callInfo: DescribeCallResponseBodyCallInfo,
      requestId: 'string',
      userDetailList: { 'type': 'array', 'itemType': DescribeCallResponseBodyUserDetailList },
    };
  }

  validate() {
    if(this.callInfo && typeof (this.callInfo as any).validate === 'function') {
      (this.callInfo as any).validate();
    }
    if(Array.isArray(this.userDetailList)) {
      $dara.Model.validateArray(this.userDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

