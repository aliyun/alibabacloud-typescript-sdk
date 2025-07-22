// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCallResponseBodyCallInfo extends $dara.Model {
  /**
   * @remarks
   * App ID。
   * 
   * @example
   * xxxxxxxx
   */
  appId?: string;
  /**
   * @example
   * IN
   */
  callStatus?: string;
  /**
   * @example
   * 123456
   */
  channelId?: string;
  /**
   * @example
   * 1615860711
   */
  createdTs?: number;
  /**
   * @example
   * 1615860811
   */
  destroyedTs?: number;
  /**
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
   * @example
   * 0
   */
  pubAudio?: number;
  /**
   * @example
   * 0
   */
  pubVideo1080?: number;
  /**
   * @example
   * 0
   */
  pubVideo360?: number;
  /**
   * @example
   * 0
   */
  pubVideo720?: number;
  /**
   * @example
   * 0
   */
  pubVideoScreenShare?: number;
  /**
   * @example
   * 0
   */
  subAudio?: number;
  /**
   * @example
   * 0
   */
  subVideo1080?: number;
  /**
   * @example
   * 0
   */
  subVideo360?: number;
  /**
   * @example
   * 0
   */
  subVideo720?: number;
  /**
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

export class DescribeCallResponseBodyUserDetailList extends $dara.Model {
  /**
   * @example
   * GOOD
   */
  callExp?: string;
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
  durMetricStatData?: DescribeCallResponseBodyUserDetailListDurMetricStatData;
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
  onlinePeriods?: DescribeCallResponseBodyUserDetailListOnlinePeriods[];
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
  callInfo?: DescribeCallResponseBodyCallInfo;
  /**
   * @example
   * 231470C1-ACFB-4C9F-844F-4CFE1E3804C5
   */
  requestId?: string;
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

