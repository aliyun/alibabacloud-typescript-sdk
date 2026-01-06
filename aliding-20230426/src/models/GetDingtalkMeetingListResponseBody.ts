// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDingtalkMeetingListResponseBodyData extends $dara.Model {
  /**
   * @example
   * cluster-1
   */
  clusterName?: string;
  /**
   * @example
   * 61289fxxx
   */
  conferenceId?: string;
  /**
   * @example
   * 012345
   */
  creatorId?: string;
  /**
   * @example
   * 张三
   */
  creatorNick?: string;
  /**
   * @example
   * 3423423
   */
  creatorWorkNo?: string;
  /**
   * @example
   * 技术部
   */
  deptName?: string;
  /**
   * @example
   * true
   */
  enableQualityMonitor?: boolean;
  /**
   * @example
   * 1638363600000
   */
  endTime?: number;
  /**
   * @example
   * free
   */
  freeType?: string;
  /**
   * @example
   * meeting
   */
  scene?: string;
  /**
   * @example
   * 1638360000000
   */
  startTime?: number;
  /**
   * @example
   * 3600
   */
  timeLength?: number;
  /**
   * @example
   * 技术分享会
   */
  title?: string;
  /**
   * @example
   * 10
   */
  userCount?: number;
  static names(): { [key: string]: string } {
    return {
      clusterName: 'clusterName',
      conferenceId: 'conferenceId',
      creatorId: 'creatorId',
      creatorNick: 'creatorNick',
      creatorWorkNo: 'creatorWorkNo',
      deptName: 'deptName',
      enableQualityMonitor: 'enableQualityMonitor',
      endTime: 'endTime',
      freeType: 'freeType',
      scene: 'scene',
      startTime: 'startTime',
      timeLength: 'timeLength',
      title: 'title',
      userCount: 'userCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterName: 'string',
      conferenceId: 'string',
      creatorId: 'string',
      creatorNick: 'string',
      creatorWorkNo: 'string',
      deptName: 'string',
      enableQualityMonitor: 'boolean',
      endTime: 'number',
      freeType: 'string',
      scene: 'string',
      startTime: 'number',
      timeLength: 'number',
      title: 'string',
      userCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDingtalkMeetingListResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * []
   */
  data?: GetDingtalkMeetingListResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': GetDingtalkMeetingListResponseBodyData },
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

