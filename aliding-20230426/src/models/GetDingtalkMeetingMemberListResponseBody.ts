// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingMemberListResponseBodyData extends $dara.Model {
  /**
   * @example
   * channel-1
   */
  channelName?: string;
  /**
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  /**
   * @example
   * PC
   */
  deviceType?: string;
  /**
   * @example
   * 3600
   */
  duration?: number;
  /**
   * @example
   * 1638360000000
   */
  joinTime?: number;
  /**
   * @example
   * 1638363600000
   */
  leaveTime?: number;
  /**
   * @example
   * good
   */
  networkQuality?: string;
  /**
   * @example
   * 张三
   */
  nick?: string;
  /**
   * @example
   * host
   */
  role?: string;
  /**
   * @example
   * session123
   */
  sessionId?: string;
  /**
   * @example
   * online
   */
  status?: string;
  /**
   * @example
   * uid123456
   */
  unionId?: string;
  /**
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @example
   * 432432
   */
  workNo?: string;
  static names(): { [key: string]: string } {
    return {
      channelName: 'channelName',
      conferenceId: 'conferenceId',
      deviceType: 'deviceType',
      duration: 'duration',
      joinTime: 'joinTime',
      leaveTime: 'leaveTime',
      networkQuality: 'networkQuality',
      nick: 'nick',
      role: 'role',
      sessionId: 'sessionId',
      status: 'status',
      unionId: 'unionId',
      version: 'version',
      workNo: 'workNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelName: 'string',
      conferenceId: 'string',
      deviceType: 'string',
      duration: 'number',
      joinTime: 'number',
      leaveTime: 'number',
      networkQuality: 'string',
      nick: 'string',
      role: 'string',
      sessionId: 'string',
      status: 'string',
      unionId: 'string',
      version: 'string',
      workNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDingtalkMeetingMemberListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * []
   */
  data?: GetDingtalkMeetingMemberListResponseBodyData[];
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'currentPage',
      data: 'data',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      data: { 'type': 'array', 'itemType': GetDingtalkMeetingMemberListResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

